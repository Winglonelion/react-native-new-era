import React from 'react';
import { SafeAreaView, View, Pressable, Text } from 'react-native';

import CommonStyles from 'theme/CommonStyles';
import { useNavigation, DrawerActions } from '@react-navigation/native';
// import styles from './HomeScreen.styles';

type PropTypes = {};

const HomeScreen: React.FC<PropTypes> = () => {
  const navigation = useNavigation();
  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <View style={CommonStyles.container}>
      <SafeAreaView style={CommonStyles.flex1}>
        <Pressable onPress={toggleDrawer}>
          <Text>TOGGLE DRAWER</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
