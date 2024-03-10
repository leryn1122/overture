<script lang="ts" setup>
import { context } from '@/layout/context';
import SearchKeyItem from './SearchKeyItem.vue';

const { useDesign } = context;
const { prefixCls } = useDesign('search-footer');
</script>

<template>
  <div>
    <span>
      <SearchKeyItem :class="`${prefixCls}-item`" icon="home" />
    </span>
    <span>
      <SearchKeyItem :class="`${prefixCls}-item`" icon="ion:arrow-up-outline" />
    </span>
    <span>
      <SearchKeyItem :class="`${prefixCls}-item`" icon="home" />
    </span>
  </div>
</template>

<style lang="less"></style>
