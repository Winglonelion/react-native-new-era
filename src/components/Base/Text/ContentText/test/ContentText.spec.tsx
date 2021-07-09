/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { shallow } from 'enzyme';
import ContentText, { PropTypes } from '../ContentText';

const setup = (propOverrides: PropTypes = {} as PropTypes) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<ContentText {...props}>{'TEST'}</ContentText>);
  return {
    props,
    wrapper,
  };
};

describe('ContentText check snapshot', () => {
  test('should match snapshot with props', () => {
    const { wrapper } = setup({ color: 'blue', size: 15, weight: '500' });
    expect(wrapper).toMatchSnapshot();
  });
  test('should match snapshot without props', () => {
    const { wrapper } = setup({});
    expect(wrapper).toMatchSnapshot();
  });
});
