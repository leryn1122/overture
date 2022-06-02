import { createApp } from 'vue';
import { createPinia } from 'pinia';

const store = createPinia();

export function setupStorage(app: ReturnType<typeof createApp>): ReturnType<typeof createApp> {
  app.use(store);
  return app;
}

export { store };
