import React from 'react';
import { shallow } from 'enzyme';
import SwitchDataRow, { PropTypes } from '../SwitchDataRow';

const setup = (propOverrides: PropTypes = {} as PropTypes) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<SwitchDataRow {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('SwitchDataRow check snapshot', () => {
  test('should match snapshot with props', () => {
    const { wrapper } = setup({
      title: 'switch title',
      isEnabled: true,
      onChange: jest.fn(),
    });
    expect(wrapper).toMatchSnapshot();
  });
  test('should match snapshot isEnabled false', () => {
    const { wrapper } = setup({
      title: 'switch title 2',
      isEnabled: false,
      onChange: jest.fn(),
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('should match snapshot without onChange', () => {
    const { wrapper } = setup({
      title: 'switch title 3',
      isEnabled: false,
    });
    expect(wrapper).toMatchSnapshot();
  });
});
