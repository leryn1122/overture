<script lang="ts" setup>
import { computed, defineComponent, onBeforeMount, onMounted, ref } from 'vue';
import { LayoutType, MOBILE_DEVICE_WIDTH_THRESHOLD } from './layout';

import AsideDrawerLayout from './aside-drawer-layout.vue';
import TopMixedLayout from './top-mixed-layout.vue';

const screenWidth = ref<number>(window.innerWidth);

const captureScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', captureScreenWidth);
});

onBeforeMount(() => {
  window.removeEventListener('resize', captureScreenWidth);
});

// Determine whether it is PC or mobile device depending on the window screen width.
const layout = computed<ReturnType<typeof defineComponent>>(() => {
  let layoutType = ((width: number) => {
    return width < MOBILE_DEVICE_WIDTH_THRESHOLD ? LayoutType.ASIDE_DRAW : LayoutType.TOP_MIXED;
  })(screenWidth.value);

  switch (layoutType) {
    case LayoutType.TOP_MIXED:
      return TopMixedLayout;
    case LayoutType.ASIDE_DRAW:
      return AsideDrawerLayout;
  }
});
</script>

<template>
  <component :is="layout" v-bind="layout">
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}" />
    </template>
  </component>
</template>
