<template>
  <slot v-if="showSlot" :required="permissions"></slot>
</template>

<script lang="ts" name="my-authority" setup>
import { computed } from 'vue';
import { Permission } from './type';

const props = defineProps({
  permission: {
    type: Array<Permission>,
  },
});

const permissions: Permission[] = [];

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
