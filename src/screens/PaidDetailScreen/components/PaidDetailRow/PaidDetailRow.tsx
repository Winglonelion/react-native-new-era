import React from 'react';
import { View, StyleSheet, TextProps } from 'react-native';
import Colors from 'theme/colors';
import ContentText from 'components/Base/Text/ContentText';
import { startCase } from 'lodash';
import MoneyValue from 'components/Base/Text/MoneyValue';
import Icon from 'react-native-vector-icons/Feather';
import { mapPieColor } from 'utils/business/chart';

interface PropTypes {
  type: string;
  value: number;
  important?: boolean;
  height?: number;
  icon?: string;
  iconColor?: string;
  textColor?: string;
  valueColor?: string;
  backgroundColor?: string;
  textStyle?: TextProps;
}

const PaidDetailRow: React.FC<PropTypes> = ({
  type = '',
  value,
  important,
  height = 56,
  icon = 'chevron-down',
  iconColor = Colors.lightBrown,
  textColor = Colors.black,
  valueColor = Colors.black,
  backgroundColor = 'transparent',
  textStyle: textStyle,
}) => {
  return (
    <View style={[styles.container, { height, backgroundColor }]}>
      {/* left icon */}
      <View style={styles.iconBox}>
        <View style={[styles.icon, { backgroundColor: mapPieColor(type) }]} />
      </View>
      {/* content */}
      <View style={styles.contentBox}>
        <ContentText
          size={16}
          lineHeight={22}
          color={textColor}
          weight={important ? 'bold' : 'normal'}>
          {startCase(type)}
        </ContentText>
        <ContentText
          size={16}
          lineHeight={22}
          color={valueColor}
          style={textStyle}
          weight={important ? '500' : 'normal'}>
          {<MoneyValue value={value} />}
        </ContentText>
      </View>
      {/* right icon */}
      <View style={styles.iconBox}>
        <Icon
          name={icon}
          size={24}
          color={iconColor}
          style={styles.iconVector}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    height: 56,
    alignItems: 'center',
  },
  iconBox: {
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  contentBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 18,
    height: 18,
    borderRadius: 18,
    backgroundColor: Colors.lightBrown,
  },
  iconVector: {
    top: 2,
  },
});

export default PaidDetailRow;
