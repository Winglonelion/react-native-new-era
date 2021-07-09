import React from 'react';
import { shallow } from 'enzyme';
import FacebookStyle from '../FacebookStyle';
import { IContentLoaderProps } from '../../ContentLoader.types';

const setup = (
  propOverrides: IContentLoaderProps = {} as IContentLoaderProps,
) => {
  const props = { ...propOverrides };
  const wrapper = shallow(<FacebookStyle {...props} />);
  return {
    props,
    wrapper,
  };
};

describe('FacebookStyle check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup({});
    expect(wrapper).toMatchSnapshot();
  });
});
