import React, { memo } from 'react';
import { Text } from 'react-native';

export interface PropTypes {
  value?: number;
  fixed?: number;
}

const MoneyValue: React.FC<PropTypes> = memo(({ value, fixed = 2 }) => {
  if (typeof value !== 'number') return null;
  return <Text>{`$${value.toFixed(fixed)}`}</Text>;
});

export default MoneyValue;
