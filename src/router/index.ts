import { createApp } from 'vue';
import { RouteRecordRaw, Router, createRouter, createWebHistory } from 'vue-router';
import { setupNavigationGuardChain } from './guard';

export const convertModuleIntoRouterList = (modules: Record<string, unknown>) => {
  const routerList: Array<RouteRecordRaw> = [];
  Object.keys(modules).forEach((key) => {
    // @ts-ignore
    const mod = modules[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    routerList.push(...modList);
  });
  return routerList;
};

export const allRoutes = (() => {
  const homepages = import.meta.glob('./modules/homepage.ts', { eager: true });

  const bizPages = import.meta.glob('./modules/!(homepage).ts', { eager: true });

  const defaultPages: Array<RouteRecordRaw> = [];

  return [...convertModuleIntoRouterList(homepages), ...convertModuleIntoRouterList(bizPages), ...defaultPages];
})();

export function createAppRouter(path: string, routes: Array<RouteRecordRaw>): Router {
  return createRouter({
    history: createWebHistory(path),
    routes: routes,
    // strict: true,
    scrollBehavior: () => ({ left: 0, top: 0, el: '#app', behavior: 'smooth' }),
  });
}

export function registerApplicationRoutes(router: Router) {
  allRoutes.forEach((r) => {
    router.addRoute(r.name!, r);
  });
}

const routes = createAppRouter(import.meta.env.VITE_PUBLIC_PATH, allRoutes);

export function setupRouter(app: ReturnType<typeof createApp>): ReturnType<typeof createApp> {
  setupNavigationGuardChain().register(routes);

  app.use(routes);
  return app;
}

export default setupRouter;
