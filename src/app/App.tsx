/**
 * configure App elements and layout
 *
 * @summary configure App elements and layout
 * @author Thuan <nguyenbuiducthuan@gmail.com>
 *
 * Created at     : 2021-05-11 15:34:58
 * Last modified  : 2021-07-04 15:43:16
 */

import React, { useCallback } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from '../routes/stacks/RootStack';
import { navigationRef, setReady } from './Navigation.ref';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const onNavigationReady = useCallback(() => {
    RNBootSplash.hide({ fade: true });
    setReady(true);
  }, []);

  React.useEffect(() => {
    return () => {
      setReady(false);
    };
  }, []);

  return (
    <NavigationContainer ref={navigationRef} onReady={onNavigationReady}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
