<script lang="ts" setup>
import { ref } from 'vue';

const options = ref([
  {
    content: 'Profile',
    value: 1,
  },
  {
    content: 'Logout',
    value: 2,
  },
]);
</script>

<template>
  <t-dropdown :options="options" :hideAfterItemClick="true">
    <t-icon name="user" size="24" />
  </t-dropdown>
</template>
