import React from 'react';
import { shallow } from 'enzyme';
import ContentLoaderCircle, { PropTypes } from '../ContentLoaderCircle';
import { View } from 'react-native';

const setup = (propOverrides: PropTypes = {} as PropTypes) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<ContentLoaderCircle {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('ContentLoaderCircle check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup({
      children: <View />,
      size: 30,
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('ContentLoaderCircle should match snapshot with offsets', () => {
    const { wrapper } = setup({
      children: <View />,
      offsetX: 100,
      offsetY: 100,
      size: 30,
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('ContentLoaderCircle should match snapshot with ready', () => {
    const { wrapper } = setup({
      children: <View />,
      ready: true,
      size: 30,
    });
    expect(wrapper).toMatchSnapshot();
  });
});
