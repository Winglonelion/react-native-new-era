import { AxiosError } from 'axios';

function handleResponseError(
  error: AxiosError,
  title: string,
  options: {
    log?: boolean;
    breadCrumb?: boolean;
    notify?: boolean;
    handler?: Function;
  },
) {
  if (!error) {
    throw new Error('server_not_response');
  }
  const { config, response } = error;

  const {
    log = true,
    breadCrumb = false,
    notify = false,
    handler,
  } = options || {};
  const errorTitle = typeof title === 'string' ? `${title} Error` : 'Error';

  const _metaData = {
    method: config?.method,
    url: config?.url,
    timeout: config?.timeout,
    userMessage: response?.data?.message || '',
    code: typeof response?.status === 'number' ? `${response.status}` : null,
    errorMessage: response?.data?.data?.errors || '',
  };

  if (log) {
    console.warn(errorTitle, _metaData);
  }

  typeof handler === 'function' && handler(_metaData);

  if (breadCrumb) {
    // Error reporter (Sentry, Bugsnag) breadcrumb place here
    // BugSnagManager.getInstance().leaveBreadcrumb(errorTitle, _metaData);
  }

  if (notify) {
    // Error reporter (Sentry, Bugsnag) notify place here
    // BugSnagManager.getInstance().notify(error);
  }
}

const ApiErrorHandler = {
  handleApiResponseError: handleResponseError,
};

export default ApiErrorHandler;
