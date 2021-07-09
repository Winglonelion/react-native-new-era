import React from 'react';
import { shallow } from 'enzyme';
import ContentLoader from '../ContentLoader';
import { IContentLoaderProps } from '../ContentLoader.types';
import { View } from 'react-native';

const setup = (
  propOverrides: IContentLoaderProps = {} as IContentLoaderProps,
) => {
  const props = { ...propOverrides };
  const wrapper = shallow(
    <ContentLoader {...props}>
      <View />
    </ContentLoader>,
  );
  return {
    props,
    wrapper,
  };
};

describe('ContentLoader check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup({});
    expect(wrapper).toMatchSnapshot();
  });
});

describe('ContentLoader check snapshot with props', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup({
      animate: true,
    });
    expect(wrapper).toMatchSnapshot();
  });
});
