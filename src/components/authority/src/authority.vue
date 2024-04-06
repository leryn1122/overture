<template>
  <slot v-if="showSlot" :required="permissions" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  permission: {
    type: Array<string>,
  },
});

const permissions: string[] = [];

const showSlot = computed(() => {
  if (!props.permission) {
    return true;
  }
  if (!permissions) {
    return false;
  }
  if (Array.isArray(props.permission)) {
    return props.permission.every((p) => permissions.includes(p));
  } else {
    return permissions.includes(props.permission);
  }
});
</script>
