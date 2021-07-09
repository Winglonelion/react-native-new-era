import React, { memo } from 'react';
import {
  ColorValue,
  StyleSheet,
  Text,
  TextStyle,
  StyleProp,
} from 'react-native';
import { FontFamily } from 'theme/CommonFonts';
import Colors from 'theme/colors';

export interface PropTypes {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: ColorValue;
  style?: StyleProp<TextStyle>;
}

const LEVEL_STYLES: Record<string, TextStyle> = {
  h1: { fontSize: 24, lineHeight: 30, letterSpacing: 0.1, fontWeight: '500' },
  h2: { fontSize: 18, lineHeight: 24, letterSpacing: 0.1, fontWeight: '500' },
  h3: { fontSize: 16, lineHeight: 22, letterSpacing: 0.1, fontWeight: '500' },
  h4: { fontSize: 14, lineHeight: 20, letterSpacing: 0.1, fontWeight: '500' },
  h5: { fontSize: 12, lineHeight: 18, letterSpacing: 0.1, fontWeight: '500' },
  h6: { fontSize: 10, lineHeight: 16, letterSpacing: 0.1, fontWeight: '500' },
};

const TitleText: React.FC<PropTypes> = memo(
  ({ children, level = 'h4', style, color }) => {
    return (
      <Text
        style={[
          styles.text,
          LEVEL_STYLES[level],
          color ? { color } : undefined,
          style,
        ]}>
        {children}
      </Text>
    );
  },
);

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: FontFamily.Helvetica,
  },
});
export default TitleText;
