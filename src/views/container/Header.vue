<template>
  <a-layout>
    <a-layout-content>
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
        assign="center"
      >
        <a-menu-item v-for="(catalog, i) in menu" @click="forwardSubCatalog(i)" :key="i">
          {{ catalog }}
        </a-menu-item>
      </a-menu>
    </a-layout-content>
    <a-layout-sider> </a-layout-sider>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
  name: 'Header',
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    function fetchCatalog(): void {}

    /**
     * 跳转到subcatalog
     */
    function forwardSubCatalog(index: number): void {
    }

    return {
      fetchCatalog,
      forwardSubCatalog,
    };
  },
});
</script>

<style scoped>
#components-layout-demo-top-side .logo {
  alignment: center;
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
