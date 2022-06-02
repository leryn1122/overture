import { AxiosRequestConfig, AxiosResponse } from 'axios';

/** 拦截器配置 */
export interface InterceptorConfig<T = any> {
  /** 是否开启中止请求功能 */
  enableAbortRequest?: boolean;
  /** 请求拦截器 */
  interceptorRequest?: (value: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>;
  /** 请求拦截器异常处理 */
  interceptorRequestRejected?: (error: any) => any;
  /** 响应拦截器 */
  interceptorResponse?: (value: AxiosResponse<T>) => AxiosResponse<any> | Promise<AxiosResponse<T>>;
  /** 响应拦截器异常处理 */
  interceptorResponseRejected?: (error: any) => any;
}

/** 自定义请求内容 */
export interface RestfulRequest<T = any> {
  /** 原生axios配置 */
  customConfig?: AxiosRequestConfig;
  /** 拦截器配置 */
  interceptorConfig: InterceptorConfig<T>;
}

/** 自定义响应内容 */
export interface RestfulResponse<T = any> {
  /** 状态码 */
  code: number;
  /** 消息 */
  message: string;
  /** 数据集 */
  data: T;
}

export declare type Response<T> = AxiosResponse<RestfulResponse<T>>;
