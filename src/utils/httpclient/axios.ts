import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { deepClone } from '@/utils/object';

import { CreateHttpClientOptions, HttpResult, InterceptorConfig, RequestOptions } from './type';
import { ContentTypeEnum, HttpMethod } from './http';
import { AbortedRequestQueue } from './abort';

export type RequestURL = string;

export class HttpClient {
  private axiosInstance: AxiosInstance;
  private readonly options: CreateHttpClientOptions;
  private abortedRequests: AbortedRequestQueue;

  constructor(options: CreateHttpClientOptions) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    this.abortedRequests = new AbortedRequestQueue();
    this.useInterceptors(this.options.interceptorConfig);
  }

  private getInstance(): AxiosInstance {
    return this.axiosInstance;
  }

  async sendRequest<T = any>(
    config: AxiosRequestConfig,
    options?: Partial<RequestOptions>,
  ): Promise<AxiosResponse<HttpResult<T>, any>> {
    let _config: AxiosRequestConfig = deepClone(config);
    _config = Object.assign({}, _config, this.options, options);
    if (_config.headers?.['Content-Type'] === ContentTypeEnum.FORM_URLENCODED) {
      _config.data = JSON.stringify(deepClone(_config.data));
    }
    return await this.getInstance().request<T, AxiosResponse<HttpResult<T>>>(_config);
  }

  unwrap<T = any>(response: Promise<AxiosResponse<HttpResult<T>, any>>): Promise<HttpResult<T>> {
    return new Promise((resolve, reject) => {
      response
        .then((resp: AxiosResponse<HttpResult<T>>) => {
          resolve(resp?.data as unknown as Promise<HttpResult<T>>);
        })
        .catch((e: Error | AxiosError) => {
          if (axios.isAxiosError(e)) {
            console.error(e);
          }
          reject(e);
        });
    });
  }

  request<T = any>(
    url: RequestURL,
    method: HttpMethod | string = HttpMethod.GET,
    data: T,
    config?: AxiosRequestConfig,
    options?: Partial<RequestOptions>,
  ): Promise<AxiosResponse<HttpResult<T>, any>> {
    return this.sendRequest(
      {
        ...config,
        url,
        data,
        method,
      },
      options,
    );
  }

  get<T = any>(
    url: RequestURL,
    config?: AxiosRequestConfig,
    options?: Partial<RequestOptions>,
  ): Promise<HttpResult<T>> {
    return this.unwrap(
      this.sendRequest(
        {
          ...config,
          url: url,
          method: HttpMethod.GET,
        },
        options,
      ),
    );
  }

  post<D = any, T = any>(
    url: RequestURL,
    data?: D,
    config?: AxiosRequestConfig,
    options?: Partial<RequestOptions>,
  ): Promise<HttpResult<T>> {
    return this.unwrap(
      this.sendRequest(
        {
          ...config,
          url: url,
          data: data,
          method: HttpMethod.POST,
        },
        options,
      ),
    );
  }

  put<D = any, T = any>(
    url: RequestURL,
    data?: D,
    config?: AxiosRequestConfig,
    options?: Partial<RequestOptions>,
  ): Promise<HttpResult<T>> {
    return this.unwrap(
      this.sendRequest(
        {
          ...config,
          url: url,
          data: data,
          method: HttpMethod.PUT,
        },
        options,
      ),
    );
  }

  delete<D = any, T = any>(
    url: RequestURL,
    data?: D,
    config?: AxiosRequestConfig,
    options?: Partial<RequestOptions>,
  ): Promise<HttpResult<T>> {
    return this.unwrap(
      this.sendRequest(
        {
          ...config,
          url: url,
          data: data,
          method: HttpMethod.DELETE,
        },
        options,
      ),
    );
  }

  public setHeader<T = any>(headers: T): void {
    Object.assign(this.getInstance().defaults.headers, headers);
  }

  public useInterceptors(config: InterceptorConfig): void {
    const { requestInterceptors, requestInterceptorsCatcher, responseInterceptors, responseInterceptorsCatcher } =
      config;

    this.getInstance().interceptors.request.use(
      (config: any) => {
        if (requestInterceptors) {
          return requestInterceptors(config);
        }
        return config;
      },
      (error: Error | AxiosError) => {
        if (requestInterceptorsCatcher) {
          return requestInterceptorsCatcher(error || 'Server internal error.');
        }
        return Promise.reject(error || 'Server internal error.');
      },
    );

    this.getInstance().interceptors.response.use(
      (response: AxiosResponse) => {
        if (responseInterceptors) {
          responseInterceptors(response);
        }
        return response;
      },
      (error: Error | AxiosError) => {
        if (responseInterceptorsCatcher) {
          return responseInterceptorsCatcher(error);
        }
        return Promise.reject(error);
      },
    );
  }
}
