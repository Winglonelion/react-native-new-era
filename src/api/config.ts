import { HTTP_ERROR_CODES } from 'constants/http-errors';
import { doNothing } from 'constants/default-values';
import ApiErrorHandler from 'utils/error-handler/api';
import { SERVERS } from 'constants/servers';
import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import Platform from 'utils/platform';
import HttpException from 'utils/error-handler/error';

/**
 * timeout for 30 seconds
 */
const TIMEOUT = 1 * 30 * 1000;
Axios.defaults.timeout = TIMEOUT;

const l10n = {
  unknown_error: 'unknown error',
  no_internet_connection: 'no internet connection',
};

/**
 * setup axios included content-type & deviceId
 */
const init = () => {
  console.log('-------- Axios INIT');
  const headers: AxiosRequestConfig['headers'] = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const auth = Axios.defaults.headers?.Authorization;
  if (auth) {
    headers.Authorization = auth;
    console.log('-------- Axios INIT with AUTH');
  }

  Axios.defaults.headers = headers;
};

/**
 * set baseUrl for axios
 * if in production environment, baseUrl alway from config
 *
 * else get from params
 *
 * TODO: This function look like weird and not consistency by the way output depend on environment values.
 * Need refactor it
 *
 * @param {String} baseUrl
 */
const setBaseUrl = (baseUrl?: string) => {
  let newBaseUrl;

  if (Platform.isProduction) {
    newBaseUrl = SERVERS.PRODUCTION;
  } else if (baseUrl) {
    newBaseUrl = baseUrl;
  } else {
    newBaseUrl = SERVERS.DEVELOPMENT;
  }

  Axios.defaults.baseURL = newBaseUrl;

  console.warn('-------- axios baseURL', newBaseUrl);

  return newBaseUrl;
};

const clearBaseUrl = () => {
  Axios.defaults.baseURL = '';
};

const setHeaderToken = (newToken: string, from: string) => {
  if (!Axios.defaults.headers) {
    console.warn('-------- axios headers empty');
    return;
  }

  if (!newToken) {
    console.warn('-------- axios headers token EMPTY', from);
    return;
  }

  const bearerToken = `Bearer ${newToken}`;
  const currentToken = Axios?.defaults?.headers?.Authorization || '';

  if (currentToken === bearerToken) {
    // console.warn('-------- axios headers token SAME', from);
    return;
  }

  !global.jest &&
    console.log(`-------- axios setToken from ${from}`, {
      currentToken: Axios?.defaults?.headers?.Authorization || 'EMPTY',
      newToken: bearerToken,
    });

  Axios.defaults.headers.Authorization = bearerToken;
};

const clearHeaderToken = () => {
  Axios.defaults.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
};

function getUnhandledErrorMessage(error: Error) {
  let message;

  if (!error) {
    message = 'empty error message';
    return message;
  }

  message = error.message || error.toString();
  return message;
}

const getErrorMessagesFromServer = (
  responseData: Record<string, any>,
  error: Error,
) => {
  const { messages, _error, errors } = responseData;
  if (typeof messages === 'string') {
    return messages;
  }

  if (errors && typeof errors === 'string') {
    return errors;
  }

  if (Array.isArray(errors) && errors.length > 0) {
    return errors.join(' ');
  }

  if (typeof _error?.message === 'string' && _error.message) {
    return _error.message;
  }

  if (typeof _error === 'string' && _error) {
    return _error;
  }

  return getUnhandledErrorMessage(error);
};

const onResponseSuccess = (response: AxiosResponse) => {
  const authorization = response?.headers?.authorization ?? '';
  if (authorization) {
    setHeaderToken(authorization, `onReceivedToken:${response?.config.url}`);
    // onReceivedToken(authorization);
  }
  return response;
};

/**
 * handle error response
 */
const onResponseError = (error: AxiosError) => {
  console.log('axios Error', { error });
  let alertMessage = l10n.unknown_error;

  if (!error.response) {
    switch (error.message) {
      case 'Network Error':
        alertMessage = l10n.no_internet_connection;
        break;

      default:
        alertMessage = getUnhandledErrorMessage(error);
        break;
    }
    throw new Error(alertMessage);
  }

  const {
    response: { status, data },
  } = error;
  const errorDataFromServer = data || {};

  /**
   * handle error by http error code
   */
  switch (status) {
    case HTTP_ERROR_CODES.UNAUTHORIZED:
      ApiErrorHandler.handleApiResponseError(
        error,
        '-----> HTTP_ERROR_CODES.UNAUTHORIZED',
        {
          breadCrumb: true,
          handler: doNothing,
        },
      );
      // onUnAuthorized({ url: error?.config?.url });
      break;

    case HTTP_ERROR_CODES.BLACKLIST:
      // onBlacklist();
      break;

    default:
      alertMessage = getErrorMessagesFromServer(errorDataFromServer, error);
      break;
  }

  const finalError = new HttpException(status, alertMessage, {
    response: error.response,
  });

  throw finalError;
};

Axios.interceptors.response.use(onResponseSuccess, onResponseError);

const SetupAPI = {
  init,
  setBaseUrl,
  clearBaseUrl,
  setHeaderToken,
  clearHeaderToken,
};

export default SetupAPI;
