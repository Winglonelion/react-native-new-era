import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import ROUTES from 'routes/names';
import Colors from 'theme/colors';
import CommonStyles from 'theme/CommonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileScreen from 'screens/ProfileScreen';
import PersonalInfoScreen from 'screens/PersonalInfoScreen';
import { toggleDrawer } from 'routes/actions';
import {
  TouchableWithoutFeedback,
  View,
  Image,
  StyleSheet,
} from 'react-native';

const Stack = createNativeStackNavigator<Record<string, never>>();

const ProfileStack = () => {
  const renderIcon = useCallback(
    () => (
      <TouchableWithoutFeedback onPress={toggleDrawer}>
        <View style={styles.menuButton}>
          <Image style={styles.menuImage} source={require('images/menu.png')} />
        </View>
      </TouchableWithoutFeedback>
    ),
    [],
  );

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
            headerLeft: renderIcon,
          }}
          name={ROUTES.PROFILE_SCREEN}
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{
            title: 'Personal Info',
          }}
          name={ROUTES.PERSONAL_INFO_SCREEN}
          component={PersonalInfoScreen}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  headerTitleStyle: {
    color: Colors.lightBrown,
  },
});

export default observer(ProfileStack);
