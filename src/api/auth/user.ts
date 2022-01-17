import http from '@/utils/http';
import type { LoginParams } from './type';

/**
 * API的URL
 */
enum API {
  REGISTER = '/v1/register.do',
  LOGIN = '/v1/login.do',
  LOGOUT = '/v1/logout.do',
  USER_INFO = '/v1/userInfo.do',
  PERM_CODE = '/v1/getPermCode.do',
}

/**
 * 注册接口
 */
export function register() {
  http.put(API.REGISTER);
}

/**
 * 登录接口
 */
export function login(params: LoginParams) {
  return http.post(API.LOGIN, params);
}

/**
 * 登出接口
 */
export function logout() {
  return http.get(API.LOGOUT);
}

/**
 * 获取当前用户信息
 */
export function getUserInfo() {
  http.get(API.USER_INFO);
}

/**
 * 获取授权码
 */
export function getPermissionCode() {
  http.get(API.PERM_CODE);
}
