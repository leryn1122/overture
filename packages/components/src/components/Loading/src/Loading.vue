<template>
  <section class="full-loading" v-show="loading">
    <!-- <Spin v-bind="$attrs" :tip="tip" :spinning="loading" /> -->
    <a-spin size="large" :loading="loading" :tip="tip" />
  </section>
</template>

<script lang="ts">
/**
 * 加载页面
 * 显示一个非常友好的转圈界面给用户
 */
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Loading',
  props: {
    loading: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    tip: {
      type: String as PropType<string>,
      default: 'Loading',
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
@import url('./index');
</style>
