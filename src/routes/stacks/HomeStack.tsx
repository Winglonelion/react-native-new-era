import React from 'react';
import { observer } from 'mobx-react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import ROUTES from 'routes/names';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import Colors from 'theme/colors';
import CommonStyles from 'theme/CommonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuButton from './components/MenuButton';

const Stack = createNativeStackNavigator<Record<string, never>>();

const HomeStack = () => {
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
            title: 'Home',
            headerLeft: MenuButton,
          }}
          name={ROUTES.HOME_SCREEN}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default observer(HomeStack);
