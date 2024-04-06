/// <reference types="vite/client" />

export declare interface ViteEnv {
  VITE_BASE_URL: string;
  VITE_GLOB_APP_TITLE: string;
  VITE_PUBLIC_PATH: string;
  VITE_PORT?: number;
  VITE_USE_MOCK?: boolean;
  VITE_PROXY?: [string, string][];
  VITE_BUILD_COMPRESS?: 'gzip' | 'brotli' | 'none';
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE?: boolean;
  VITE_USE_MICRO_APP_NAME?: string;
}

export type Recordable<T = any> = Record<string, T>;

export type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T;
};

export type Nullable<T> = T | null;
