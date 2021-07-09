import React from 'react';
import { shallow } from 'enzyme';
import Button, { PropTypes } from '../Button';

const setup = (propOverrides: PropTypes = {} as PropTypes) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<Button {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('Button check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
describe('Button check render correctly', () => {
  test('should contain 1 Pressable', () => {
    const { wrapper } = setup();
    expect(wrapper.find('Pressable')).toHaveLength(1);
  });
});
