import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { AbortedRequest } from './abortedRequest';
import type { InterceptorConfig, RestfulRequest } from './type';

/** */
export default class Axios<T> {
  /** Axios实例 */
  private instance: AxiosInstance;
  /** */
  private abortedRequest: AbortedRequest;

  // 构造器
  constructor(restfulRequest: RestfulRequest<T>) {
    this.instance = axios.create(restfulRequest.customConfig);
    this.abortedRequest = new AbortedRequest();
    this.useInterceptors(restfulRequest.interceptorConfig);
  }

  /** 配置请求和响应拦截器 */
  public useInterceptors(config: InterceptorConfig<T>): void {
    const {
      enableAbortRequest,
      interceptorRequest,
      interceptorRequestRejected,
      interceptorResponse,
      interceptorResponseRejected,
    } = config;

    // 请求拦截器: 在请求发送前, 对请求配置做一些处理
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // 如果开启中止请求功能
        if (enableAbortRequest) {
          const pendingKey = this.abortedRequest.generatePendingKey(config);
          if (this.abortedRequest.abortRequest(pendingKey)) {
            this.abortedRequest.addPending(config);
          }
        }
        if (interceptorRequest) {
          return interceptorRequest(config);
        }
        return config;
      },
      (error: any) => {
        console.log(error.message || 'Server internal error.');
        if (interceptorRequestRejected) {
          return interceptorRequestRejected(error);
        }
        return Promise.reject(error || 'Server internal error.');
      },
    );

    // 响应拦截器: 在then & catch之前对响应做一些处理
    this.instance.interceptors.response.use(
      (response: AxiosResponse<T>) => {
        // 如果开启中止请求功能
        if (enableAbortRequest) {
          const pendingKey = this.abortedRequest.generatePendingKey(response.config);
          this.abortedRequest.removePending(pendingKey);
        }
        if (interceptorResponse) {
          return interceptorResponse(response);
        }
        return response;
      },
      (error) => {
        if (interceptorResponseRejected) {
          return interceptorResponseRejected(error);
        }
        return Promise.reject(error);
      },
    );
  }

  /** 发起请求 */
  request(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          const errMsg = error || 'Server internal error.';
          console.error(errMsg);
          reject(errMsg);
        });
    });
  }

  /**GET请求 */
  public get(url: string, params?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request({ url, method: 'GET', params, ...config });
  }

  /** POST请求 */
  public post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request({ url, method: 'POST', data, ...config });
  }

  /** PUT请求 */
  public put(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request({ url, method: 'PUT', data, ...config });
  }

  /** DELETE请求 */
  public delete(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request({ url, method: 'DELETE', data, ...config });
  }
}
