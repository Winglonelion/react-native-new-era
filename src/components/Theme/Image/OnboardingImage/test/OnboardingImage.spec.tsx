import React from 'react';
import { shallow } from 'enzyme';
import OnboardingImage, { PropTypes } from '../OnboardingImage';

const setup = (propOverrides: PropTypes = {} as PropTypes) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<OnboardingImage {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('OnboardingImage check snapshot', () => {
  test('should match snapshot with props', () => {
    const { wrapper } = setup({
      source: require('images/account_info.png'),
      style: { width: 30, height: 30 },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
