import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/bookmark',
    name: 'bookmark',
    component: () => import('../../views/bookmark'),
    meta: {
      title: 'Bookmarks',
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/components/daylight-toggler-button'),
    meta: {
      title: 'Dashboard',
    },
  },
  {
    path: '/appstore',
    name: 'appstore',
    component: () => import('../../components/HelloWorld.vue'),
    meta: {
      title: 'App Store',
    },
  },
  {
    path: '/deployment',
    name: 'deployment',
    component: () => import('../../components/HelloWorld.vue'),
    meta: {
      title: 'Deployment',
    },
  },
  {
    path: '/message-box',
    name: 'message-box',
    component: () => import('../../components/HelloWorld.vue'),
    meta: {
      title: 'Mail',
    },
  },
  {
    path: '/user-center',
    name: 'user-center',
    component: () => import('../../components/HelloWorld.vue'),
    meta: {
      title: 'User Center',
    },
  },
];

export default routes;
