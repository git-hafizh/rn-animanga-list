import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import { Styles } from '../SeasonCategory.style';
import { GET_AIRED_ANIME, GET_EPISODES_ANIME, GET_GENRE_ANIME, GET_SEASON_ANIME, GET_TYPE_ANIME, YEAR } from '../../../constants/constants';
import { Rating } from 'react-native-ratings';
import Image from 'react-native-scalable-image';
import { Col, Grid } from 'react-native-easy-grid';
import { useNavigation } from '@react-navigation/native';
import { LoadingIndicator } from '../../../helper';
import { Ionicons } from '@expo/vector-icons';

const SummerSeason = () => {
  const [summer, setSummer] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    
    const getAnimeSummer = () => {
      axios.get(GET_SEASON_ANIME + "/summer", { cancelToken: source.token }).then((result) => {
        setSummer(result.data.anime)
        setLoading(false)
      })
        .catch((err) => {
          console.log(err)
          setLoading(false)
        })
    }

    getAnimeSummer();
    return () => {
      source.cancel();
    };
    
  }, [])

  return (
    <SafeAreaView style={Styles.containerSection}>
      {loading ? <LoadingIndicator/> : summer.length > 0 ?
        <FlatList
          data={summer}
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
                          {GET_AIRED_ANIME(item)}
                        </Text>
                      </Text>
                      <Text style={Styles.infoSubDetails}>Genre:
                      <Text style={Styles.infoSubText}>
                          {GET_GENRE_ANIME(item)}
                        </Text>
                      </Text>
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

export default SummerSeason;
