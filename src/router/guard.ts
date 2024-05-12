import { MessagePlugin } from 'tdesign-vue-next';
import { RouteLocationNormalized, Router } from 'vue-router';

export interface RecordableNavigationGuard {
  readonly id: string | Symbol;
  guardWith(route: Router): void;
}

export class NavigationGuardChain {
  private guards: Array<RecordableNavigationGuard> = [];

  constructor() {}

  addGuard(guard: RecordableNavigationGuard): NavigationGuardChain {
    this.guards.push(guard);
    return this;
  }

  register(router: Router) {
    this.guards.forEach((g) => {
      g.guardWith(router);
    });
  }
}

/// The order of router guards is of great significance.
export function setupNavigationGuardChain(): NavigationGuardChain {
  return new NavigationGuardChain()
    .addGuard(createAuthGuard())
    .addGuard(createBasicGuard())
    .addGuard(createPageGuard())
    .addGuard(createPageLoadingGuard())
    .addGuard(createHttpGuard())
    .addGuard(createScrollGuard())
    .addGuard(createMessageGuard())
    .addGuard(createProgressGuard())
    .addGuard(createPermissionGuard())
    .addGuard(createParamMenuGuard())
    .addGuard(createStateGuard())
}

function createAuthGuard(): RecordableNavigationGuard {
  return {
    id: 'AuthGuard',
    guardWith(router) {
      router.beforeEach((to, from) => {
        if (!router.hasRoute(to.path)) {
          // router.push("/404");
          console.log("path", to.path);
          console.log('/404');
        }

        if (to.meta.auth) {
          if (localStorage.getItem('access-token') != null) {
            
          } else {
            router.push('/login?redirect=' + to.path);
            return false;
          }
        }
        return true;
      })
    }
  }
}

function createBasicGuard(): RecordableNavigationGuard {
  return {
    id: 'BasicGuard',
    guardWith(router) {
      router.beforeEach((to) => {
        if (to.meta.title) {
          document.title = (to.meta.title as string) + ' | Overture';
        }
        return true;
      });
    },
  };
}

function createPageGuard(): RecordableNavigationGuard {
  return {
    id: 'PageGuard',
    guardWith(router) {
      const loadedPageMap = new Map<string, boolean>();
      router.beforeEach(async (to) => {
        to.meta.loaded = !!loadedPageMap.get(to.path);
        setRouteChange(to);
        return true;
      });

      router.afterEach((to) => {
        loadedPageMap.set(to.path, true);
      });
    },
  };
}

//
function createPageLoadingGuard(): RecordableNavigationGuard {
  return {
    id: 'PageLoadingGuard',
    guardWith(_router) {},
  };
}

//
function createHttpGuard(): RecordableNavigationGuard {
  return {
    id: 'HttpGuard',
    guardWith(_router) {},
  };
}

//
function createScrollGuard(): RecordableNavigationGuard {
  return {
    id: 'ScrollGuard',
    guardWith(router) {
      const isHash = (href: string) => {
        return /^#/.test(href);
      };

      const body = document.body;
      router.afterEach(async (to) => {
        isHash((to as RouteLocationNormalized & { href: string })?.href) && body.scroll(0, 0);
        return true;
      });
    },
  };
}

//
function createMessageGuard(): RecordableNavigationGuard {
  return {
    id: 'MessageGuard',
    guardWith(router) {
      router.beforeEach((_to) => {
        MessagePlugin.closeAll();
        return true;
      });
    },
  };
}

//
function createProgressGuard(): RecordableNavigationGuard {
  return {
    id: '',
    guardWith(_router) {},
  };
}

//
function createPermissionGuard(): RecordableNavigationGuard {
  return {
    id: '',
    guardWith(_router) {},
  };
}
//
function createParamMenuGuard(): RecordableNavigationGuard {
  return {
    id: '',
    guardWith(_router) {},
  };
}

//
function createStateGuard(): RecordableNavigationGuard {
  return {
    id: '',
    guardWith(_router) {},
  };
}

function setRouteChange(_to: RouteLocationNormalized) {
  // throw new Error('Function not implemented.');
}
