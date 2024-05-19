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
      auth: [

      ],
    },
  },
  {
    path: '/appstore',
    name: 'appstore',
    component: () => import('../../components/HelloWorld.vue'),
    meta: {
      title: 'App Store',
      auth: [
      ],
    },
  },
  {
    path: '/deployment',
    name: 'deployment',
    component: () => import('../../components/HelloWorld.vue'),
    meta: {
      title: 'Deployment',
      auth: [

      ],
    },
  },
  {
    path: '/msgbox',
    name: 'message-box',
    component: () => import('../../components/HelloWorld.vue'),
    meta: {
      title: 'Mail',
      auth: [

      ],
    },
  },
  {
    path: '/usercenter',
    name: 'usercenter',
    component: () => import('../../components/HelloWorld.vue'),
    meta: {
      title: 'User Center',
      auth: [

      ],
    },
  },
];

export default routes;
