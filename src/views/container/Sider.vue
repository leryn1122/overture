<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu mode="inline" :default-selected-keys="['1']" :default-open-keys="['sub1']" style="height: 100%">
      <a-sub-menu key="sub1">
        <a-menu-item v-for="(item, i) in submenu" :key="i">
          {{ item }}
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sider',
  props: {
    submenu: {
      type: Array,
      require: true,
    },
  },
  setup(props) {},
});
</script>

<style scoped></style>
