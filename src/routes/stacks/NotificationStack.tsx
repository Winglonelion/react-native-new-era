import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Image, View, StyleSheet } from 'react-native';

import ROUTES from 'routes/names';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colors from 'theme/colors';
import { toggleDrawer } from 'routes/actions';
import CommonStyles from 'theme/CommonStyles';
import NotificationScreen from 'screens/NotificationScreen';

const Stack = createNativeStackNavigator<Record<string, never>>();

const NotificationStack = () => {
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
            title: 'Messages',
            headerLeft: renderIcon,
          }}
          name={ROUTES.NOTIFICATION_SCREEN}
          component={NotificationScreen}
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
});

export default observer(NotificationStack);
