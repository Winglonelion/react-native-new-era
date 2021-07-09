import React from 'react';
import { shallow } from 'enzyme';
import MoneyValue, { PropTypes } from '../MoneyValue';

const setup = (propOverrides: PropTypes = {} as PropTypes) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<MoneyValue {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('MoneyValue check snapshot', () => {
  test('should match snapshot with props', () => {
    const { wrapper } = setup({ value: 90000, fixed: 2 });
    expect(wrapper).toMatchSnapshot();
  });
  test('should match snapshot without props', () => {
    const { wrapper } = setup({});
    expect(wrapper).toMatchSnapshot();
  });
});
