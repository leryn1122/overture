import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: {
      title: 'Login',
      disableLayout: true,
    },
  },
];

export default routes;
