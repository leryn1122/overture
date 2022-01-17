import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';

/**
 * 添加Web Component支持
 */
export default function configViteComponents(): Plugin {
  return vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-'),
      },
    },
  });
}
