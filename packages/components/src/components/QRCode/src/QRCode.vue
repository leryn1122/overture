<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { QRCodeRenderersOptions } from './qrcode';

export default defineComponent({
  name: 'QRCode',
  components: {},
  emits: [],
  props: {
    url: {
      type: Object as PropType<String>,
      required: true,
      default: null,
    },
    options: {
      type: Object as PropType<QRCodeRenderersOptions>,
      default: null,
    },
  },
  setup(props) {
    const visible = true;

    return {
      visible,
    };
  },
});
</script>

<style lang="less" scoped>
@import url('./index');
</style>
