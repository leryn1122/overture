<template>
  <div>
    <img src="https://s3-adm.leryn.top/website/logo/logo.svg" alt="图片无法显示" />
    <div class="">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import projectSettings from '@/settings/projectSettings';

export default defineComponent({
  name: 'ApplicationLogo',
  props: {
    theme: {
      type: String,
      default: 'dark',
      validator: (v: string) => ['dark', 'light'].includes(v),
    },
    showTitle: {
      type: Boolean,
      default: true,
    },
    alwaysShowTitle: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const title = projectSettings.applicationTitle;

    return {
      title,
    };
  },
});
</script>

<style lang="scss" scoped>
@import url('./index');
</style>
