import { RouteRecordRaw } from 'vue-router';

export const ROOT_ROUTE: RouteRecordRaw = {
  name: 'Root',
  path: '/',
  redirect: '/home',
};
export const HOME_ROUTE: RouteRecordRaw = {
  name: 'Home',
  path: '/home',
  component: () => import('@/views/home/Home.vue'),
};

// export const LOGIN_ROUTE: RouteRecordRaw = {
//   name: 'Login',
//   path: '/login',
//   component: () => import('@/views/login/Login.vue'),
// };

/**
 * 404页面
 */
export const PAGE_NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: '/:path(.*)*',
  redirect: '/404',
};

/**
 * redirect页面
 */
export const REDIRECT_ROUTE: RouteRecordRaw = {
  path: '/redirect',
  name: 'Redirect',
  component: () => import('@/views/redirect/Redirect.vue'),
  children: [
    {
      path: '/redirect/:path(.*)',
      component: () => import('@/views/redirect/Redirect.vue'),
    },
  ],
};

/**
 * 错误日志页面, 打印错误堆栈追踪信息的页面
 */
export const ERROR_LOG_ROUTE: RouteRecordRaw = {
  path: '/error-log',
  name: 'ErrorLog',
  component: () => import('@/views/error/ErrorLog.vue'),
};

export const BASE_ROUTES: Array<RouteRecordRaw> = [
  ROOT_ROUTE,
  // HOMEPAGE_ROUTE,
  HOME_ROUTE,
  // LOGIN_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
  REDIRECT_ROUTE,
  ERROR_LOG_ROUTE,
  {
    path: '/debug',
    name: 'Debug',
    component: () => import('@/views/debug/Debug.vue'),
  },
  // {
  //   path: '/editor',
  //   name: 'Editor',
  //   component: () => import('@/views/editor/Editor.vue'),
  // },
];

export default BASE_ROUTES;
