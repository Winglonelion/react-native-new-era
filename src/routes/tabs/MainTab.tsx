import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ROUTES from 'routes/names';

import Profile from 'screens/ProfileScreen';
import NotificationScreen from 'screens/NotificationScreen';
import HomeStack from 'routes/stacks/HomeStack';
import Colors from 'theme/colors';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME_STACK}
      detachInactiveScreens
      lazy
      tabBarOptions={{
        activeTintColor: Colors.black,
        keyboardHidesTabBar: true,
        adaptive: true,
      }}
      screenOptions={{
        unmountOnBlur: true,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, focused, color }) => {},
          title: 'Profile',
        }}
        name={ROUTES.PROFILE}
        component={Profile}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, focused, color }) => {},
          title: 'Home',
        }}
        name={ROUTES.HOME_STACK}
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, focused, color }) => {},
          title: 'Notification',
        }}
        name={ROUTES.NOTIFICATION}
        component={NotificationScreen}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
