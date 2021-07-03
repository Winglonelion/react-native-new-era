import React, { useCallback } from 'react';

import { StyleSheet, SafeAreaView, Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import ROUTES from 'routes/names';
import messages from './DrawerContent.messages';
import Colors from 'theme/colors';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Screen from 'utils/screen';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation();
  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };
  const navigateSetting = useCallback(() => {
    props.navigation.navigate(ROUTES.SETTING_SCREEN);
  }, [props.navigation]);

  const navigateFeedback = useCallback(() => {
    props.navigation.navigate(ROUTES.SETTING_SCREEN);
  }, [props.navigation]);

  const logout = useCallback(() => {}, []);
  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={styles.container}>
        <DrawerItem
          icon={() => (
            <Image
              style={styles.image}
              source={require('images/settings.png')}
            />
          )}
          label={messages.setting}
          labelStyle={styles.text}
          onPress={navigateSetting}
        />

        <DrawerItem
          icon={() => (
            <Image
              style={styles.image}
              source={require('images/feedback.png')}
            />
          )}
          label={messages.feedback}
          labelStyle={styles.text}
          onPress={navigateFeedback}
        />

        <DrawerItem
          icon={() => (
            <Image
              style={styles.image}
              source={require('images/log_out.png')}
            />
          )}
          label={messages.logout}
          labelStyle={styles.text}
          onPress={logout}
        />
        <DrawerItem
          style={{
            bottom: -Screen.height * 0.62,
          }}
          label={'Close Drawer'}
          labelStyle={[styles.text, styles.closeDrawerButton]}
          onPress={closeDrawer}
        />
      </SafeAreaView>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  text: {
    fontSize: 18,
    color: Colors.white,
    lineHeight: 24,
    letterSpacing: 0.2,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: -20,
  },
  closeDrawerButton: {
    fontSize: 14,
  },
});

export default CustomDrawerContent;
