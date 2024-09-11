import { Menu } from './type';

type AnyFunction<T> = (...args: any[]) => T;

export interface ContextOptions {
  useDesign: (scope: string) => any;
  // useUserStore: () => Promise<any>;
  getMenus: () => Promise<Menu[]> | Menu[];
}

let context: ContextOptions;

export async function prepareContext(functor: AnyFunction<any>) {
  context = functor();
}

export function useContext(): ContextOptions {
  return context;
}
