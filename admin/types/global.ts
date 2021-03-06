import { RouteLocationNormalizedLoaded, Router } from 'vue-router';
import type { Observable } from 'rxjs';

/** 将第三方变量挂载到每一个 vue 示例中  */
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $route: RouteLocationNormalizedLoaded;
    $router: Router;
  }
}

// declare module '*.tsx';

export declare type Nullable<T> = T | null;

export declare type Dictionary<T> = Record<string, T>;

export declare type Recordable<T = any> = Record<string, T>;

export declare type Named = {
  name: string;
};

export declare interface Func<T = any, R = T> {
  (...arg: T[]): R;
}

export declare interface PromiseFn<T = any, R = T> {
  (...arg: T[]): Promise<R>;
}

export declare interface ObservableFn<T = any, R = T> {
  (...arg: T[]): Observable<R>;
}

export declare interface ViteEnv {
  VITE_GLOB_APP_TITLE: string;
  VITE_PUBLIC_PATH: string;
  VITE_PORT?: number;
  VITE_USE_MOCK?: boolean;
  VITE_PROXY?: [string, string][];
  VITE_BUILD_COMPRESS?: 'gzip' | 'brotli' | 'none';
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE?: boolean;
  VITE_DOCKER_HOST?: string;
}
