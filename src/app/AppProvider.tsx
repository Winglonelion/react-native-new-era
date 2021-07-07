/**
 * Config providers for Application
 *
 * @summary Config providers for Application
 * @author Thuan <nguyenbuiducthuan@gmail.com>
 *
 * Created at     : 2021-05-11 15:34:27
 * Last modified  : 2021-07-07 21:56:05
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import App from './App';
import SetupAPI from 'api/api.config';
import ErrorBoundary from './ErrorBoundary';
import Persister from './Persister';

class AppProvider extends React.PureComponent {
  UNSAFE_componentWillMount() {
    SetupAPI.init();
    SetupAPI.setBaseUrl();
  }

  render() {
    return (
      <SafeAreaProvider>
        <ErrorBoundary>
          <Persister>
            <App />
          </Persister>
        </ErrorBoundary>
      </SafeAreaProvider>
    );
  }
}

export default AppProvider;
