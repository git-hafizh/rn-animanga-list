import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Dimensions, Linking } from 'react-native';
import axios from 'axios';

import Image from 'react-native-scalable-image';
import StarRatings from 'react-star-ratings';
import { Styles } from './AiringAnime.style';
import { GET_TOP_ANIME_AIRING } from '../../../constants/constants';

const AiringAnime = () => {
  const [airing, setAiring] = useState([]);

  useEffect(() => {
    getTopAnimeAiring();
  }, []);

  const getTopAnimeAiring = () => {
    axios.get(GET_TOP_ANIME_AIRING).then((result) => {
      setAiring(result.data.top)
    })
  }

  const viewMore = () => {
    return(
      <View>Haha</View>
    )
  }

  return (
    <View style={Styles.containerSection}>
      <View style={Styles.header}>
        <Text>Top AniManga DOT List</Text>
        <Text>Search</Text>
      </View>
      <View style={Styles.headerSub}>
        <Text style={Styles.subType}>Airing</Text>
        <Text style={Styles.more}>View All</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={airing.slice(0,10)}
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
              <StarRatings
                rating={item.score/2}
                starRatedColor="#ED2E45"
                starEmptyColor="#A2A2A5"
                numberOfStars={5}
                starDimension="15px"
                starSpacing="1px"
                name='rating'
              />
              <View>
                <Text style={Styles.infoScore}>{item.score}</Text>
              </View>
            </View>
          </View>
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default AiringAnime