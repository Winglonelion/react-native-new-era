/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { shallow } from 'enzyme';
import TitleText, { PropTypes } from '../TitleText';

const setup = (propOverrides: PropTypes = {} as PropTypes) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<TitleText {...props}>{'TEST'}</TitleText>);
  return {
    props,
    wrapper,
  };
};

describe('TitleText check snapshot', () => {
  test('should match snapshot with props', () => {
    const { wrapper } = setup({
      level: 'h1',
      color: '#EEE',
      style: { lineHeight: 30 },
    });
    expect(wrapper).toMatchSnapshot();
  });
  test('should match snapshot without props', () => {
    const { wrapper } = setup({});
    expect(wrapper).toMatchSnapshot();
  });
});
