<script lang="ts" setup>
import SearchFooter from './SearchFooter.vue';

import { context } from '@/layout/context';

const { useDesign } = context;
const { prefixCls } = useDesign('search-modal');

defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <Teleport to="body">
    <Transition mode="out-in">
      <div @click.stop v-if="visible">
        <div :class="`${prefixCls}-search-modal`">
          <t-input placeholder="Search something..." clearable />
          <div></div>
          <ul>
            <li></li>
          </ul>
          <SearchFooter />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="less"></style>
