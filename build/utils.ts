import fs from 'fs';
import dotenv from 'dotenv';
import path from 'path';
import { Recordable, ViteEnv } from '../types/global';

export function isDevEnv(mode: string): boolean {
  return 'development' === mode;
}

export function isTestEnv(mode: string): boolean {
  return 'test' === mode;
}

export function isProdEnv(mode: string): boolean {
  return 'production' === mode;
}

export function wrapperEnv(envConf: Recordable<any>): ViteEnv {
  const result: any = {};

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n');
    realName = realName === 'true' ? true : realName === 'false' ? false : realName;

    if ('VITE_PORT' === envName) {
      realName = Number(realName);
    }

    if ('VITE_PROXY' === envName && realName) {
      try {
        realName = JSON.parse(realName.replace(/'/g, '"'));
      } catch (error) {
        realName = '';
      }
    }

    result[envName] = realName;
    if ('string' === typeof realName) {
      process.env[envName] = realName;
    } else if ('object' === typeof realName) {
      process.env[envName] = realName;
    }
  }
  console.log('Current environment =', result);
  return result;
}

export function getConfigFiles(): string[] {
  const script = process.env.npm_lifecycle_script;
  const reg = new RegExp('--mode ([a-z\\d]+)');
  const result = reg.exec(script as string) as any;
  if (result) {
    const mode = result[1] as string;
    return ['.env', '`.env.${mode}`'];
  }
  return ['.env', '.env.production'];
}

export function getEnvConfig(match = 'VITE_GLOB_', configFiles = getConfigFiles()) {
  let envConfig = {};
  configFiles.forEach((configFile) => {
    try {
      const env = dotenv.parse(fs.readFileSync(path.resolve(process.cwd(), configFile)));
      envConfig = { ...envConfig, ...env };
    } catch (error) {
      console.error(`Error in parsing ${configFile}`, error);
    }
  });
  const reg = new RegExp(`^(${match})`);
  Object.keys(envConfig).forEach((key) => {
    if (!reg.test(key)) {
      Reflect.deleteProperty(envConfig, key);
    }
  });
  return envConfig;
}
