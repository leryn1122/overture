import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export type HttpResult<T = any> = {
  code: number;
  data?: T;
  message?: string;
};

export interface CreateHttpClientOptions extends AxiosRequestConfig<RequestOptions> {
  requestOptions: RequestOptions;
  interceptorConfig: InterceptorConfig;
}

export interface RequestOptions {
  isRefreshToken: boolean;
}

export interface InterceptorConfig
  extends Partial<{
    // enableAbortRequest: boolean;
    requestInterceptors: <T = any>(config: AxiosRequestConfig<T>) => AxiosRequestConfig | Promise<AxiosRequestConfig>;
    requestInterceptorsCatcher: (error: Error | AxiosError) => any;
    responseInterceptors: <T = any>(
      value: AxiosResponse<HttpResult<T>>,
    ) => AxiosResponse<T> | Promise<AxiosResponse<T>>;
    responseInterceptorsCatcher: (error: Error | AxiosError) => any;
  }> {}
