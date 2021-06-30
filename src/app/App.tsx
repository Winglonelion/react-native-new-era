/**
 * configure App elements and layout
 *
 * @summary configure App elements and layout
 * @author Thuan <nguyenbuiducthuan@gmail.com>
 *
 * Created at     : 2021-05-11 15:34:58
 * Last modified  : 2021-06-29 17:37:56
 */

import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import RootStack from '../routes/stacks/RootStack';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
