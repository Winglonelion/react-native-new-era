import React from 'react';
import { ParamListBase } from '@react-navigation/routers';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import SplashScreen from 'screens/SplashScreen';
import ROUTES from 'routes/names';

export interface RootStackParamsList extends ParamListBase {}

const Stack = createNativeStackNavigator<Record<string, never>>();

const UnAuthorizedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
      }}>
      <Stack.Screen name={ROUTES.SPLASH_SCREEN} component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default UnAuthorizedStack;
