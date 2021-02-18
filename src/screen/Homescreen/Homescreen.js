import React, { useState } from 'react';
import { ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, View, Text } from 'react-native';
import AiringAnime from './AiringAnime/AiringAnime';
import MovieAnime from './MovieAnime/MovieAnime';
import UpcomingAnime from './UpcomingAnime/UpcomingAnime';
import SeasonCategory from './SeasonCategory/SeasonCategory';
import TodayAiringAnime from './TodayAiringAnime/TodayAiringAnime';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import SearchAnime from '../SearchAnime/SearchAnime';

const Homescreen = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={Styles.container}>
        <TodayAiringAnime/>
        <AiringAnime />
        <SeasonCategory />
        <UpcomingAnime />
        <MovieAnime />
      </SafeAreaView>
    </ScrollView>
  )
}

export default Homescreen

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
})