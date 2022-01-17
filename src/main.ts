import { createApp } from 'vue';
import App from '@/App.vue';

import { registerGlobalComponent } from '@/components/index';
import { AppConfig } from '@/config/app';
import { setupI18n } from '@/locales';
import { setupRouter } from '@/router';
import { setupStorage } from '@/store';
import { printBanner } from '@/utils/banner';

async function run() {
  const app: ReturnType<typeof createApp> = createApp(App);

  // 开发使用全局加载的方式引入antd.less
  // 减少开发时的HTTP请求
  if (import.meta.env.DEV) {
    import('ant-design-vue/dist/antd.less');
  }

  registerGlobalComponent(app);

  // Internationalization.
  await setupI18n(app);

  // Router.
  setupRouter(app);

  // Storage.
  setupStorage(app);

  app.mount('#app');

  // printBanner();
}

run();
