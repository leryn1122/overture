import { loadEnv } from 'vite';
import { ConfigEnv, UserConfig } from 'vite';
import * as path from 'path';
import pkg from './package.json';

import { OUTPUT_DIR } from '../build/constant';
import { wrapperEnv } from '../build/utils';
import { createProxy } from '../build/vite/proxy';
import { createVitePlugins } from '../build/vite/plugin';
import { generateModifyVars } from '../build/generate/generateModifyVars';

import moment from 'moment';

const { name, version, dependencies, devDependencies } = pkg;
const __APP_INFO__ = {
  package: { dependencies, devDependencies, name, version },
  lastBuildTime: moment().format('YYYY-MM-DD HH:mm:ss'),
};

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  const env = loadEnv(mode, root);

  const viteEnv = wrapperEnv(env);
  const { VITE_PORT, VITE_PROXY } = viteEnv;

  const isBuild = 'build' === command;

  return {
    root,
    plugins: createVitePlugins(viteEnv, isBuild),
    server: {
      host: true,
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY),
      open: false,
    },
    resolve: {
      alias: {
        // @/xxxx => src/xxxx
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      modules: false,
      preprocessorOptions: {
        less: {
          modifyVars: generateModifyVars(),
          javascriptEnabled: true,
        },
        // scss: {
        //   modifyVars: generateModifyVars(),
        //   javascriptEnabled: true,
        //   // additionalData: '@import "@/assets/scss/globalVariable.scss";',
        // }
      },
    },
    build: {
      target: 'es2015',
      outDir: OUTPUT_DIR,
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
      include: [
        '@vue/runtime-core',
        'ant-design-vue'
      ],
    },
  };
};
