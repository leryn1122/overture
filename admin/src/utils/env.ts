/** @format */

import { GlobalEnvConfig } from '@/types/config';

export const getGlobalEnvConfig = (): GlobalEnvConfig => {
  const env = import.meta.env;
  return env as unknown as GlobalEnvConfig;
};

export const devMode: string = 'development';
export const prodMode: string = 'production';

export const getEnv = (): string => import.meta.env.MODE;
