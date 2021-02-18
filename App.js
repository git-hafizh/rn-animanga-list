import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigation/RootNavigation';
import { ErrorCard } from './src/helper';
import CheckConnection from './src/helper/ConnectionCheck/ConnectionCheck';


const App = () => {
  let network = CheckConnection();
  if (network === false) {
    return <ErrorCard />;
  }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        />
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;