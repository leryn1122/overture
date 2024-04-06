import { ConfigEnv, UserConfig, loadEnv } from 'vite';

import moment from 'moment';
import path from 'path';

import packageJson from './package.json';
import { createVitePlugins } from './ci/vite/plugins';
import { ViteEnv } from './src/vite-env';

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const { name, version } = packageJson;
  const __APP_INFO__ = {
    package: {
      name,
      version,
    },
    lastBuildTime: moment().format('YYYY-MM-DD HH:mm:ss'),
  };

  const CWD = process.cwd();
  const env = loadEnv(mode, CWD);
  const viteEnv = wrapperEnv(env);
  const isBuild = command === 'build';
  const { VITE_BASE_URL, VITE_PORT, VITE_PROXY } = viteEnv;

  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: true,
        },
      },
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          compact: true,
          // entryFileNames(chunkInfo) {
          //   return chunkInfo.name ? `${chunkInfo.name.toLocaleLowerCase()}.js` : '';
          // },
          // chunkFileNames: renderChunkFileNames,
          // assetFileNames: renderAssetFileNames,
        },
      },
    },

    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },

    plugins: createVitePlugins(viteEnv, isBuild),

    css: {
      modules: false,
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // modifyVars: {
          //   '@prefix': 'kreutzer',
          // },
          additionalData: `@import url('@/styles/index.less');`,
        },
      },
    },

    server: {
      host: true,
      port: VITE_PORT,
      cors: true,
      proxy: {
        // TODO: createProxy
        '/api': {
          target: 'http://localhost:8080',
          rewrite: (path) => {
            return path.replace(/^\/api/, '');
          },
        },
      },
      open: false,
    },
  };
};

export function wrapperEnv(envConf: Record<string, string>): ViteEnv {
  const result: any = {};

  for (const envName of Object.keys(envConf)) {
    let realName: string | boolean | number = envConf[envName].replace(/\\n/g, '\n');
    realName = realName === 'true' ? true : realName === 'false' ? false : realName;

    if ('VITE_PORT' === envName) {
      realName = Number(realName);
    }

    if ('VITE_PROXY' === envName && realName) {
      try {
        realName = JSON.parse((realName as string).replace(/'/g, '"'));
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
