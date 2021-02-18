import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import { Styles } from './SearchAnime.style';
import { GET_EPISODES_ANIME, GET_FORMATTED_DATE_ANIME, GET_TYPE_ANIME } from '../../constants/constants';
import { Rating } from 'react-native-ratings';
import Image from 'react-native-scalable-image';
import { Col, Grid } from 'react-native-easy-grid';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';
import { LoadingIndicator } from '../../helper';

const SearchAnime = () => {
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    // getFilteredAnime();
  }, [])

  const getFilteredAnime = async () => {
    await axios.get(`https://api.jikan.moe/v3/search/anime?q=${search}`).then((result) => {
      setLoading(true)
      setTimeout(() => {
        setFiltered(result.data.results)
        setLoading(false)
      }, 2000)
    })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }

  const onSearch = (text) => {
    setSearch(text)
  }

  const onSubmit = () => {
    getFilteredAnime();
  }

  return (
    <SafeAreaView style={Styles.containerSection}>
      <View style={Styles.searchBarContainer}>
        <SearchBar
          round
          lightTheme
          searchIcon={{ size: 24 }}
          placeholder="Search anime here..."
          value={search}
          onChangeText={onSearch}
          onSubmitEditing={onSubmit}
        />
      </View>
      {loading ? <LoadingIndicator/> : filtered.length > 0 ?
        <FlatList
          data={filtered}
          renderItem={({ item }) =>
            <View style={Styles.content}>
              <Grid>
                <Col size={50}>
                  <View style={Styles.image_propShadow}>
                    <Image
                      width={120}
                      resizeMode="cover"
                      style={Styles.image_prop}
                      source={{
                        uri: item.image_url
                      }}
                    />
                  </View>
                </Col>
                <Col size={50}>
                  <View style={Styles.containerInfo}>
                    <Text
                      ellipsizeMode='tail'
                      numberOfLines={2}
                      style={Styles.title}>{item.title}</Text>
                    <View style={Styles.info}>
                      <View style={Styles.infoStarRatings}>
                        <Rating
                          type='star'
                          startingValue={item.score / 2}
                          imageSize={16}
                          readonly
                        />
                        <Text style={Styles.infoScore}>{item.score}</Text>
                      </View>
                      <Text style={Styles.infoSubDetails}>Episodes:
                      <Text style={Styles.infoSubText}>
                          {GET_EPISODES_ANIME(item)}
                        </Text>
                      </Text>
                      <Text style={Styles.infoSubDetails}>Type:
                      <Text style={Styles.infoSubText}>
                          {GET_TYPE_ANIME(item)}
                        </Text>
                      </Text>
                      <Text style={Styles.infoSubDetails}>Aired:
                      <Text style={Styles.infoSubText}>
                          {GET_FORMATTED_DATE_ANIME(item)}
                        </Text>
                      </Text>
                      <View style={Styles.btnBottom}>
                        <TouchableOpacity
                          style={Styles.btnSeeDetails}
                          onPress={() => Linking.openURL(item.url)}
                        >
                          <Text style={Styles.textSeeDetails}>See Details </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Col>
              </Grid>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
        />
        :
        <View style={Styles.tbc}>
          <Text style={Styles.tbcText}>No anime to display...</Text>
        </View>
      }

    </SafeAreaView>
  )
}

export default SearchAnime;
