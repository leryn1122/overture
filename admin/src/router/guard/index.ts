import type { Router, RouteLocationNormalized } from 'vue-router';
import { Nullable } from 'types/global';
import { AbortedRequest } from '@leryn/httpclient';
import projectSettings from '@/settings/projectSettings';

import { createPermissionGuard } from './permissionGuard';
import {
  createPageGuard,
  createPageLoadingGuard,
  createScrollGuard,
  createMessageGuard,
  createProgressGuard,
  createParamMenuGuard,
  createStateGuard
} from '@leryn/router/guard';

/**
 * 创建导航守卫.
 * 这些方法的顺序是固定, 请不要轻易修改顺序
 * 可以在保持顺序的同时添加插入点
 */
export function setupRouterGuard(router: Router) {
  // 修改页面加载状态控制
  createPageGuard(router);

  //
  createPageLoadingGuard(router);

  // HTTP守卫types/global
  createHttpGuard(router);

  // 滚动轴守卫
  createScrollGuard(router);

  // 消息守卫
  createMessageGuard(router);

  //
  createProgressGuard(router);

  // 权限守卫
  createPermissionGuard(router);

  //
  createParamMenuGuard(router);

  //
  createStateGuard(router);
}

/**
 * HTTP守卫
 * 在跳转页面时断开所有当前页面上的HTTP请求.
 */
function createHttpGuard(router: Router): void {
  const { removeAllHttpPending } = projectSettings;
  let abortedRequest: Nullable<AbortedRequest>;
  if (removeAllHttpPending) {
    abortedRequest = new AbortedRequest();
  } else {
    return;
  }

  router.beforeEach(() => {
    abortedRequest?.clearPending();
    return true;
  });
}


function setRouteChange(to: RouteLocationNormalized) {
  // TODO
}
