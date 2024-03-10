<script lang="ts" setup>
defineProps({
  icon: String,
});
</script>

<template>
  <span :class="$attrs.class">
    <t-icon :name="icon" />
  </span>
</template>

<style lang="less"></style>
