import React from 'react';
import { shallow } from 'enzyme';
import DateTitle, { PropTypes } from '../DateTitle';

const setup = (propOverrides: PropTypes = {} as PropTypes) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<DateTitle {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('DateTitle check snapshot', () => {
  test('should match snapshot with props', () => {
    const { wrapper } = setup({
      color: 'red',
      date: new Date(),
      level: 'h2',
      style: { lineHeight: 30 },
    });
    expect(wrapper).toMatchSnapshot();
  });
  test('should match snapshot without props and loading', () => {
    const { wrapper } = setup({});
    expect(wrapper).toMatchSnapshot();
  });
});
