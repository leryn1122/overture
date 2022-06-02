import { createApp } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router';
import { BASE_ROUTES } from './base';
import { ERROR_ROUTES } from './error';
import { setupRouterGuard } from './guard/index';
import projectSettings from '@/settings/projectSettings';

/**
 * 动态加载module下所有*.ts的导出的默认路由.
 */
const routeModuleList: RouteRecordRaw[] = [];
const modules = import.meta.globEager('./modules/**/*.ts');
Object.keys(modules).forEach((key) => {
  const module = modules[key].default || {};
  const moduleList = Array.isArray(module) ? [...module] : [module];
  routeModuleList.push(...moduleList);
});

const WHITE_NAME_LIST: string[] = [];
const getRouteNames = (array: RouteRecordRaw[]) => {
  array.forEach((item) => {
    if (item.name) {
      WHITE_NAME_LIST.push(item.name as string);
    }
    getRouteNames(item.children || []);
    routeModuleList.push(item);
  });
};

getRouteNames(BASE_ROUTES);
getRouteNames(ERROR_ROUTES);

const routes: Array<RouteRecordRaw> = routeModuleList;

// /**
//  * TODO: 重新挂载打vue实例上.
//  * 动态挂载路由.
//  */
// export const registerDynamicRoutes = async function(name: string) {
//   if (!name) {
//     return;
//   }
//   // 1. 首先删除已注册的404路由.
//   Router.removeRoute('404');
//   // 2.
//   let routes = await import(`@/router/${name}.ts`);
//   routes = routes.default;
//   await routes.forEach((routeRecordRaw: RouteRecordRaw) => {
//     routes.addRoute(routeRecordRaw);
//   });
//   // 3. 重新挂载404
//   Router.addRoute(PageNotFound);
// };

const createWebHistoryRouter = function (baseUrl: string) {
  if ('hash' === projectSettings.routerMode) {
    return createWebHashHistory(baseUrl);
  }
  return createWebHistory(baseUrl);
};

/**
 * 创建History模式的路由.
 */
const Router = createRouter({
  history: createWebHistoryRouter(import.meta.env.BASE_URL),
  routes: routes,
  strict: true,
  scrollBehavior: () => ({
    left: 0,
    top: 0,
  }),
});

/**
 * 将路由对象绑定到App上.
 */
export function setupRouter(app: ReturnType<typeof createApp>): ReturnType<typeof createApp> {
  setupRouterGuard(Router);
  app.use(Router);
  return app;
}

export function resetRouter(): void {
  Router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      Router.hasRoute(name) && Router.removeRoute(name);
    }
  });
}

export default Router;
