<script setup lang="ts">
import { ref, unref, watch } from 'vue';
import { RouterView } from 'vue-router';
import { ConfigProvider } from 'tdesign-vue-next';

import AppProvider from '@/layout/AppProvider.vue';
import Layout from '@/layout/index.vue';

import Header from '@/views/layout/header.vue';
import Aside from '@/views/layout/aside.vue';
import Footer from '@/views/layout/footer.vue';

let isDark = ref<boolean>(false);

watch(
  () => unref<boolean>(isDark),
  (v) => {
    document.getElementsByTagName('html')[0].className = v ? 'dark' : '';
  },
  { immediate: true },
);
</script>

<template>
  <ConfigProvider>
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
          <Footer />
        </template>
      </Layout>
    </AppProvider>
  </ConfigProvider>
</template>

<style lang="less">
@import url('@/styles/index.less');

.html {
  width: 100%;
  height: 100%;
}

.body {
  width: 100%;
  height: 100%;
}

#nprogress .bar {
  background: var(--td-brand-color) !important;
}
</style>
./views/layout/footer.vue
