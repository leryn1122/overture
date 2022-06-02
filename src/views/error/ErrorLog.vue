<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ErrorLog',
  props: {
    error: {
      type: Object as PropType<Error>,
    },
  },
  setup(props) {
    console.error(props.error);
    let error = props.error;

    return {
      error: error,
    };
  },
});
</script>
