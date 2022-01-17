import type { Plugin } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver, TDesignResolver } from 'unplugin-vue-components/resolvers';

export default function configViteComponents(): Plugin | Plugin[] {
  return Components({
    extensions: ['vue', 'md', 'svg'],
    directoryAsNamespace: true,
    dts: 'components.d.ts',
    globalNamespaces: ['global'],
    importPathTransform: (path) => (path.endsWith('.svg') ? `${path}?component` : undefined),
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    resolvers: [
      AntDesignVueResolver(),
      TDesignResolver(),
    ],
  }) as Plugin;
}
