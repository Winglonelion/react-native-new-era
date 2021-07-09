import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MockDate from 'mockdate';
// Fix "BlobModule.addNetworkingHandler is not a function" when upgrading to react native 0.54
import { NativeModules } from 'react-native';
import SetupAPI from 'api/api.config';

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });

declare const global: {
  withAnimatedTimeTravelEnabled: Function;
  requestAnimationFrame: Function;
  timeTravel: Function;
  setImmediate: Function;
};

// NativeModules.ReactLocalization = {
//   language: 'en_EN',
// };

NativeModules.BlobModule = {
  ...NativeModules.BlobModule,
  addNetworkingHandler: jest.fn(),
};

NativeModules.PermissionsAndroid = {
  requestMultiplePermissions: jest.fn(async () => true),
  checkPermission: jest.fn(async () => true),
};

NativeModules.RNCNetInfo = {};

NativeModules.RNGestureHandlerModule = {
  attachGestureHandler: jest.fn(),
  createGestureHandler: jest.fn(),
  dropGestureHandler: jest.fn(),
  updateGestureHandler: jest.fn(),
  State: {},
  Directions: {},
};

NativeModules.UIManager = {
  RCTView: () => {},
};

function setupTimeTravelForRNAnimated() {
  const frameTime = 10;
  global.withAnimatedTimeTravelEnabled = (func: Function) => {
    MockDate.set(0);
    jest.useFakeTimers();
    func();
    MockDate.reset();
    jest.useRealTimers();
  };
  global.requestAnimationFrame = (callback: Function) => {
    setTimeout(callback, frameTime);
  };
  global.setImmediate = (callback: () => void) => {
    jest.useFakeTimers();
    callback();
    jest.useRealTimers();
  };
  global.timeTravel = (time = frameTime) => {
    const tickTravel = () => {
      const now = Date.now();
      MockDate.set(new Date(now + frameTime));
      // Run the timers forward
      jest.advanceTimersByTime(frameTime);
    };
    // Step through each of the frames
    const frames = time / frameTime;
    for (let i = 0; i < frames; i++) {
      tickTravel();
    }
  };
}

MockDate.set('2021/12/07');

setupTimeTravelForRNAnimated();

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

SetupAPI.init();
SetupAPI.setBaseUrl('http://localhost');
SetupAPI.setHeaderToken('test-token', 'test');
