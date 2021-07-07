import TitleText from 'components/Base/Text/TitleText';
import React, { memo } from 'react';
import {
  ActivityIndicator,
  ColorValue,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import Colors from 'theme/colors';

interface PropTypes {
  loading?: boolean;
  disabled?: boolean;
  text?: string;
  hideContentWhileLoading?: boolean;
  buttonStyle?: ViewStyle;
  tintColor?: ColorValue;
  round?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | null;
}

const Button: React.FC<PropTypes> = memo(
  ({
    text,
    loading,
    hideContentWhileLoading,
    disabled,
    tintColor = Colors.black,
    round,
    buttonStyle,
    onPress,
  }) => {
    const isHideContent = loading && hideContentWhileLoading;
    return (
      <Pressable
        onPress={onPress}
        disabled={disabled || loading}
        style={[
          styles.buttonView,
          round && styles.buttonRoundView,
          { backgroundColor: tintColor },
          buttonStyle,
        ]}>
        {text && !isHideContent && (
          <TitleText style={styles.buttonText}>{text}</TitleText>
        )}
        {loading && <ActivityIndicator color={Colors.white} />}
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  buttonView: {
    width: 168,
    height: 42,
    borderRadius: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRoundView: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  buttonText: {
    fontWeight: '700',
    color: Colors.white,
  },
});

export default Button;
