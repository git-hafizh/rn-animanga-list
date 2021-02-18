import React, { useEffect, useState } from 'react'
import { View, Text, Image, Linking, SafeAreaView } from 'react-native';
import axios from 'axios';
import { Styles } from './TodayAiringAnime.style';
import { GET_TODAY_ANIME, TODAY } from '../../../constants/constants';
import { useNavigation } from '@react-navigation/native';
import Carousel, { Pagination } from 'react-native-x2-carousel';
import { TouchableOpacity } from 'react-native';
import { LoadingIndicator } from '../../../helper';

const TodayAiringAnime = () => {
  const [airingToday, setAiringToday] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTodayAnimeAiring();
  }, []);

  const getTodayAnimeAiring = () => {
    axios.get(GET_TODAY_ANIME).then((result) => {
      setAiringToday(result.data[TODAY])
      setLoading(false)
    })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }

  return (
    <SafeAreaView style={Styles.containerSection}>
      <View style={Styles.bgTodayAnime}>
        <View style={Styles.headerSub}>
          <Text style={Styles.subType}>Anime Airing Today</Text>
        </View>
        {loading ? <LoadingIndicator /> : airingToday.length > 0 ?

          <Carousel
            autoplay={true}
            loop={true}
            pagination={Pagination}
            data={airingToday}
            renderItem={(data, index) => (
              <View style={Styles.content} key={index}>
                <TouchableOpacity onPress={() => Linking.openURL(data.url)}>
                  <Image
                    resizeMode="cover"
                    style={Styles.image_prop}
                    source={{
                      uri: data.image_url
                    }}
                  />
                </TouchableOpacity>
                <Text
                  ellipsizeMode='tail'
                  numberOfLines={2}
                  style={Styles.title}>{data.title}</Text>
              </View>
            )
            }
          />
          :
          <LoadingIndicator />
        }
      </View>
    </SafeAreaView>
  )
}

export default TodayAiringAnime