import type { Plugin } from 'vite';
import type { ViteEnv } from '../../../types/global';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';

import configCompressPlugin from './compression';
import configHtmlPlugin from './html';
import configMockPlugin from './mock';
import configStyleImportPlugin from './styleImport';
import configThemePlugin from './theme';
import configViteComponents from './components';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean): (Plugin | Plugin[])[] {
  const { VITE_USE_MOCK, VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv;

  const vitePlugins: (Plugin | Plugin[])[] = [vue(), vueJsx(), vueSetupExtend()];

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));

  // vite-plugin-mock
  vitePlugins.push(configMockPlugin(viteEnv, isBuild));

  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin(viteEnv, isBuild));

  // vite-plugin-theme
  vitePlugins.push(configThemePlugin(isBuild));

  // unplugin-vue-components
  vitePlugins.push(configViteComponents());

  if (isBuild) {
    // rollup-plugin-gzip
    // vite-plugin-compression
    vitePlugins.push(configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE));
  }

  return vitePlugins;
}
