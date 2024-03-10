<template>
  <div class="flex items-center" @click="changeModal(true)">
    <t-popup placement="bottom">
      <t-icon name="search" size="24" />
      <template #content>
        <SearchModal @close="changeModal(false)" :visible="showModal" />
      </template>
    </t-popup>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SearchModal from './SearchModal.vue';

const showModal = ref<boolean>(false);

function changeModal(show: boolean) {
  showModal.value = show;
}
</script>

<style lang="less"></style>
