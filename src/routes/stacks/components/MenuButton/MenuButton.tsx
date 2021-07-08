import React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { toggleDrawer } from 'routes/actions';

const MenuButton = () => (
  <TouchableWithoutFeedback onPress={toggleDrawer}>
    <View style={styles.menuButton}>
      <Image style={styles.menuImage} source={require('images/menu.png')} />
    </View>
  </TouchableWithoutFeedback>
);

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

export default MenuButton;
