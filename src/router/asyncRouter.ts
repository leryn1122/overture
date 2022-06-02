import { RouteRecordRaw } from 'vue-router';
import type { AppRouteRecordRaw } from './type';

/**
 * 异步按需加载路由
 */

const RouterMap = new Map<string, () => Promise<typeof import('*.vue')>>();

function asyncImportRoute(routes: AppRouteRecordRaw[] | undefined) {}
