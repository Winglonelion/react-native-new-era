/**
 * Config providers for Application
 *
 * @summary Config providers for Application
 * @author Thuan <nguyenbuiducthuan@gmail.com>
 *
 * Created at     : 2021-05-11 15:34:27
 * Last modified  : 2021-06-29 17:47:35
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import App from './App';
import SetupAPI from 'api/api.config';
import ErrorBoundary from './ErrorBoundary';

class AppProvider extends React.PureComponent {
  UNSAFE_componentWillMount() {
    SetupAPI.init();
    SetupAPI.setBaseUrl();
  }

  render() {
    return (
      <SafeAreaProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </SafeAreaProvider>
    );
  }
}

export default AppProvider;
