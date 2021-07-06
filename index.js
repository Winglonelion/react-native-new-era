/**
 * @format
 */

import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import { enableScreens } from 'react-native-screens';

import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

// TODO: this is setup for networking mock, remove it when implementing API
import './mocks/networking';

enableScreens();

AppRegistry.registerComponent(appName, () => App);
