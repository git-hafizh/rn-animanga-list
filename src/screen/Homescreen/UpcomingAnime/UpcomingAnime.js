import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Dimensions, Linking } from 'react-native';
import axios from 'axios';

import Image from 'react-native-scalable-image';
import StarRatings from 'react-star-ratings';
import { Styles } from './UpcomingAnime.style';
import { GET_TOP_ANIME_UPCOMING } from '../../../constants/constants';

const UpcomingAnime = () => {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    getTopAnimeUpcoming();
  }, []);

  const getTopAnimeUpcoming = () => {
    axios.get(GET_TOP_ANIME_UPCOMING).then((result) => {
      setUpcoming(result.data.top)
    })
  }


  return (
    <View style={Styles.containerSection}>
      <View style={Styles.headerSub}>
        <Text style={Styles.subType}>Upcoming</Text>
        <Text style={Styles.more}>View All</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={upcoming.slice(0, 10)}
        renderItem={({ item }) =>
          <View style={Styles.content}>
            <View style={Styles.image_propShadow}>
              <Image
                width={140}
                height={190}
                resizeMode="cover"
                style={Styles.image_prop}
                source={{
                  uri: item.image_url
                }}
              />
            </View>
            <Text
              onPress={() => Linking.openURL(item.url)}
              ellipsizeMode='tail'
              numberOfLines={2}
              style={Styles.title}>{item.title}</Text>
            <View style={Styles.info}>
              <Text style={Styles.startDate}>Start Date: </Text>
              <View>
                <Text style={Styles.infoStartDate}>{item.start_date ? item.start_date : "Unknown"}</Text>
              </View>
            </View>
          </View>
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default UpcomingAnime