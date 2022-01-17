import type { Router, RouteLocationNormalized } from 'vue-router';
import { Nullable } from 'types/global';
import { AbortedRequest } from '@/utils/http/abortedRequest';
import projectSettings from '@/settings/projectSettings';
import Messager from '@/utils/message';

import { createPermissionGuard } from './permissionGuard';
import { createStateGuard } from './stateGuard';

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
 * 修改页面加载状态控制的守卫.
 */
function createPageGuard(router: Router): void {
  const loadedPageMap = new Map<string, boolean>();

  router.beforeEach(async (to) => {
    to.meta.loaded = !!loadedPageMap.get(to.path);
    setRouteChange(to);
    return true;
  });

  router.afterEach((to) => {
    loadedPageMap.set(to.path, true);
  });
}

/**
 * 修改页面加载状态控制的守卫.
 * Axios的
 */
function createPageLoadingGuard(router: Router): void {}

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

/**
 * 滚动轴守卫
 * (UI功能性*) 跳转页面后, 滚动轴归位到原点.
 */
function createScrollGuard(router: Router): void {
  const isHash = (href: string) => {
    return /^#/.test(href);
  };

  const body = document.body;
  router.afterEach(async (to) => {
    isHash((to as RouteLocationNormalized & { href: string })?.href) && body.scroll(0, 0);
    return true;
  });
}

/**
 * 消息守卫
 * (UI功能性*) 跳转页面前, 清空页面上的消息框.
 */
function createMessageGuard(router: Router): void {
  const { closeMessageOnSwitch } = projectSettings;

  router.beforeEach(async () => {
    try {
      if (closeMessageOnSwitch) {
        // TODO
      }
    } catch (error) {
      Messager.warn('Message guard error:' + error);
    }
    return true;
  });
}

function createProgressGuard(router: Router): void {
  // TODO
}

function createParamMenuGuard(router: Router): void {}

function setRouteChange(to: RouteLocationNormalized) {
  // TODO
}
