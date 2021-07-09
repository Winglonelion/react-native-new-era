import React, { memo } from 'react';
import { ColorValue, StyleSheet, Text, TextProps } from 'react-native';
import { FontFamily } from 'theme/CommonFonts';
import Colors from 'theme/colors';

export interface PropTypes extends TextProps {
  color?: ColorValue;
  size?: number;
  weight?: '100' | '400' | '500' | '600' | 'bold' | 'normal';
  textAlign?: 'left' | 'right' | 'center' | 'auto' | 'justify';
  lineHeight?: number;
}

const ContentText: React.FC<PropTypes> = memo(
  ({
    children,
    style,
    size = 14,
    color = Colors.black,
    weight = 'normal',
    lineHeight = 22,
    textAlign = 'justify',
  }) => {
    return (
      <Text
        style={[
          styles.text,
          {
            fontSize: size,
            color,
            fontWeight: weight,
            lineHeight,
            textAlign: textAlign,
          },
          style,
        ]}>
        {children}
      </Text>
    );
  },
);

const styles = StyleSheet.create({
  text: {
    fontFamily: FontFamily.Helvetica,
  },
});
export default ContentText;
