import useUserStore from '@/store/modules/user';
import httpClient from '@/utils/httpclient';
import { RequestOptions } from '@/utils/httpclient/type';

export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginReponse = {
  id: string;
  username: string;
  refreshToken: string;
  accessToken: string;
};

export type GetUserInfoRequest = {
  id: string;
};

export type GetUserInfoResponse = {
  id: string;
  username: string;
  roles: string[];
};

export type LogoutRequest = {};

export type LogoutResponse = {};

export type RefreshTokenRequest = {};

export type RefreshTokenResponse = {
  accessToken: string;
  refreshToken: string;
};

export const doLogin = (request: LoginRequest): LoginReponse => {
  httpClient.post('/api/login');

  return {
    id: '1',
    username: 'admin',
    refreshToken: 'refresh-token-123',
    accessToken: 'access-token-123',
  } as LoginReponse;
};

export const doGetUserInfo = (request: GetUserInfoRequest): GetUserInfoResponse => {
  return {
    id: '1',
    username: 'admin',
    roles: [],
  } as GetUserInfoResponse;
};

export const doLogout = (request: LogoutRequest): LogoutResponse => {
  return {} as LoginReponse;
};

export const doRefreshToken = (request: RefreshTokenRequest): RefreshTokenResponse => {
  httpClient.post(
    '/api/refreshToken',
    {} as RefreshTokenRequest,
    {
      headers: {
        Authorization: `Bearer: ${useUserStore().getRefreshToken}`,
      },
    },
    {
      isRefreshToken: true,
    } as RequestOptions,
  );
  return {
    accessToken: 'access-token-123',
    refreshToken: 'refresh-token-123',
  } as RefreshTokenResponse;
};
