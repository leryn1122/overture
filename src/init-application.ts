import { ContextOptions, prepareContext } from '@/layout/context';
import { getMenus } from '@/layout/impl';

export async function initApplication() {
  // TODO..

  function createContext(): ContextOptions {
    return {
      useDesign: (_scope: string) => {
        return '';
      },
      getMenus: getMenus,
    };
  }

  await prepareContext(createContext);
}
