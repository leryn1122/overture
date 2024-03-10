import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/bookmark',
    name: 'bookmark',
    component: () => import('../../views/bookmark'),
    meta: {
      title: 'Bookmark'
    },
    children: [],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../../components/HelloWorld.vue'),
    meta: {
      title: 'Dashboard'
    },
    children: [],
  },
  {
    path: '/appstore',
    name: 'appstore',
    component: () => import('../../components/HelloWorld.vue'),
    meta: {
      title: 'App Store'
    },
    children: [],
  },
  {
    path: '/deployment',
    name: 'deployment',
    component: () => import('../../components/HelloWorld.vue'),
    meta: {
      title: 'Deployment'
    },
    children: [],
  },
    {
    path: '/message-box',
    name: 'message-box',
    component: () => import('../../components/HelloWorld.vue'),
    meta: {
      title: 'Mail'
    },
    children: [],
  },
  {
    path: '/user-center',
    name: 'user-center',
    component: () => import('../../components/HelloWorld.vue'),
    meta: {
      title: 'User Center'
    },
    children: [],
  },
];

export default routes;