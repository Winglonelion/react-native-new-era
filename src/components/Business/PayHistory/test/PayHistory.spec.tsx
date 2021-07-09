import React from 'react';
import { shallow } from 'enzyme';
import PayHistory, { PropTypes } from '../PayHistory';
import { paid_history_overview } from 'mock/networking/paid.mock';

const setup = (propOverrides: PropTypes = {} as PropTypes) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<PayHistory {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('PayHistory check snapshot', () => {
  test('should match snapshot with props', () => {
    const { wrapper } = setup({
      loading: false,
      overviewData: paid_history_overview,
    });
    expect(wrapper).toMatchSnapshot();
  });
  test('should match snapshot without props and loading', () => {
    const { wrapper } = setup({
      loading: true,
    });
    expect(wrapper).toMatchSnapshot();
  });
});
