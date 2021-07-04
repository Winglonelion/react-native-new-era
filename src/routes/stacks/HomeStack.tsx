import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Image, View, StyleSheet } from 'react-native';

import ROUTES from 'routes/names';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Colors from 'theme/colors';
import { toggleDrawer } from 'routes/actions';
import CommonStyles from 'theme/CommonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator<Record<string, never>>();

const AuthorizedStack = () => {
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
        }}>
        <Stack.Screen
          options={{
            title: 'Home',
            headerHideShadow: true,
            headerTitleStyle: {
              color: Colors.lightBrown,
            },
            headerLeft: renderIcon,
          }}
          name={ROUTES.HOME_SCREEN}
          component={HomeScreen}
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

export default observer(AuthorizedStack);
