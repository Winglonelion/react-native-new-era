import React, { memo } from 'react';
import { Text } from 'react-native';

interface PropTypes {
  value: number;
  fixed?: number;
}

const MoneyValue: React.FC<PropTypes> = memo(({ value, fixed = 2 }) => {
  return <Text>{`$${value.toFixed(fixed)}`}</Text>;
});

export default MoneyValue;
