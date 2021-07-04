import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CommonStyles from 'theme/CommonStyles';
// import styles from './HomeScreen.styles';

type PropTypes = {};

const NotificationScreen: React.FC<PropTypes> = () => {
  return (
    <View style={CommonStyles.container}>
      <SafeAreaView style={CommonStyles.flex1}>
        <View />
      </SafeAreaView>
    </View>
  );
};

export default NotificationScreen;
