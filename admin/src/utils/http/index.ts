import { createApp } from 'vue';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import Axios from '@/utils/http/axios';
import type { RestfulResponse, RestfulRequest } from 'types/http';

export { AxiosError, AxiosRequestConfig, AxiosResponse };

/** 判断是需要Credentials */
let baseUrl: URL = new URL(import.meta.env.VITE_APP_BASE_URL as string);
let withCredentials = location.hostname != baseUrl.hostname || location.port != baseUrl.port;

/** 基于Axios封装的, HTTP客户端 */
const http = new Axios<RestfulResponse<any>>({
  customConfig: {
    baseURL: import.meta.env.VITE_APP_BASE_URL as string,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'X-Access-Token': localStorage.getItem('token') || '',
    },
    responseType: 'json',
    timeout: 10 * 1000,
    timeoutErrorMessage: 'Request timeout. Please retry.',
    withCredentials: withCredentials,
  },
  interceptorConfig: {
    enableAbortRequest: true,
    interceptorRequest: (config: AxiosRequestConfig) => {
      return config;
    },
    interceptorRequestRejected: (error: AxiosError) => {
      return Promise.reject(error);
    },
    interceptorResponse: (response: AxiosResponse<any>) => {
      if (response.data as RestfulResponse) {
        // TODO
        // 这里需要处理HTTP200 但 body返回错误的逻辑
      }
      return Promise.resolve(response);
    },
    interceptorResponseRejected: (error: AxiosError) => {
      return Promise.reject(error);
    },
  },
});

export function setupHttp(app: ReturnType<typeof createApp>): ReturnType<typeof createApp> {
  app.config.globalProperties.$http = Axios;
  return app;
}

export { http as httpclient };
export default http; // or httpclient
