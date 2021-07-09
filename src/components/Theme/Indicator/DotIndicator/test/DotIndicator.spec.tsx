import React from 'react';
import { shallow } from 'enzyme';
import DotIndicator, { PropTypes } from '../DotIndicator';

const setup = (propOverrides: PropTypes = {} as PropTypes) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<DotIndicator {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('DotIndicator check snapshot', () => {
  test('should match snapshot with isActive true', () => {
    const { wrapper } = setup({ isActive: true });
    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot with isActive false', () => {
    const { wrapper } = setup({ isActive: false });
    expect(wrapper).toMatchSnapshot();
  });
});
