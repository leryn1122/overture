import { createApp } from 'vue';
import App from './App.vue';

import type { Component } from '@/types/vue';
import { setupRouter } from '@/router';
import { setupStorage } from '@/store';

async function run() {
  const app: Component = createApp(App);

  if (import.meta.env.DEV) {
    import('tdesign-vue-next/es/style/index.css');
  }

  setupRouter(app);

  setupStorage(app);

  app.mount('#app');
}

run();