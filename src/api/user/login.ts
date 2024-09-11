import useUserStore from '@/store/modules/user';
import httpClient from '@/utils/httpclient';
import { RequestOptions } from '@/utils/httpclient/type';

export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginReponse = {
  userId: string;
  username: string;
  refreshToken: string;
  accessToken: string;
};

export type GetUserInfoRequest = {};

export type GetUserInfoResponse = {
  userId: string;
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

export const doLogin = async (request: LoginRequest): Promise<LoginReponse> => {
  let response = await httpClient.post<LoginRequest, LoginReponse>('/api/login', request);
  return response.data!;
};

export const doGetUserInfo = async (): Promise<GetUserInfoResponse> => {
  let response = await httpClient.get<GetUserInfoResponse>('/api/userInfo');
  return response.data!;
};

export const doLogout = async (): Promise<LogoutResponse> => {
  let response = await httpClient.get<LogoutResponse>(
    '/api/logout',
    undefined,
    {
      headers: {
        'X-Access-Token': useUserStore().getAccessToken,
        'X-Refresh-Token': useUserStore().getRefreshToken,
      },
    },
    {},
  );
  return response.data!;
};

export const doRefreshToken = (request: RefreshTokenRequest): RefreshTokenResponse => {
  httpClient.post(
    '/api/refreshToken',
    {} as RefreshTokenRequest,
    {
      headers: {
        'X-Refresh-Token': useUserStore().getRefreshToken,
      },
    },
    {
      isRefreshToken: true,
    } as RequestOptions,
  );
  return {
    accessToken: 'CC402B37-0609-8498-6E18-CE03CEB8A017',
    refreshToken: '1BBAD766-4024-5574-439B-D7EB5A9BFEE0',
  } as RefreshTokenResponse;
};
