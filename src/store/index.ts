import { createApp } from 'vue';
import { createPinia } from 'pinia';

export function setupStore(app: ReturnType<typeof createApp>): ReturnType<typeof createApp> {
  const store = createPinia();

  app.use(store);
  return app;
}

export default setupStore;
