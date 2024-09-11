import { RouteRecordRaw } from 'vue-router';
import { Menu } from './type';
import { allRouteRecords } from '@/router';

export function getMenus(): Menu[] {
  return preprocessRouteRecords(allRouteRecords).map(convertRouteRecordToMenu);
}

function convertRouteRecordToMenu(record: RouteRecordRaw): Menu {
  const menu: Menu = {
    key: record.name as string,
    name: record.meta?.title as string,
    path: record.path,
    icon: record.meta?.icon as string,
  };

  if (record.children) {
    menu.children = record.children.map(convertRouteRecordToMenu);
  }
  return menu;
}

function preprocessRouteRecords(records: RouteRecordRaw[]): RouteRecordRaw[] {
  return records
    .filter((r) => {
      return !r.meta?.hiddenMenu;
    })
    .sort((left, right) => {
      const l = (left.meta?.order as number) || Infinity;
      const r = (right.meta?.order as number) || Infinity;
      return l - r;
    });
}
