import { ProjectSettings } from './type';

const settings: ProjectSettings = {
  /** 跳转页面时是否移除所有提示消息 */
  closeMessageOnSwitch: true,

  /** 权限存储策略: local(LocalStorage) 或 session(SessionStorage) */
  permissionCacheStrategy: 'local',

  /** 跳转页面时是否移除所有Pending的请求. */
  removeAllHttpPending: true,

  /** 路由Hash模式 */
  routerMode: 'hash',
};

export default settings;
