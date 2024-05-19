import { createApp } from 'vue';
import useUserStore from '@/store/modules/user';

export function addAuthenticationDirective(app: ReturnType<typeof createApp>) {
  app.directive('auth', {
    mounted: (el, binding) => {
      const requiredRoles: string[] = 
        binding.value ? binding.value.split(',') : [];
      if (!hasRoles(useUserStore().getRoles, requiredRoles)) {
        (el as HTMLElement).parentNode?.removeChild(el);
      }
    }
  });
}

function hasRoles(ownRoles: string[], requiredRoles: string[]): boolean {
  const roles = new Set(ownRoles);
  for (let requiredRole of requiredRoles) {
    if (roles.has(requiredRole)) {
      return true;
    }
  }
  return false;
}