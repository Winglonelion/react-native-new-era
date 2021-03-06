import React, { memo } from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import TitleText from 'components/Base/Text/TitleText';
// import Colors from 'theme/colors';

interface PropTypes {
  icon: ImageSourcePropType;
  text: string;
  onPress?: (event?: GestureResponderEvent) => void;
  disabled?: boolean;
}

const ProfileMenuItem: React.FC<PropTypes> = memo(
  ({ icon, text, onPress, disabled = false }) => {
    const isDisabled = disabled || !onPress;
    return (
      <TouchableWithoutFeedback disabled={isDisabled} onPress={onPress}>
        <View
          style={[styles.container, isDisabled && styles.disabledContainer]}>
          <View style={styles.content}>
            <Image source={icon} style={styles.icon} />
            <TitleText level="h3" style={styles.title}>
              {text}
            </TitleText>
          </View>
          <Image
            source={require('images/chevron_right_brown.png')}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  disabledContainer: {
    // backgroundColor: Colors.disabled,
  },
  content: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    lineHeight: 30,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 15,
  },
});

export default ProfileMenuItem;
