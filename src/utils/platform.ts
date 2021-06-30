import { Platform as NativePlatform } from 'react-native';
// import ReactNativeDeviceInfo from 'react-native-device-info';

// const hasNotch = ReactNativeDeviceInfo.hasNotch();

const OS = NativePlatform.OS;
const isAndroid = OS === 'android';
const isIos = OS === 'ios';
const iosVersion = isIos ? NativePlatform.Version : 0;
const KeyboardEvent = {
  Show: isIos ? 'keyboardWillShow' : 'keyboardDidShow',
  Hide: isIos ? 'keyboardWillHide' : 'keyboardDidHide',
};

const androidAPILevel = isAndroid ? NativePlatform.Version : 0;
// const isSupportTranslucentBar = (isIos && !hasNotch) || androidAPILevel >= 21;
const ConnectionEvent = 'connectionChange';

const isDev = !!__DEV__;
const isProduction = !isDev;

const Platform = {
  ConnectionEvent,
  iosVersion,
  isAndroid,
  isDev,
  isIos,
  isProduction,
  KeyboardEvent,
  OS: OS,
  // isSupportTranslucentBar,
  // hasNotch,
  androidAPILevel,
};

export default Platform;
