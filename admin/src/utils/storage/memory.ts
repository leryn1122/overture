const NOT_ALIVE = 0;

/**
 * Memory内部接口
 */
interface Cache<V = any> {
  value?: V;
  timeout?: ReturnType<typeof setTimeout>;
  /** 单位: 秒 */
  time?: number;
  alive?: boolean;
}

class Memory<K = any, V = any> {
  private cache: { [key in keyof K]?: Cache<V> } = {};
  private alive: number;

  constructor(alive = NOT_ALIVE) {
    this.alive = alive;
  }

  get getCache() {
    return this.cache;
  }

  setCache(cache: any) {
    this.cache = cache;
  }
}
