<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png" />-->
  <!--  <Home msg="Hello Vue 3 + TypeScript + Vite" />-->
  <ConfigProvider>
    <router-view />
  </ConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ConfigProvider } from 'ant-design-vue';

export default defineComponent({
  name: 'App',
  components: {
    ConfigProvider,
  },
  setup() {
    // Initialize vuex internal system configuration.
    //initAppConfigStore();
    // Create a global breakpoint monitor.
    // createBreakpointListen();
  },
});
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
