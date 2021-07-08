import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Fix "BlobModule.addNetworkingHandler is not a function" when upgrading to react native 0.54
import { NativeModules } from 'react-native';
import SetupAPI from 'api/api.config';
// React 16 Enzyme adapter
configure({ adapter: new Adapter() });

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

SetupAPI.init();
SetupAPI.setBaseUrl('http://localhost');
SetupAPI.setHeaderToken('test-token', 'test');
