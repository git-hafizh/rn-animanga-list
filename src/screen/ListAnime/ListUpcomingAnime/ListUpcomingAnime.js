import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Linking, TouchableOpacity, SafeAreaView } from 'react-native';
import axios from 'axios';
import Image from 'react-native-scalable-image';
import { Styles } from '../ListAnime.style';
import { Col, Grid } from 'react-native-easy-grid';
import { GET_AIRED_ANIME, GET_EPISODES_ANIME, GET_SCORE_ANIME, GET_TOP_UPCOMING_ANIME, GET_TYPE_ANIME } from '../../../constants/constants';
import { Rating } from 'react-native-ratings';
import { LoadingIndicator } from '../../../helper';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ListUpcomingAnime = () => {
  const [listUpcoming, setListUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const getListTopUpcomingAnime = () => {
      axios.get(GET_TOP_UPCOMING_ANIME, { cancelToken: source.token }).then((result) => {
        setListUpcoming(result.data.top)
        setLoading(false)
      })
        .catch((err) => {
          console.log(err)
          setLoading(false)
        })
    }

    getListTopUpcomingAnime();
    return () => {
      source.cancel();
    };

  }, []);

  return (
    <SafeAreaView style={Styles.containerSection}>
      {loading ? <LoadingIndicator /> : listUpcoming.length > 0 ?
        <FlatList
          data={listUpcoming}
          renderItem={({ item }) =>
            <View style={item.rank == 1 ? Styles.rankOneSection : Styles.content}>
              <Grid>
                <Col size={8}>
                  <View style={Styles.rankAiring}>
                    <View style={item.rank == 1 ? Styles.wrapRankOne : ""}>
                      <Text style={item.rank == 1 ? Styles.rankOneNumber : Styles.rankText}>
                        {item.rank}
                      </Text>
                    </View>
                  </View>
                </Col>
                <Col size={47}>
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
                <Col size={47}>
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
                        <Text style={Styles.infoScore}>{GET_SCORE_ANIME(item)}</Text>
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
                          {GET_AIRED_ANIME(item)}
                        </Text>
                      </Text>
                    </View>
                    <View style={Styles.btnBottom}>
                      <TouchableOpacity
                        style={Styles.btnSeeDetails}
                        onPress={() => Linking.openURL(item.url)}
                      >
                        <Text style={Styles.textSeeDetails}>See Details </Text>
                      </TouchableOpacity>
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
          <Text style={Styles.tbcText}>To be confirmed...</Text>
        </View>
      }
    </SafeAreaView>
  )
}

export default ListUpcomingAnime

