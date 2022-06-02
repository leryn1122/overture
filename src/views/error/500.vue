<template>
  <ErrorPage :code="500" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ErrorPage } from '@/components/ErrorPage';

export default defineComponent({
  name: '500',
  components: {
    ErrorPage,
  },
});
</script>
