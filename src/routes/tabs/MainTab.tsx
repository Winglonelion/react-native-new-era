import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ROUTES from 'routes/names';

import HomeStack from 'routes/stacks/HomeStack';
import Colors from 'theme/colors';
import Icon from 'react-native-vector-icons/Feather';
import ProfileStack from 'routes/stacks/ProfileStack';
import NotificationStack from 'routes/stacks/NotificationStack';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  const renderHomeIcon = useCallback(
    ({ size, color }) => <Icon name="home" size={size} color={color} />,
    [],
  );

  const renderProfileIcon = useCallback(
    ({ size, color }) => <Icon name="user" size={size} color={color} />,
    [],
  );

  const renderNotificationIcon = useCallback(
    ({ size, color }) => <Icon name="bell" size={size} color={color} />,
    [],
  );

  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME_STACK}
      detachInactiveScreens
      // lazy
      tabBarOptions={{
        activeTintColor: Colors.black,
        keyboardHidesTabBar: true,
        adaptive: true,
      }}
      screenOptions={
        {
          // unmountOnBlur: true,
        }
      }>
      <Tab.Screen
        options={{
          tabBarIcon: renderProfileIcon,
          title: 'Profile',
        }}
        name={ROUTES.PROFILE_STACK}
        component={ProfileStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: renderHomeIcon,
          title: 'Home',
          // tabBarVisible: false,
        }}
        name={ROUTES.HOME_STACK}
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: renderNotificationIcon,
          title: 'Notification',
        }}
        name={ROUTES.NOTIFICATION_STACK}
        component={NotificationStack}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
