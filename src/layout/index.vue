<script lang="ts" setup>
import { computed, defineComponent, onBeforeMount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { LayoutType, MOBILE_DEVICE_WIDTH_THRESHOLD, getLayoutComponent } from './layout';
import Empty from './empty.vue';
import { debounce } from 'lodash';

const screenWidth = ref<number>(window.innerWidth);

const captureScreenWidth = debounce(() => {
  screenWidth.value = window.innerWidth;
  console.log(screenWidth.value);
}, 100);

onMounted(() => {
  window.addEventListener('resize', captureScreenWidth);
});

onBeforeMount(() => {
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
    let layoutType = ((width: number) => {
      return width < MOBILE_DEVICE_WIDTH_THRESHOLD ? LayoutType.ASIDE_DRAW : LayoutType.TOP_MIXED;
    })(screenWidth.value);

    layout = getLayoutComponent(layoutType);
  }
  return layout;
});
</script>

<template>
  <component :is="layout" v-bind="layout">
    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
      <slot :name="item" v-bind="data || {}" />
    </template>
  </component>
</template>
