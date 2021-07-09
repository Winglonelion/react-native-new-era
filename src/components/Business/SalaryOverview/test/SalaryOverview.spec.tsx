import React from 'react';
import { shallow } from 'enzyme';
import SalaryOverview, { PropTypes } from '../SalaryOverview';
import { paid_overview } from 'mock/networking/paid.mock';

const setup = (propOverrides: PropTypes = {} as PropTypes) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<SalaryOverview {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('SalaryOverview check snapshot', () => {
  test('should match snapshot with props', () => {
    const { wrapper } = setup({
      overviewData: paid_overview,
      loading: false,
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
