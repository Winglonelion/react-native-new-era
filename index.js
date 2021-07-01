/**
 * @format
 */

import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// TODO: this is setup for networking mock, remove it when implementing API
import './mocks/networking';

enableScreens();

AppRegistry.registerComponent(appName, () => App);
