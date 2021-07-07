import React, { memo } from 'react';
import { ColorValue, StyleSheet, View } from 'react-native';
import Colors from 'theme/colors';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SUPPORTED_ICON = {
  Feather,
  FontAwesome5,
};

interface PropTypes {
  checked?: boolean;
  tintColor?: ColorValue;
  checkedIconName?: string;
  iconColor?: string;
  iconSet?: 'Feather' | 'FontAwesome5';
}

const CheckBox: React.FC<PropTypes> = memo(
  ({
    checked = false,
    tintColor = Colors.orange,
    checkedIconName = 'check',
    iconColor = Colors.white,
    iconSet = 'FontAwesome5',
  }) => {
    const Icon = SUPPORTED_ICON[iconSet];
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: checked ? tintColor : Colors.uncheck },
        ]}>
        {checked ? (
          <Icon name={checkedIconName} size={14} color={iconColor} />
        ) : (
          <View style={styles.unCheckView} />
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unCheckView: {
    width: 16,
    height: 16,
    backgroundColor: Colors.white,
  },
});

export default CheckBox;
