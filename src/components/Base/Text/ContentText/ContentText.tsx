import React, { memo } from 'react';
import { ColorValue, StyleSheet, Text, TextProps } from 'react-native';
import { FontFamily } from 'theme/CommonFonts';
import Colors from 'theme/colors';

interface PropTypes extends TextProps {
  color?: ColorValue;
  size?: number;
  weight?: '100' | '400' | '500' | '600' | 'bold' | 'normal';
}

const ContentText: React.FC<PropTypes> = memo(
  ({ children, style, size = 14, color = Colors.black, weight = 'normal' }) => {
    return (
      <Text
        style={[
          styles.text,
          { fontSize: size, color, fontWeight: weight },
          style,
        ]}>
        {children}
      </Text>
    );
  },
);

const styles = StyleSheet.create({
  text: {
    lineHeight: 22,
    fontFamily: FontFamily.Helvetica,
  },
});
export default ContentText;
