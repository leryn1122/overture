import { createApp } from 'vue';

/**
 * 自动将 @/components/global 下的组件注册成为全局组件
 */
export function registerGlobalComponent(app: ReturnType<typeof createApp>): void {
  // const files = require.context('./global', true, /\.(vue|ts)$/)
  // files.keys().forEach((key) => {
  //   const config = files(key);
  //   const name = kebabCase(key.replace(/^\.\//, '').replace(/\.\w+$/, ''));
  //   app.component(name, config.default || config);
  // })
}
