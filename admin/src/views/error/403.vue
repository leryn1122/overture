<template>
  <ErrorPage :code="403" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ErrorPage } from '@leryn/components';

export default defineComponent({
  name: '403',
  components: {
    ErrorPage,
  },
});
</script>
