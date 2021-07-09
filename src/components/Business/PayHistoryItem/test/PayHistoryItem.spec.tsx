import React from 'react';
import { shallow } from 'enzyme';
import PayHistoryItem, { PropTypes } from '../PayHistoryItem';
import { paid_history_overview } from 'mock/networking/paid.mock';

const setup = (propOverrides: PropTypes = {} as PropTypes) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<PayHistoryItem {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('PayHistory check snapshot', () => {
  test('should match snapshot with props', () => {
    const { wrapper } = setup({
      item: paid_history_overview[0],
    });
    expect(wrapper).toMatchSnapshot();
  });
  test('should match snapshot without props and loading', () => {
    const { wrapper } = setup({ item: undefined });
    expect(wrapper).toMatchSnapshot();
  });
});
