<template>
  <t-space direction="vertical">
    <t-space direction="horizontal" justify="space-between" align="center" :separator="separator">
      <t-space size="medium" justify="space-between" align="center">
        <Logo />
      </t-space>
      <div class="pl-8px pr-8px">
        <slot name="buttons">
          <t-space size="medium" justify="space-between" align="center">
            <Search />
            <Nofication />
            <User />
            <Settings />
          </t-space>
        </slot>
      </div>
    </t-space>
  </t-space>
</template>

<script lang="tsx" setup>
import { SpaceProps } from 'tdesign-vue-next';
import divider from 'tdesign-vue-next/es/divider';

import Logo from './components/logo/index.vue';
import Nofication from './components/notification/index.vue';
import Search from './components/search/Search.vue';
import Settings from './components/settings/index.vue';
import User from './components/users/index.vue';

const separator: SpaceProps['separator'] = () => {
  return <t-divider layout="vertical" />
};

</script>

<style lang="less"></style>
