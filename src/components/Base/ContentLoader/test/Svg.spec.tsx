import React from 'react';
import { shallow } from 'enzyme';
import Svg from '../Svg';
import { IContentLoaderProps } from '../ContentLoader.types';
import { View, Animated as RNAnimated } from 'react-native';

export const Animated = {
  ...RNAnimated,
  parallel: () => ({
    start: (cb: any) => cb(),
  }),
  // Animated.timing
  timing: (value: any, config: any) => {
    return {
      start: (callback: any) => {
        value.setValue(config.toValue);
        callback && callback();
      },
    };
  },
};

const setup = (
  propOverrides: IContentLoaderProps = {} as IContentLoaderProps,
) => {
  const props = { ...propOverrides };
  const wrapper = shallow(
    <Svg {...props}>
      <View />
    </Svg>,
  );
  return {
    props,
    wrapper,
  };
};

describe('Svg check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup({ uniqueKey: 'xxxxxx' });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Svg check snapshot with props', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup({
      uniqueKey: 'xxxxxx',
      animate: true,
    });
    expect(wrapper).toMatchSnapshot();
  });
});
