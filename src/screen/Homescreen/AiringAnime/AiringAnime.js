import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Linking, SafeAreaView } from 'react-native';
import axios from 'axios';
import Image from 'react-native-scalable-image';
import { Styles } from './AiringAnime.style';
import { GET_TOP_AIRING_ANIME } from '../../../constants/constants';
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';
import { LoadingIndicator } from '../../../helper';

const AiringAnime = () => {
  const [airing, setAiring] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const getTopAnimeAiring = () => {
      axios.get(GET_TOP_AIRING_ANIME, { cancelToken: source.token }).then((result) => {
        setAiring(result.data.top)
        setLoading(false)
      })
        .catch((err) => {
          console.log(err)
          setLoading(false)
        })
    }

    getTopAnimeAiring();
    return () => {
      source.cancel();
    };

  }, []);

  return (
    <SafeAreaView style={Styles.containerSection}>
      <View style={Styles.headerSub}>
        <Text style={Styles.subType}>Top Airing</Text>
        <Text onPress={() => {
          navigation.navigate("ListAiringAnime")
        }} style={Styles.more}>View all</Text>
      </View>
      {loading ? <LoadingIndicator /> : airing.length > 0 ?
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={airing.slice(0, 10)}
          renderItem={({ item }) =>
            <View style={Styles.content}>
              <Image
                onPress={() => Linking.openURL(item.url)}
                width={140}
                height={190}
                resizeMode="cover"
                style={Styles.image_prop}
                source={{
                  uri: item.image_url
                }}
              />
              <Text
                ellipsizeMode='tail'
                numberOfLines={2}
                style={Styles.title}>{item.title}</Text>
              <View style={Styles.info}>
                <Rating
                  type='star'
                  startingValue={item.score / 2}
                  imageSize={16}
                  readonly
                />
                <View>
                  <Text style={Styles.infoScore}>{item.score}</Text>
                </View>
              </View>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
        />
        :
        <LoadingIndicator />
      }
    </SafeAreaView>
  )
}

export default AiringAnime