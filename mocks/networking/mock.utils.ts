import { AxiosRequestConfig } from 'axios';

/* eslint-disable @typescript-eslint/no-unused-vars */
export const withDelay = (
  delay: number,
  response: { status: number; data?: object },
) => {
  return function (config?: AxiosRequestConfig) {
    return new Promise<[number, any]>(function (resolve, reject) {
      setTimeout(function () {
        resolve([response.status, response.data]);
      }, delay);
    });
  };
};
