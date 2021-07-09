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
import {
  HEADER_TRANSLUCENT,
  CONTENT_STYLE,
  SAFE_AREA_EDGES,
  STACK_ANIMATION,
} from './config';

const Stack = createNativeStackNavigator<Record<string, never>>();

const NotificationStack = () => {
  return (
    <SafeAreaView edges={SAFE_AREA_EDGES} style={CommonStyles.container}>
      <Stack.Navigator
        screenOptions={{
          stackAnimation: STACK_ANIMATION,
          gestureEnabled: true,
          headerBackTitleVisible: false,
          headerHideShadow: true,
          headerTintColor: Colors.lightBrown,
        }}>
        <Stack.Screen
          options={{
            title: 'Messages',
            headerLeft: MenuButton,
            headerTranslucent: HEADER_TRANSLUCENT,
            contentStyle: { ...CONTENT_STYLE },
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
