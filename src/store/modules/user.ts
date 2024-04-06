import { GetUserInfoResponse, LoginRequest, doGetUserInfo, doLogin, doLogout, doRefreshToken } from '@/api/user/login';
import { Nullable } from '@/vite-env';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { usePersistState } from './persist';

interface UserState {
  userInfo: Nullable<UserInfo>;
  refreshToken?: string;
  accessToken?: string;
  roles: string[];
}

interface UserInfo {}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    userInfo: null,
    refreshToken: undefined,
    accessToken: undefined,
    roles: [],
  }),
  getters: {
    getUserInfo(): UserInfo {
      return this.userInfo || {};
    },
    getRefreshToken(): Nullable<string> {
      return this.refreshToken || usePersistState().getKey('refresh-token') || null;
    },
    getAccessToken(): Nullable<string> {
      return this.accessToken || usePersistState().getKey('access-token') || null;
    },
    getRoles(): string[] {
      return this.roles;
    },
  },
  actions: {
    setRefreshToken(token: string | undefined) {
      usePersistState().setKey('refresh-token', token);
      this.refreshToken = token;
    },
    setAccessToken(token: string | undefined) {
      usePersistState().setKey('access-token', token);
      this.accessToken = token;
    },
    setUserInfo(userInfo: UserInfo) {
      usePersistState().setKey('user-info', userInfo);
      this.userInfo = userInfo;
    },
    resetUserInfo() {
      this.userInfo = {};
      this.refreshToken = undefined;
      this.accessToken = undefined;
      this.roles = [];
    },
    async login(params: LoginRequest & Partial<{ redirect: string }>): Promise<UserInfo | null> {
      const loginReponse = await doLogin(params);
      const { id, refreshToken, accessToken } = loginReponse;

      this.setRefreshToken(refreshToken);
      this.setAccessToken(accessToken);

      const getUserInfoResponse = await doGetUserInfo({ id });

      return {};
    },
    async doRefreshToken() {
      const refreshTokenResponse = await doRefreshToken({});
      this.setAccessToken(refreshTokenResponse.accessToken);
      this.setRefreshToken(refreshTokenResponse.refreshToken);
    },
    async logout(goLogin: boolean = false) {
      await doLogout({});
      this.setRefreshToken(undefined);
      this.setAccessToken(undefined);
      goLogin && useRouter().push('/login');
    },
  },
});

export default useUserStore;
