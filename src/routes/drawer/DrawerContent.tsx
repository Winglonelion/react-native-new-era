import React, { useCallback } from 'react';
import { StyleSheet, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import Screen from 'utils/screen';
import ROUTES from 'routes/names';
import Colors from 'theme/colors';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import messages from './DrawerContent.messages';
import sessionStore from 'data/session/SessionStore';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation();
  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };
  const navigateSetting = useCallback(() => {
    props.navigation.navigate(ROUTES.SETTING_SCREEN);
  }, [props.navigation]);

  const navigateFeedback = useCallback(() => {
    props.navigation.navigate(ROUTES.FEEDBACK_SCREEN);
  }, [props.navigation]);

  const logout = useCallback(() => {
    Alert.alert('Do you want to logout?', 'We will miss you very much', [
      {
        text: 'Log out',
        style: 'destructive',
        onPress: () => {
          sessionStore.logout();
        },
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  }, []);
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
            bottom: -Screen.height * 0.5,
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
