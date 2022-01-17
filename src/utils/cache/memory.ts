import type { Cache } from './type';

export class Memory<K = any, V = any> {
  private cache: { [key in keyof K]?: Cache<V> } = {};

  constructor() {}

  get getCache() {
    return this.cache;
  }

  setCache() {}
}
