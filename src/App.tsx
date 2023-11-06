/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SideMenuNavigator} from './presentation/routes/SideMenuNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SideMenuNavigator />
    </NavigationContainer>
  );
}

export default App;
