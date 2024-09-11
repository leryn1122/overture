<script lang="ts" setup>
import { useContext } from '@/layout/context';
import SearchKeyItem from './SearchKeyItem.vue';

const { useDesign } = useContext();
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
