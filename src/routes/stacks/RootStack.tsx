import React from 'react';
import { ParamListBase } from '@react-navigation/routers';
import sessionStore from 'data/session/SessionStore';
import { observer } from 'mobx-react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import ROUTES from '../names';
import UnAuthorizedStack from './UnAuthorizedStack';
import MainDrawer from 'routes/drawer/MainDrawer';
import { PressEvent } from 'types/events';
import { TextInputProps } from 'react-native';

export interface RootStackParamsList extends ParamListBase {
  LOGIN: undefined;
  REGISTER: undefined;

  TEXT_DATA_UPDATE_SCREEN: {
    title?: string;
    onComplete?: (text: string) => void;
    onCancel?: PressEvent;
    validator?: (text: string) => { error?: Error };
    inputProps?: TextInputProps;
  };
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
