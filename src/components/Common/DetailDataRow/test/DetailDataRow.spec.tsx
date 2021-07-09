import React from 'react';
import { shallow } from 'enzyme';
import DetailDataRow, { PropTypes } from '../DetailDataRow';

const setup = (propOverrides: PropTypes = {} as PropTypes) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<DetailDataRow {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('DetailDataRow check snapshot', () => {
  test('should match snapshot with props', () => {
    const { wrapper } = setup({
      title: 'test menu',
      content: 'test data',
      onPress: jest.fn(),
      strongChevron: true,
    });
    expect(wrapper).toMatchSnapshot();
  });
  test('should match snapshot without props and loading', () => {
    const { wrapper } = setup({
      title: 'test menu',
      strongChevron: false,
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot without not strong chevron', () => {
    const { wrapper } = setup({
      title: 'test menu',
      onPress: jest.fn(),
    });
    expect(wrapper).toMatchSnapshot();
  });
});
