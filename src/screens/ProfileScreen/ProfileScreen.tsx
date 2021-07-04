import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CommonStyles from 'theme/CommonStyles';
// import styles from './HomeScreen.styles';

type PropTypes = {};

const ProfileScreen: React.FC<PropTypes> = () => {
  return (
    <View style={CommonStyles.container}>
      <SafeAreaView style={CommonStyles.flex1} />
    </View>
  );
};

export default ProfileScreen;
