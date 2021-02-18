import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Text, View } from 'react-native';
import { Styles } from './SeasonCategory.style';

const SeasonCategory = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={Styles.containerSection}>
      <View style={Styles.seasonTitle}>
        <Text style={Styles.seasonText}>Season</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={Styles.season}>
          <LinearGradient colors={['#81E992', '#00DF82', '#00B56F']} style={Styles.seasonSpring}>
            <Text style={Styles.seasonSubText} onPress={() => { navigation.navigate("SpringSeason") }}>Spring</Text>
          </LinearGradient>
          <LinearGradient colors={['#FF93A0', '#FF6263', '#F9293A']} style={Styles.seasonSummer}>
            <Text style={Styles.seasonSubText} onPress={() => { navigation.navigate("SummerSeason") }}>Summer</Text>
          </LinearGradient>
          <LinearGradient colors={['#FFB154', '#FEA137', '#EF7721']} style={Styles.seasonAutumn}>
            <Text style={Styles.seasonSubText} onPress={() => { navigation.navigate("FallSeason") }}>Fall</Text>
          </LinearGradient>
          <LinearGradient colors={['#008CC1', '#0056A9', '#00498D']} style={Styles.seasonWinter}>
            <Text style={Styles.seasonSubText} onPress={() => { navigation.navigate("WinterSeason") }}>Winter</Text>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SeasonCategory
