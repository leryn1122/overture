import type { Plugin } from 'vite';
import type { ViteEnv } from '../../../types/global';
import html from 'vite-plugin-html';

import moment from 'moment';
import pkg from '../../../package.json';

export default function configHtmlPlugin(env: ViteEnv, isBuild: boolean): Plugin[] {
  const GLOB_CONFIG_FILE_NAME = '_app.config.js';
  const { VITE_GLOB_APP_TITLE, VITE_PUBLIC_PATH } = env;

  const path = VITE_PUBLIC_PATH.endsWith('/') ? VITE_PUBLIC_PATH : `${VITE_PUBLIC_PATH}/`;

  const getAppConfigSrc = () => {
    return `${path || '/'}${GLOB_CONFIG_FILE_NAME}?v=${pkg.version}-${moment().format('YYYYMMDD_HHmmss')}`;
  };

  const htmlPlugin: Plugin[] = html({
    minify: isBuild,
    inject: {
      // Inject data into ejs template
      data: {
        title: VITE_GLOB_APP_TITLE,
      },
      // Embed the generated app.config.js file
      tags: isBuild
        ? [
            {
              tag: 'script',
              attrs: {
                src: getAppConfigSrc(),
              },
            },
          ]
        : [],
    },
  });

  return htmlPlugin;
}
