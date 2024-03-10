import { createApp } from 'vue';
import TDesign from 'tdesign-vue-next';
import App from './App.vue';

import { initApplication } from './init-application';

import setupRouter from '@/router';

const main = async () => {
  const app = createApp(App);

  app.use(TDesign);

  await initApplication();

  setupRouter(app);

  app.mount('#app');
};

main();
