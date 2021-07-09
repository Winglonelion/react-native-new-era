import React from 'react';
import { observer } from 'mobx-react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import ROUTES from 'routes/names';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import Colors from 'theme/colors';
import CommonStyles from 'theme/CommonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuButton from './components/MenuButton';
import {
  CONTENT_STYLE,
  HEADER_TRANSLUCENT,
  SAFE_AREA_EDGES,
  STACK_ANIMATION,
} from './config';

const Stack = createNativeStackNavigator<Record<string, never>>();

const HomeStack = () => {
  return (
    <SafeAreaView
      mode="margin"
      edges={SAFE_AREA_EDGES}
      style={CommonStyles.container}>
      <Stack.Navigator
        screenOptions={{
          stackAnimation: STACK_ANIMATION,
          gestureEnabled: true,
          headerBackTitleVisible: false,
          headerHideShadow: true,
          headerTintColor: Colors.lightBrown,
          // headerTranslucent: true,
        }}>
        <Stack.Screen
          options={{
            title: 'Home',
            headerTranslucent: HEADER_TRANSLUCENT,
            headerLeft: MenuButton,
            contentStyle: { ...CONTENT_STYLE },
          }}
          name={ROUTES.HOME_SCREEN}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default observer(HomeStack);
