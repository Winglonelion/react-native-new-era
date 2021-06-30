import React from 'react';
import { ParamListBase } from '@react-navigation/routers';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { ROUTE_TABS } from 'routes/names';
import MainTab from 'routes/tabs/MainTab';

export interface RootStackParamsList extends ParamListBase {}

const Stack = createNativeStackNavigator<Record<string, never>>();

const AuthorizedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
      }}>
      <Stack.Screen name={ROUTE_TABS.MAIN_TAB} component={MainTab} />
    </Stack.Navigator>
  );
};

export default AuthorizedStack;
