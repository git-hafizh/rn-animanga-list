import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Linking, TouchableOpacity, SafeAreaView } from 'react-native';
import axios from 'axios';
import Image from 'react-native-scalable-image';
import { Styles } from './MovieAnime.style';
import { GET_TOP_MOVIE_ANIME } from '../../../constants/constants';
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';
import { LoadingIndicator } from '../../../helper';

const MovieAnime = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const getTopMovieAnime = () => {
      axios.get(GET_TOP_MOVIE_ANIME, { cancelToken: source.token }).then((result) => {
        setMovie(result.data.top)
        setLoading(false)
      })
        .catch((err) => {
          console.log(err)
          setLoading(false)
        })
    }

    getTopMovieAnime();
    return () => {
      source.cancel();
    };

  }, []);


  return (
    <SafeAreaView style={Styles.containerSection}>
      <View style={Styles.headerSub}>
        <Text style={Styles.subType}>Top Movie</Text>
        <Text onPress={() => {
          navigation.navigate("ListMovieAnime")
        }} style={Styles.more}>View all</Text>
      </View>
      {loading ? <LoadingIndicator /> : movie.length > 0 ?

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={movie.slice(0, 10)}
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

export default MovieAnime