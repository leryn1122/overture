<template>
  <t-layout>
    <t-header>
      <slot name="header"> </slot>
    </t-header>
    <t-content style="background-color: var(--td-bg-color-container);">
      <slot name="main">
        <div>To be mounted!!</div>
      </slot>
    </t-content>
  </t-layout>

  <t-drawer
    closeBtn
    destroyOnClose
    closeOnEscKeydown
    :footer="false"
    showOverlay
    placement="left"
    v-model:visible="visible"
    header="Navigation"
    size="65%"
  >
    <slot name="aside"></slot>
  </t-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref<boolean>(true);
</script>

<style lang="less" scoped>
// .footer {
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   text-align: center;
// }
</style>
