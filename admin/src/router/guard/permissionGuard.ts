import { Router } from 'vue-router';

let isAuthenticated = true;

/**
 * 权限守卫
 */
export function createPermissionGuard(router: Router): void {
  router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !isAuthenticated) {
      next({ name: 'Login' });
    } else {
      next();
    }
  });
}
