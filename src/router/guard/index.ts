import type { Router, RouteLocationNormalized } from 'vue-router';
import projectSettings from '@/settings/projectSettings';
import Messager from '@/utils/message';

export { createStateGuard } from './stateGuard';

/**
 * 修改页面加载状态控制的守卫.
 */
export function createPageGuard(router: Router): void {
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
 * HttpClient 的
 */
export function createPageLoadingGuard(router: Router): void {}

/**
 * 滚动轴守卫
 * (UI功能性*) 跳转页面后, 滚动轴归位到原点.
 */
export function createScrollGuard(router: Router): void {
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
export function createMessageGuard(router: Router): void {
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

export function createProgressGuard(router: Router): void {
  // TODO
}

export function createParamMenuGuard(router: Router): void {}

export function setRouteChange(to: RouteLocationNormalized) {
  // TODO
}
