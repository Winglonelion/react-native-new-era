import React from 'react';
import sessionStore from 'data/session/SessionStore';
import { observer } from 'mobx-react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import ROUTES from '../names';
import UnAuthorizedStack from './UnAuthorizedStack';
import MainDrawer from 'routes/drawer/MainDrawer';
import Platform from 'utils/platform';
import { STACK_ANIMATION } from './config';

const Stack = createNativeStackNavigator<Record<string, any>>();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        stackAnimation: STACK_ANIMATION,
        stackPresentation: 'modal',
        headerShown: false,
        gestureEnabled: true,
        statusBarTranslucent: Platform.isAndroid,
      }}>
      {sessionStore.isAuthorized && (
        <Stack.Screen name={ROUTES.MAIN_DRAWER} component={MainDrawer} />
      )}

      {!sessionStore.isAuthorized && (
        <Stack.Screen
          name={ROUTES.UNAUTHORIZED_STACK}
          component={UnAuthorizedStack}
        />
      )}
    </Stack.Navigator>
  );
};

export default observer(RootStack);
