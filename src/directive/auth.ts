import { createApp } from 'vue';
import useUserStore from '@/store/modules/user';

export function addAuthenticationDirective(app: ReturnType<typeof createApp>) {
  app.directive('auth', {
    mounted: (el, binding) => {
      const requiredRoles: string[] = binding.value ? binding.value.split(',') : [];
      if (!hasRoles(useUserStore().getRoles, requiredRoles)) {
        (el as HTMLElement).parentNode?.removeChild(el);
      }
    },
  });
}

function hasRoles(owns: string[], requires: string[]): boolean {
  const own = new Set(owns);
  for (const require of requires) {
    if (own.has(require)) {
      return true;
    }
  }
  return false;
}
