import { createApp } from 'vue';

let app: ReturnType<typeof createApp>;

// Getters & Setters.

export function getApp(): ReturnType<typeof createApp> {
  return app;
}

export function setApp(_app: ReturnType<typeof createApp>): void {
  app = _app;
}

// Initialize project configuration.
export function initAppConfigStore(): void {}

export function getConfigProvider() {}

export function bootstrap() {
  // return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  return function () {
    console.log('descriptor.value');
  };
}
