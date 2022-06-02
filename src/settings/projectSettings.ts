export declare type ProjectSettings = Partial<{
  /** App名称 */
  applicationTitle: string;

  /** 跳转页面时是否移除所有提示消息 */
  closeMessageOnSwitch: boolean;

  /**
   * 权限存储策略:
   *   - local(LocalStorage)
   *   - session(SessionStorage)
   *   - rxdb(Rxdb) 将来会推出
   */
  permissionCacheStrategy: 'local' | 'session' | 'rxdb';

  /** 跳转页面时是否移除所有Pending的请求. */
  removeAllHttpPending: boolean;

  /** 路由Hash模式 */
  routerMode: 'history' | 'hash';
}>

const settings: ProjectSettings = {
  applicationTitle: 'Logo',
  closeMessageOnSwitch: true,
  permissionCacheStrategy: 'local',
  removeAllHttpPending: true,
  routerMode: 'hash',
};

export default settings;
