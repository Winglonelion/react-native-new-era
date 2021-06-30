import sessionStore from 'data/session/SessionStore';
import React from 'react';
import { Button } from 'react-native';
import { SafeAreaView, View, Text } from 'react-native';

import CommonStyles from 'theme/CommonStyles';
// import styles from './HomeScreen.styles';

type PropTypes = {};

const SplashScreen: React.FC<PropTypes> = () => {
  return (
    <View style={CommonStyles.container}>
      <SafeAreaView style={CommonStyles.flex1}>
        <Text>SPLASH SCREEN</Text>
        <Button
          title="click me"
          onPress={() => {
            console.log('clicked!');
            sessionStore.setToken('123');
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default SplashScreen;
