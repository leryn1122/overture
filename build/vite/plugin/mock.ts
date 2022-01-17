import type { Plugin } from 'vite';
import type { ViteEnv } from '../../../types/global';
import { viteMockServe } from 'vite-plugin-mock';

export default function configMockPlugin(viteEnv: ViteEnv, isBuild: boolean): Plugin | Plugin[] {
  const { VITE_USE_MOCK } = viteEnv;
  return viteMockServe({
    ignore: /^\_|^create/,
    mockPath: 'mock',
    localEnabled: VITE_USE_MOCK,
    prodEnabled: !isBuild,
    injectCode: `
      import setupProdMockServer from '../mock/_createProdMockServer';

      setupProdMockServer();
      `,
  });
}
