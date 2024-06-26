import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about'),
    meta: {
      title: 'About',
      disableLayout: true,
    },
  },
];

export default routes;
