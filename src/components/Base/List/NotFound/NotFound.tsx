import React, { memo } from 'react';
import {
  Image,
  ImageProps,
  ImageStyle,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

export interface PropTypes {
  title?: string;
  style?: ViewStyle;
  iconStyle?: ImageStyle;
  image?: ImageProps;
  textStyle?: TextStyle;
}

const NotFound: React.FC<PropTypes> = ({
  title = '',
  style,
  iconStyle,
  image,
  textStyle,
}) => (
  <View pointerEvents="none" style={[styles.container, style]}>
    {image ? (
      <Image
        resizeMethod="resize"
        resizeMode="contain"
        source={image}
        style={[styles.iconImage, iconStyle]}
      />
    ) : (
      <Icon name="inbox" size={100} style={styles.icon} />
    )}
    <Text style={[styles.textEmpty, textStyle]}>{title}</Text>
  </View>
);

export default memo(NotFound);
