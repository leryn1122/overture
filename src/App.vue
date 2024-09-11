<script setup lang="ts">
import { ref, unref, watch } from 'vue';
import { RouterView } from 'vue-router';
import { GlobalConfigProvider } from 'tdesign-vue-next';
import enConfig from 'tdesign-vue-next/es/locale/en_US';

import AppProvider from '@/layout/AppProvider.vue';
import Layout from '@/layout/index.vue';
import Header from '@/views/layout/header.vue';
import Aside from '@/views/layout/aside.vue';

import merge from 'lodash/merge';

let isDark = ref<boolean>(false);

watch(
  () => unref<boolean>(isDark),
  (v) => {
    document.getElementsByTagName('html')[0].className = v ? 'dark' : '';
  },
  { immediate: true },
);

const empty: GlobalConfigProvider = {};
const customConfig: GlobalConfigProvider = {};
const globalConfig: GlobalConfigProvider = merge(empty, enConfig, customConfig);
</script>

<template>
  <t-config-provider :global-config="globalConfig">
    <AppProvider>
      <Layout>
        <template #header>
          <Header />
        </template>
        <template #aside>
          <Aside />
        </template>
        <template #main>
          <RouterView />
        </template>
        <template #footer>
          <!-- <Footer /> -->
        </template>
      </Layout>
    </AppProvider>
  </t-config-provider>
</template>

<style lang="less">
@import url('@/styles/index.less');

body {
  margin: 0;
}

// .html {
//   width: 100%;
//   height: 100%;
// }

// .body {
//   width: 100%;
//   height: 100%;
// }

#nprogress .bar {
  background: var(--td-brand-color) !important;
}
</style>
