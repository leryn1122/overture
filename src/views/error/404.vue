<template>
  <ErrorPage :code="404" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ErrorPage } from '@/components/ErrorPage';

export default defineComponent({
  name: '404',
  components: {
    ErrorPage,
  },
});
</script>
