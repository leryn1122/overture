/**
 *  Introduces component library styles on demand.
 * https://github.com/anncwb/vite-plugin-style-import
 */

import { createStyleImportPlugin } from 'vite-plugin-style-import';

export function configStyleImportPlugin(isBuild: boolean) {
  if (!isBuild) return [];
  const styleImportPlugin = createStyleImportPlugin({
    libs: [
      {
        libraryName: 'ant-design-vue',
        esModule: true,
        resolveStyle: (name: string) => {
          return `ant-design-vue/es/${name}/style/index`;
        },
      },
    ],
  });
  return styleImportPlugin;
}
