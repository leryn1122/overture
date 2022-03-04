<template>
  <a-avatar size="large">
    <template #icon><UserOutlined /></template>
  </a-avatar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseAvatar',
  components: {},
  emits: [],
  setup(props) {
    return {};
  },
});
</script>

<style lang="less" scoped>
@import url('./index');
</style>
