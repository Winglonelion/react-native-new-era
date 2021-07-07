import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from 'theme/colors';

interface PropTypes {
  isActive?: boolean;
}

const DotIndicator: React.FC<PropTypes> = memo(({ isActive = false }) => {
  return <View style={[styles.dot, isActive && styles.activeDot]} />;
});

const styles = StyleSheet.create({
  dot: {
    backgroundColor: Colors.grey,
    width: 8,
    height: 8,
    borderRadius: 8,
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: Colors.black,
  },
});

export default DotIndicator;
