import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import AiringAnime from './AiringAnime/AiringAnime'
import MovieAnime from './MovieAnime/MovieAnime'
import UpcomingAnime from './UpcomingAnime/UpcomingAnime'

const Homescreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Styles.container}>
        <AiringAnime />
        <UpcomingAnime />
        <MovieAnime/>
      </View>
    </ScrollView>
  )
}

export default Homescreen

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FBFBFB',
  },
})