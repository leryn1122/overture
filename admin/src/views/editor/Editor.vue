<template>
  <Editor/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Editor } from '@leryn/components';

export default defineComponent({
  name: '403',
  components: {
    Editor,
  },
  setup() {
    let config = {};
    return {
      config,
    }
  }
});
</script>
