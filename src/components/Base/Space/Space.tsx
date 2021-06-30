import React, { memo } from 'react';
import { View } from 'react-native';

interface PropTypes {
  height?: number;
  width?: number;
}

const Space: React.FC<PropTypes> = memo(({ height = 10, width = 0 }) => {
  return <View style={{ height, width }} />;
});

export default Space;
