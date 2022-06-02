import { ConfigEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import pkg from './package.json';

import * as path from 'path';
import moment from 'moment';

const { name, version, dependencies, devDependencies } = pkg;
const __APP_INFO__ = {
  package: { dependencies, devDependencies, name, version },
  lastBuildTime: moment().format('YYYY-MM-DD HH:mm:ss'),
};

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    },
    build: {
      target: 'es2015',
      outDir: 'dist',
      minify: true,
      manifest: true,
      sourcemap: false,
      terserOptions: {
        compress: {
          keep_infinity: true,
        },
      },
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000,
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    optimizeDeps: {
      include: ['@vue/runtime-core', 'tdesign-vue'],
    },
  }
};
