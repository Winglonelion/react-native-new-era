import React from 'react';
import { shallow } from 'enzyme';
import ContentLoaderLine, { PropTypes } from '../ContentLoaderLine';
import { View } from 'react-native';

const setup = (propOverrides: PropTypes = {} as PropTypes) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<ContentLoaderLine {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('ContentLoaderLine check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup({
      children: <View />,
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('ContentLoaderLine should match snapshot with loadingHeight and width', () => {
    const { wrapper } = setup({
      children: <View />,
      loadingHeight: 100,
      loadingWidth: 100,
      width: 100,
      height: 100,
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('ContentLoaderLine should match snapshot with ready', () => {
    const { wrapper } = setup({
      children: <View />,
      ready: true,
    });
    expect(wrapper).toMatchSnapshot();
  });
});
