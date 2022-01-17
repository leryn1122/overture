import { AxiosResponse } from 'axios';

/** LocalStorage中token的名称 */
export const TOKEN_KEY: string = 'token';

/** 默认的token所在的请求头名称 */
export const TOKEN_HEADER: string = 'x-access-token';

/** 从LocalStorage获取token */
export const getToken = function (): string {
  return window.localStorage.getItem(TOKEN_KEY) as string;
};

/** 清除LocalStorage中的token */
export const removeToken = function (): void {
  window.localStorage.removeItem(TOKEN_KEY);
};

/** 存储token */
export const storeToken = function (token: string): void {
  window.localStorage.setItem(TOKEN_KEY, token);
};

/** 是否有token */
export const hasToken = function (): boolean {
  if (window.localStorage.getItem(TOKEN_KEY)) {
    return true;
  }
  return false;
};

/** 从响应头部获得token, 并存入LocalStorage */
export const getTokenFromHeader = function (response: AxiosResponse): string | null {
  console.log('Headers = ', response);
  let token = response.headers[TOKEN_HEADER];
  return token;
};

export function getAuth<T>(key: string) {
  return window.localStorage.getItem(key) as unknown as T;
}
