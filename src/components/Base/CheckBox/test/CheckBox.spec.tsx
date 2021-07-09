import React from 'react';
import { shallow } from 'enzyme';
import CheckBox, { PropTypes } from '../CheckBox';

const setup = (propOverrides: PropTypes = {} as PropTypes) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<CheckBox {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('CheckBox check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  test('checked should match snapshot', () => {
    const { wrapper } = setup({ checked: true });
    expect(wrapper).toMatchSnapshot();
  });
});
describe('CheckBox check render correctly', () => {
  test('unchecked should contain 2 View', () => {
    const { wrapper } = setup();
    expect(wrapper.find('View')).toHaveLength(2);
  });

  test('checked should contain 1 View, 1 Icon', () => {
    const { wrapper } = setup({ checked: true });
    expect(wrapper.find('IconClass')).toHaveLength(1);
    expect(wrapper.find('View')).toHaveLength(1);
  });
});
