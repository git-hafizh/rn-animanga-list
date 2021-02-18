import * as React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import { primaryGray, primaryRed, YEAR } from '../constants/constants';
import { FallSeason, FridayAnime, Homescreen, ListAiringAnime, ListMovieAnime, ListUpcomingAnime, MondayAnime, SaturdayAnime, SearchAnime, SpringSeason, SummerSeason, SundayAnime, ThursdayAnime, TuesdayAnime, WednesdayAnime, WinterSeason } from '../screen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const ScheduleScreen = () => {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        tabStyle: {
          width: 60,
          justifyContent: "center",
        }
      }}
    >
      <TopTab.Screen
        name="Mon"
        component={MondayAnime}
      />
      <TopTab.Screen
        name="Tue"
        component={TuesdayAnime}
      />
      <TopTab.Screen
        name="Wed"
        component={WednesdayAnime}
      />
      <TopTab.Screen
        name="Thu"
        component={ThursdayAnime}
      />
      <TopTab.Screen
        name="Fri"
        component={FridayAnime}
      />
      <TopTab.Screen
        name="Sat"
        component={SaturdayAnime}
      />
      <TopTab.Screen
        name="Sun"
        component={SundayAnime}
      />
    </TopTab.Navigator>
  )
}

const MainApp = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: primaryRed,
        inactiveTintColor: primaryGray,
      }}>
      <BottomTab.Screen
        name="Homescreen"
        component={Homescreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          tabBarLabel: "Schedule",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="SearchAnime"
        component={SearchAnime}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-search" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainApp"
      screenOptions={{ ...TransitionPresets.DefaultTransition }}>

      {/* HOME */}

      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ 
          headerShown: true,
          headerTitle: "Boku Anime"
         }}
      />

      {/* LIST ANIME */}

      <Stack.Screen
        name="ListAiringAnime"
        component={ListAiringAnime}
        options={{
          headerShown: true,
          headerTitle: "Top Airing Anime"
        }}
      />
      <Stack.Screen
        name="ListUpcomingAnime"
        component={ListUpcomingAnime}
        options={{
          headerShown: true,
          headerTitle: "Top Upcoming Anime"
        }}
      />
      <Stack.Screen
        name="ListMovieAnime"
        component={ListMovieAnime}
        options={{
          headerShown: true,
          headerTitle: "Top Movie Anime"
        }}
      />

      {/* ANIME PER SEASON */}

      <Stack.Screen
        name="SpringSeason"
        component={SpringSeason}
        options={{
          headerShown: true,
          headerTitle: `Spring Anime ${YEAR}`
        }}
      />
      <Stack.Screen
        name="SummerSeason"
        component={SummerSeason}
        options={{
          headerShown: true,
          headerTitle: `Summer Anime ${YEAR}`
        }}
      />
      <Stack.Screen
        name="FallSeason"
        component={FallSeason}
        options={{
          headerShown: true,
          headerTitle: `Fall Anime ${YEAR}`
        }}
      />
      <Stack.Screen
        name="WinterSeason"
        component={WinterSeason}
        options={{
          headerShown: true,
          headerTitle: `Winter Anime ${YEAR}`
        }}
      />

      {/* SCHEDULE OF ANIME */}

      <Stack.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          headerShown: true,
        }}
      />

      {/* SEARCHED ANIME */}

      <Stack.Screen
        name="SearchAnime"
        component={SearchAnime}
        options={{
          headerShown: true,
        }}
      />

    </Stack.Navigator>
  );
};

export { RootNavigator };