<template>
  <t-space direction="vertical">
    <!-- <t-space direction="horizontal" justify="space-between" align="center" style="display: flex; justify-content: end">
      <t-space class="letft-contaniner" size="medium" justify="space-between" align="center">
        <Logo />
      </t-space>
      <t-space size="medium" justify="space-between" align="center">
        <div class="right-container">
          <slot name="buttons">
            <t-space size="medium" justify="space-between" align="center">
              <Search />
              <User />
              <Settings />
            </t-space>
          </slot>
        </div>
      </t-space>
    </t-space> -->
  </t-space>
</template>

<script lang="tsx" setup>
// import { SpaceProps } from 'tdesign-vue-next';
// import Logo from './components/logo/index.vue';
// import Search from './components/search/Search.vue';
// import Settings from './components/settings/index.vue';
// import User from './components/users/index.vue';

// const separator: SpaceProps['separator'] = () => {
//   return `<t-divider layout="vertical" />`;
// };
</script>

<style lang="less" scoped>
.left-container {
  justify-items: left;
}

.right-container {
  justify-items: right;
}
</style>
