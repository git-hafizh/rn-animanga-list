import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
import { Text, SafeAreaView, Image, FlatList, View } from 'react-native';
import { Rating } from 'react-native-ratings';
import { GET_GENRE_ANIME, GET_SCORE_ANIME, GET_WEEKDAY_ANIME } from '../../../constants/constants';
import { LoadingIndicator } from '../../../helper';
import { Styles } from '../ScheduleAnime.style';

const WednesdayAnime = () => {
  const [day, setDay] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const getWeekdayAnimeAiring = () => {
      axios.get(GET_WEEKDAY_ANIME + "/wednesday", { cancelToken: source.token }).then((result) => {
        setDay(result.data.wednesday)
        setLoading(false)
      })
        .catch((err) => {
          console.log(err)
          setLoading(false)
        })
    }

    getWeekdayAnimeAiring();
    return () => {
      source.cancel();
    };

  }, [])

  return (
    <SafeAreaView style={Styles.containerSection}>
      {loading ? <LoadingIndicator /> : day.length > 0 ?
        <FlatList
          columnWrapperStyle={Styles.listWrap}
          numColumns={3}
          data={day}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
              <View style={Styles.content}>
                <Image
                  resizeMode="cover"
                  style={Styles.image_prop}
                  source={{
                    uri: item.image_url
                  }}
                />

                <Text style={Styles.genreOne}>{GET_GENRE_ANIME(item)}</Text>
                <Text
                  ellipsizeMode='tail'
                  numberOfLines={2}
                  style={Styles.title}>{item.title}</Text>
                <View style={Styles.info}>
                  <Rating
                    type='star'
                    startingValue={item.score / 2}
                    imageSize={16}
                    ratingCount={1}
                    readonly
                  />
                  <View>
                    <Text style={Styles.infoScore}>{GET_SCORE_ANIME(item)}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
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

export default WednesdayAnime
