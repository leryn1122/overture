import { AxiosError, AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from 'axios';
import { deepMerge } from '@/utils/object';

import { CreateHttpClientOptions, HttpResult, InterceptorConfig, RequestOptions } from './type';
import { HttpClient } from './axios';
import { ContentTypeEnum, HttpStatus } from './http';
import useUserStore from '@/store/modules/user';

export function createHttpClient(options?: Partial<CreateHttpClientOptions>): HttpClient {
  let opt: CreateHttpClientOptions = deepMerge(
    {
      authenticationScheme: '',
      timeout: 10 * 1000,
      headers: {
        'Content-Type': ContentTypeEnum.JSON,
      },
      requestOptions: {} as RequestOptions,
      interceptorConfig: {
        requestInterceptors,
        requestInterceptorsCatcher,
        responseInterceptors,
        responseInterceptorsCatcher,
      } as InterceptorConfig,
    } as CreateAxiosDefaults,
    options || {},
  );
  return new HttpClient(opt);
}

function requestInterceptors<T = any>(
  config: AxiosRequestConfig<T>,
): AxiosRequestConfig<T> | Promise<AxiosRequestConfig<T>> {
  const accessToken = useUserStore().getAccessToken;
  if (accessToken) {
    config.headers!.Authorization = `Bearer ${accessToken}`;
  }

  return config;
}

function requestInterceptorsCatcher(error: Error | AxiosError): any {
  return error;
}

async function responseInterceptors<T = any>(
  response: AxiosResponse<HttpResult<T>>,
): Promise<AxiosResponse<HttpResult<T>>> {
  // @ts-ignore
  if (response.headers?.has('Authorization')) {
    const accessToken = response.headers!.getAuthorization!.toString().replace('Bearer ', '');
    useUserStore().setAccessToken(accessToken);
  }

  // @ts-ignore
  if (response.headers?.has('refresh-token')) {
    // @ts-ignore
    const refreshToken = response.headers!.get('refresh-token');
    useUserStore().setRefreshToken(refreshToken);
  }

  console.log(response.config);
  if (
    response.data.code === HttpStatus.Unauthorized &&
    !isRefreshTokenRequest(response.config as CreateHttpClientOptions)
  ) {
    await useUserStore().doRefreshToken();
    const config = response.config;
    const accessToken = useUserStore().getAccessToken;
    config.headers.Authorization = `Bearer ${accessToken}`;
    const anotherResponse = await httpClient.request(config.url!, config.method, config.data, config);
    return anotherResponse;
  }

  return response;
}

function responseInterceptorsCatcher(error: Error | AxiosError): any {
  return error;
}

const isRefreshTokenRequest = (config: CreateHttpClientOptions): boolean => {
  return !!config.requestOptions.isRefreshToken;
};

export const httpClient = createHttpClient();

export * from './http';
export default httpClient;
