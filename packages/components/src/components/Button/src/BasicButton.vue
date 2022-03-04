<template>
  <AButton v-bind="getBindValue" @click="onClick">
    <template> </template>
  </AButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { computed, unref } from 'vue';
import { Button } from 'ant-design-vue';

export default defineComponent({
  name: 'Button',
  components: {},
  emits: [],
  props: {},
  setup(props, { emit, attrs }) {
    const getBindValue = computed(() => ({
      ...unref(attrs),
      ...props,
    }));

    function onClick() {}

    return {
      getBindValue,
      onClick,
    };
  },
});
</script>

<style lang="less" scoped>
@import url('./index');
</style>
