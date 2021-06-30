import React, { memo } from 'react';
import { ColorValue, StyleSheet, Text, TextProps } from 'react-native';
import { FontFamily } from 'theme/CommonFonts';
import Colors from 'utils/colors';

interface PropTypes extends TextProps {
  color?: ColorValue;
  size?: number;
}

const ContentText: React.FC<PropTypes> = memo(
  ({ children, style, size, color }) => {
    return (
      <Text
        style={[
          styles.text,
          size ? { fontSize: size } : undefined,
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
    lineHeight: 22,
    fontFamily: FontFamily.Helvetica,
  },
});
export default ContentText;
