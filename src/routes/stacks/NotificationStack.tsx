import React from 'react';
import { observer } from 'mobx-react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import ROUTES from 'routes/names';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colors from 'theme/colors';
import CommonStyles from 'theme/CommonStyles';
import NotificationScreen from 'screens/NotificationScreen';
import NotificationDetailScreen from 'screens/NotificationDetailScreen';
import MenuButton from './components/MenuButton';

const Stack = createNativeStackNavigator<Record<string, never>>();

const NotificationStack = () => {
  return (
    <SafeAreaView
      edges={['left', 'top', 'right']}
      style={CommonStyles.container}>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerBackTitleVisible: false,
          headerHideShadow: true,
          headerTintColor: Colors.lightBrown,
        }}>
        <Stack.Screen
          options={{
            title: 'Messages',
            headerLeft: MenuButton,
          }}
          name={ROUTES.NOTIFICATION_SCREEN}
          component={NotificationScreen}
        />
        <Stack.Screen
          options={{
            title: 'Messages',
          }}
          name={ROUTES.NOTIFICATION_DETAIL_SCREEN}
          component={NotificationDetailScreen}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default observer(NotificationStack);
