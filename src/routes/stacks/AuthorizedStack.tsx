import React from 'react';
import { ParamListBase } from '@react-navigation/routers';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import MainTab from 'routes/tabs/MainTab';
import ROUTES, { ROUTE_TABS } from 'routes/names';

import OnboardingScreen from 'screens/OnboardingScreen';
import { observer } from 'mobx-react';
import userProfileStore from 'data/user/UserProfileStore';

export interface RootStackParamsList extends ParamListBase {}

const Stack = createNativeStackNavigator<Record<string, never>>();

const AuthorizedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={
        userProfileStore.is_new_user
          ? ROUTES.ONBOARDING_SCREEN
          : ROUTE_TABS.MAIN_TAB
      }
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Stack.Screen
        options={{}}
        name={ROUTES.ONBOARDING_SCREEN}
        component={OnboardingScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTE_TABS.MAIN_TAB}
        component={MainTab}
      />
    </Stack.Navigator>
  );
};

export default observer(AuthorizedStack);
