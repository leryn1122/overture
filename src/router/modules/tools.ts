import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/tools',
    name: 'tools',
    meta: {
      title: 'Bookmark'
    },
    children: [
      {
        path: '/tools/byte-conversion',
        name: 'byte-conversion',
        component: () => import('@/views/tools/byte-conversion'),
        meta: {
          title: 'Byte Conversion'
        },
      },
    ],
  },
];

export default routes;