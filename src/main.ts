import { createApp } from 'vue';
import TDesign from 'tdesign-vue-next';
import App from './App.vue';

import { initApplication } from './init-application';

import setupRouter from '@/router';
import setupStore from '@/store';
import addAuthenticationDirective from './directive';

if (import.meta.env.DEV) {
  import('tdesign-vue-next/dist/tdesign.css');
}

(async () => {
  const app = createApp(App);

  app.use(TDesign);

  await initApplication();

  setupRouter(app);

  setupStore(app);

  addAuthenticationDirective(app);

  app.mount('#app');
})();
