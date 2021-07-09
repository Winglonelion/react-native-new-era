import React from 'react';
import { shallow } from 'enzyme';
import ActionButton, { PropTypes } from '../ActionButton';

const setup = (propOverrides: PropTypes = {} as PropTypes) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<ActionButton {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('ActionButton check snapshot', () => {
  test('should match snapshot with props', () => {
    const { wrapper } = setup({
      text: 'button 1',
      disabled: false,
      onPress: jest.fn(),
      tint: 'blue',
    });
    expect(wrapper).toMatchSnapshot();
  });
  test('should match snapshot with disabled', () => {
    const { wrapper } = setup({
      disabled: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot without props', () => {
    const { wrapper } = setup({});
    expect(wrapper).toMatchSnapshot();
  });
});
