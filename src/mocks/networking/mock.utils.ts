import { AxiosRequestConfig } from 'axios';

/* eslint-disable @typescript-eslint/no-unused-vars */
export const withDelay = (
  delay: number,
  response: { status: number; data?: object | Function },
) => {
  return function (config?: AxiosRequestConfig) {
    return new Promise<[number, any]>(function (resolve, reject) {
      const data =
        typeof response.data === 'function' ? response.data() : response.data;
      setTimeout(function () {
        resolve([response.status, data]);
      }, delay);
    });
  };
};
