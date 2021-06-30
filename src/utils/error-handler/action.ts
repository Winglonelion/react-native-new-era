/**
 * Error handler for Redux actions
 *
 * @summary Error handler for Redux actions
 * @author Thuan <nguyenbuiducthuan@gmail.com>
 *
 * Created at     : 2021-05-11 15:00:29
 * Last modified  : 2021-05-11 15:04:15
 */

import HttpException from './error';

type MetadataTypes = {
  error: {
    status?: number;
    message?: string;
  };
};

function handleFunctionError(
  error: HttpException,
  title: string,
  options?: {
    log?: boolean;
    breadCrumb?: boolean;
    notify?: boolean;
  },
  metaData?: Object,
) {
  const { log = true, breadCrumb = false, notify = false } = options ?? {};
  const errorTitle = typeof title === 'string' ? `${title} Error` : 'Error';

  if (log) {
    console.warn(errorTitle, { error });
  }

  if (breadCrumb) {
    const _metaData: MetadataTypes = { ...(metaData ?? {}), error: {} };
    if (typeof error.status === 'number') {
      _metaData.error.status = error.status;
    }
    if (typeof error.message === 'string') {
      _metaData.error.message = error.message;
    }
    // Error reporter (Sentry, Bugsnag) breadcrumb place here
    // BugSnagManager.getInstance().leaveBreadcrumb(errorTitle, _metaData);
  }

  if (notify) {
    // Error reporter (Sentry, Bugsnag) notify place here
    // BugSnagManager.getInstance().notify(error);
  }
}

const ActionErrorHandler = {
  handleFunction: handleFunctionError,
};

export default ActionErrorHandler;
