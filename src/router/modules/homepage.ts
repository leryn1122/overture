import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/about',
    name: 'about',
    component: () => import('../../components/HelloWorld.vue'),
    meta: {
      title: 'About'
    },
    children: [],
  },
];

export default routes;