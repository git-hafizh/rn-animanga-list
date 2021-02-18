import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Linking, SafeAreaView } from 'react-native';
import axios from 'axios';
import Image from 'react-native-scalable-image';
import { Styles } from './UpcomingAnime.style';
import { GET_TOP_UPCOMING_ANIME } from '../../../constants/constants';
import { useNavigation } from '@react-navigation/native';
import { LoadingIndicator } from '../../../helper';

const UpcomingAnime = () => {
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const getTopUpcomingAnime = () => {
      axios.get(GET_TOP_UPCOMING_ANIME, { cancelToken: source.token }).then((result) => {
        setUpcoming(result.data.top)
        setLoading(false)
      })
        .catch((err) => {
          console.log(err)
          setLoading(false)
        })
    }

    getTopUpcomingAnime();
    return () => {
      source.cancel();
    };

  }, []);

  return (
    <SafeAreaView style={Styles.containerSection}>
      <View style={Styles.headerSub}>
        <Text style={Styles.subType}>Upcoming</Text>
        <Text onPress={() => {
          navigation.navigate("ListUpcomingAnime")
        }} style={Styles.more}>View all</Text>
      </View>
      {loading ? <LoadingIndicator /> : upcoming.length > 0 ?

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={upcoming.slice(0, 10)}
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
                <Text style={Styles.startDate}>Start Date: </Text>
                <View>
                  <Text style={Styles.infoStartDate}>{item.start_date ? item.start_date : "TBC"}</Text>
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

export default UpcomingAnime