export const HTTP_ERROR_CODES = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 408,
  UNPROCESSABLE: 422,
  INTERNAL_SERVER_ERROR: 500,
  SERVER_NOT_AVAILABLE: 503,
  BLACKLIST: 451,
};

export const HTTP_ERROR_MESSAGES = {
  BAD_REQUEST: 'bad_request',
  UNAUTHORIZED: 'unauthorized',
  FORBIDDEN: 'forbidden',
  NOT_FOUND: 'not_found',
  TIMEOUT: 'timeout',
  UNPROCESSABLE: 'unprocessable',
  NETWORK_ERROR: 'no_internet_connection',
  INTERNAL_SERVER_ERROR: 'internal_server_error',
  SERVER_NOT_AVAILABLE: 'server_not_available',
  DEFAULT: 'unknown_error',
  BLACKLIST: 'blacklist',
};

export const INVALID_DATE = 'Invalid Date';
