import React from 'react';
import { observer } from 'mobx-react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import ROUTES from 'routes/names';
import Colors from 'theme/colors';
import CommonStyles from 'theme/CommonStyles';
import ProfileScreen from 'screens/ProfileScreen';
import MenuButton from './components/MenuButton';

const Stack = createNativeStackNavigator<Record<string, never>>();

const ProfileStack = () => {
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
            title: 'Profile',
            headerLeft: MenuButton,
          }}
          name={ROUTES.PROFILE_SCREEN}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default observer(ProfileStack);
