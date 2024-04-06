import { viteMockServe } from 'vite-plugin-mock';
import { Plugin } from 'vite';

export function configMockPlugin(isBuild: boolean): Plugin {
  return viteMockServe({
    ignore: /^\_/,
    mockPath: 'mock',
    // localEnabled: !isBuild,
    // prodEnabled: isBuild,
    // injectCode: `
    //   import { setupProdMockServer } from '../mock/_createProductionServer';

    //   setupProdMockServer();
    //   `,
  });
}
