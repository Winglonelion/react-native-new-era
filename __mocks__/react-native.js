import { Animated as RNAnimated } from 'react-native';

export const Animated = {
  ...RNAnimated,
  parallel: () => ({
    // immediately invoke callback
    start: cb => cb(),
  }),
  timing: () => ({
    // immediately invoke callback
    start: cb => cb(),
  }),
};
