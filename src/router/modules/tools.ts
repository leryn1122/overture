import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/tools',
    name: 'tools',
    meta: {
      title: 'Bookmark',
    },
    children: [
      {
        path: '/tools/byte-conversion',
        name: 'byte-conversion',
        component: () => import('@/views/tools/byte-conversion'),
        meta: {
          title: 'Byte Conversion',
        },
      },
      {
        path: '/tools/cron-expression',
        name: 'byte-conversion',
        component: () => import('@/views/tools/cron-expression'),
        meta: {
          title: 'Cron Expression',
        },
      },
    ],
  },
];

export default routes;
