<script lang="ts" setup>
import { computed, defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { LayoutType, MOBILE_DEVICE_WIDTH_THRESHOLD, getLayoutComponent } from './layout';
import Empty from './empty.vue';
import { debounce } from 'lodash';

const screenWidth = ref<number>(window.innerWidth);

const captureScreenWidth = debounce(() => {
  screenWidth.value = window.innerWidth;
}, 100);

onMounted(() => {
  window.addEventListener('resize', captureScreenWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', captureScreenWidth);
});

const router = useRouter();
function disableLayout(): boolean {
  return router.currentRoute.value.meta.disableLayout as boolean;
}

// Determine whether it is PC or mobile device depending on the window screen width.
const layout = computed<ReturnType<typeof defineComponent>>(() => {
  let layout: ReturnType<typeof defineComponent> = Empty;

  if (!disableLayout()) {
    const layoutType = ((width: number) => {
      return width < MOBILE_DEVICE_WIDTH_THRESHOLD ? LayoutType.ASIDE_DRAW : LayoutType.TOP_MIXED;
      // return window.matchMedia('(max-width: 768px)').matches ? LayoutType.ASIDE_DRAW : LayoutType.TOP_MIXED;
    })(screenWidth.value);

    layout = getLayoutComponent(layoutType);
  }
  return layout;
});
</script>

<template>
  <component :is="layout" v-bind="layout">
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </component>
</template>
