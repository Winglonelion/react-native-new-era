import React from 'react';
import { observer } from 'mobx-react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import ROUTES from 'routes/names';
import Colors from 'theme/colors';
import CommonStyles from 'theme/CommonStyles';
import ProfileScreen from 'screens/ProfileScreen';
import MenuButton from './components/MenuButton';
import {
  HEADER_TRANSLUCENT,
  CONTENT_STYLE,
  SAFE_AREA_EDGES,
  STACK_ANIMATION,
} from './config';

const Stack = createNativeStackNavigator<Record<string, never>>();

const ProfileStack = () => {
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
            title: 'Profile',
            headerTranslucent: HEADER_TRANSLUCENT,
            headerLeft: MenuButton,
            contentStyle: { ...CONTENT_STYLE },
          }}
          name={ROUTES.PROFILE_SCREEN}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default observer(ProfileStack);
