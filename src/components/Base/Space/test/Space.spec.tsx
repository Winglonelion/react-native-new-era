import React from 'react';
import { shallow } from 'enzyme';
import Space, { PropTypes } from '../Space';

const setup = (propOverrides: PropTypes = {} as PropTypes) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<Space {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('Space check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot with props', () => {
    const { wrapper } = setup({ height: 10, width: 10 });
    expect(wrapper).toMatchSnapshot();
  });
});
describe('Space check render correctly', () => {
  test('should contain 1 View', () => {
    const { wrapper } = setup();
    expect(wrapper.find('View')).toHaveLength(1);
  });
});
