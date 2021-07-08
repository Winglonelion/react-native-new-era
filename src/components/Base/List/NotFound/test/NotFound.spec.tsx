import React from 'react';
import { shallow } from 'enzyme';
import NotFound, { PropTypes } from '../NotFound';

const setup = (propOverrides: PropTypes = {} as PropTypes) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<NotFound {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('NotFound check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
describe('NotFound check render correctly', () => {
  test('should contain 1 Icon', () => {
    const { wrapper } = setup();
    expect(wrapper.find('Icon')).toHaveLength(1);
  });
});
