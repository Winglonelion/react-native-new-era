import React from 'react';
import { SafeAreaView, View } from 'react-native';

import CommonStyles from 'theme/CommonStyles';

type PropTypes = {};

const OnboardingScreen: React.FC<PropTypes> = () => {
  return (
    <View style={CommonStyles.container}>
      <SafeAreaView style={CommonStyles.flex1} />
    </View>
  );
};

export default OnboardingScreen;
