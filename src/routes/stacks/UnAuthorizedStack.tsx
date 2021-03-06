import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import ROUTES from 'routes/names';
import LoginScreen from 'screens/LoginScreen';

const Stack = createNativeStackNavigator<Record<string, never>>();

const UnAuthorizedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.LOGIN_SCREEN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default UnAuthorizedStack;
