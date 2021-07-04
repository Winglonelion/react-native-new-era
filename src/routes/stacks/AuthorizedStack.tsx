import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import MainTab from 'routes/tabs/MainTab';
import ROUTES, { ROUTE_TABS } from 'routes/names';

import OnboardingScreen from 'screens/OnboardingScreen';
import { observer } from 'mobx-react';
import userProfileStore from 'data/user/UserProfileStore';
import SettingScreen from 'screens/SettingScreen/SettingScreen';
import FeedbackScreen from 'screens/FeedbackScreen/FeedbackScreen';

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
        options={{ headerShown: false }}
        name={ROUTES.ONBOARDING_SCREEN}
        component={OnboardingScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTE_TABS.MAIN_TAB}
        component={MainTab}
      />
      <Stack.Screen name={ROUTES.SETTING_SCREEN} component={SettingScreen} />
      <Stack.Screen name={ROUTES.FEEDBACK_SCREEN} component={FeedbackScreen} />
    </Stack.Navigator>
  );
};

export default observer(AuthorizedStack);
