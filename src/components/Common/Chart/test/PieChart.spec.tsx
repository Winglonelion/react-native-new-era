import React from 'react';
import { shallow } from 'enzyme';
import PieChart, { PropTypes } from '../PieChart';

const setup = (propOverrides: PropTypes = {} as PropTypes) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<PieChart {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('PieChart check snapshot', () => {
  test('should match snapshot with props', () => {
    const { wrapper } = setup({
      outerRadius: '80%',
      innerRadius: '30%',
      padAngle: 0,
      startAngle: 20,
      data: [
        {
          key: 'key1',
          value: 300,
          svg: { fill: 'red' },
        },
        {
          key: 'key2',
          value: 800,
          svg: { fill: 'yellow' },
        },
        {
          key: 'key3',
          value: 1200,
          svg: { fill: 'blue' },
        },
      ],
    });
    expect(wrapper).toMatchSnapshot();
  });
  test('should match snapshot without props and loading', () => {
    const { wrapper } = setup({});
    expect(wrapper).toMatchSnapshot();
  });
});
