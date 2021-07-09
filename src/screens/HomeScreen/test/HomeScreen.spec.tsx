import React from 'react';
import { shallow } from 'enzyme';
import HomeScreen from '../HomeScreen';
import paidMock from 'mock/networking/paid.mock';

jest.mock('routes/actions', () => ({
  __esModule: true,
  navigateTo: jest.fn(),
}));

import { navigateTo } from 'routes/actions';

paidMock();

function setup() {
  const wrapper = shallow(<HomeScreen />);
  return {
    wrapper,
  };
}

describe('HomeScreen check snapshot', function () {
  test('should match snapshot', function () {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('HomeScreen check events', function () {
  beforeEach(() => {
    const useCallbackSpy = jest.spyOn(React, 'useCallback');
    const useEffectSpy = jest.spyOn(React, 'useEffect');
    useCallbackSpy.mockImplementation(
      (callback: (...args: any[]) => any, _: any) => {
        return callback();
      },
    );
    useEffectSpy.mockImplementationOnce(
      (callback: (...args: any[]) => any, _: any) => {
        return callback();
      },
    );
  });

  test('should click overview work', function () {
    const { wrapper } = setup();
    wrapper.find('ForwardRef').simulate('onPress');
    expect(navigateTo).toBeCalledTimes(1);
  });
});
