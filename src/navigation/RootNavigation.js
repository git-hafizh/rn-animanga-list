import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Homescreen from '../screen/Homescreen/Homescreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ ...TransitionPresets.DefaultTransition }}>
      <Stack.Screen
        name="Home"
        component={Homescreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export { RootNavigator };