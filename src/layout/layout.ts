import { defineComponent } from 'vue';
import AsideDrawerLayout from './aside-drawer-layout.vue';
import TopMixedLayout from './top-mixed-layout.vue';

export enum LayoutType {
  ASIDE_DRAW = 'aside-draw',
  TOP_MIXED = 'top-menu-mixed',
}

export function getLayoutComponent(layoutType: LayoutType): ReturnType<typeof defineComponent> {
  switch (layoutType) {
    case LayoutType.TOP_MIXED:
      return TopMixedLayout;
    case LayoutType.ASIDE_DRAW:
      return AsideDrawerLayout;
  }
}

// Threshold width for those mobile devices.
export const MOBILE_DEVICE_WIDTH_THRESHOLD = 768;
