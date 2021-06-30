import React from 'react';
import { ParamListBase } from '@react-navigation/routers';
import sessionStore from 'data/session/SessionStore';
import { observer } from 'mobx-react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import ROUTES from '../names';
import AuthorizedStack from './AuthorizedStack';
import UnAuthorizedStack from './UnAuthorizedStack';

export interface RootStackParamsList extends ParamListBase {
  LOGIN: undefined;
  REGISTER: undefined;
}

const Stack = createNativeStackNavigator<Record<string, any>>();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        stackPresentation: 'modal',
        headerShown: false,
        gestureEnabled: true,
      }}>
      {sessionStore.isAuthorized && (
        <Stack.Screen
          name={ROUTES.AUTHORIZED_STACK}
          component={AuthorizedStack}
        />
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