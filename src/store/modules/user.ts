import type { Nullable } from '@/types/global';
import type { UserInfo, RoleInfo } from '@/api/auth/type';

import { defineStore } from 'pinia';
import { getToken, storeToken, removeToken } from '@/utils/auth';

import { TOKEN_KEY, getAuth } from '@/utils/auth';
import Router from '@/router';
import { PageEnum } from '@/enums/pageEnum';
import { logout as doLogout } from '@/api/auth/user';
// import type { LoginParams } from '@leryn/components';
import { login as apiLogin } from '@/api/auth/user';
import type { Response } from '@/utils/httpclient/type';
import Messager from '@/utils/message';

export declare type LoginParams = {
  username: string;
  password: string;
}

interface UserState {
  userInfo: Nullable<UserInfo>;
  token?: string;
  roleInfos: RoleInfo[];
  lastLoginTime: number;
  sessionTimeout?: boolean;
}

export const UserStore = defineStore({
  id: 'UserStore',
  state: (): UserState => ({
    userInfo: null,
    token: undefined,
    roleInfos: [],
    lastLoginTime: 0,
  }),
  getters: {
    getUserInfo(): Nullable<UserInfo> {
      return this.userInfo;
    },
    getToken(): string {
      return this.token || getAuth<string>(TOKEN_KEY);
    },
    getRoleInfos(): RoleInfo[] {
      return this.roleInfos;
    },
    getLastLoginTime(): number {
      return this.lastLoginTime;
    },
  },
  actions: {
    setUserInfo(userInfo: Nullable<UserInfo>) {
      this.userInfo = userInfo;
      this.lastLoginTime = new Date().getTime();
    },
    setRoleInfos(roleInfos: RoleInfo[]) {
      this.roleInfos = roleInfos;
    },
    setToken(token: string | undefined) {
      this.token = token ? token : '';
      storeToken(token as string);
    },
    reset(): void {
      this.userInfo = null;
      this.roleInfos = [];
      this.token = '';
    },
    /**
     * 登录方法
     */
    async login(params: LoginParams): Promise<any> {
      await apiLogin(params)
        .then((response) => {
          let resolved = response as Response<UserInfo>;
          let token = resolved.data?.data?.token as string;
          if (!token) {
            Messager.error('Fail to login.');
            return;
          }
          this.setToken(token);
          Messager.success(response.data.message);
          Router.push('/');
        })
        .catch((error) => {
          Messager.success(error?.data.message);
          return Promise.reject(error);
        });
    },
    /**
     * 登录方法
     */
    async afterLogin(goHome?: boolean): Promise<null> {
      return null;
    },
    /**
     * 登出方法
     */
    async logout(goLogin: boolean = false) {
      await doLogout()
        .then((response) => {
          this.reset();
          removeToken();
          Messager.success(response.data.message);
          Router.push(goLogin ? PageEnum.LOGIN : '/');
        })
        .catch((error) => {
          Messager.success('Fail to log out.');
        });
    },
  },
});
