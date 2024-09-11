<template>
  <t-layout v-bind="$attrs">
    <t-header>
      <slot name="header"></slot>
    </t-header>
    <t-content style="background-color: var(--td-bg-color-container)">
      <slot name="main"></slot>
    </t-content>
  </t-layout>

  <t-drawer
    :closeBtn="true"
    :destroyOnClose="true"
    :closeOnEscKeydown="true"
    :footer="false"
    :showOverlay="false"
    placement="left"
    v-model:visible="visible"
    header="Navigation"
    size="65%"
  >
    <slot name="aside" />
  </t-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref<boolean>(false);
</script>

<style lang="less" scoped>
// .footer {
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   text-align: center;
// }
</style>
