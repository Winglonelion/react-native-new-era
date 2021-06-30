import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ROUTES from 'routes/names';

import HomeScreen from 'screens/HomeScreen';
import Profile from 'screens/ProfileScreen';
import NotificationScreen from 'screens/NotificationScreen';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      detachInactiveScreens
      lazy
      tabBarOptions={{
        keyboardHidesTabBar: true,
        adaptive: true,
      }}
      screenOptions={{
        unmountOnBlur: true,
      }}>
      <Tab.Screen options={{}} name={ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen options={{}} name={ROUTES.PROFILE} component={Profile} />
      <Tab.Screen
        options={{}}
        name={ROUTES.NOTIFICATION}
        component={NotificationScreen}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
