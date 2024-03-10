<script lang="ts" setup>
import data from './bookmark.json';

const bookmarks = data.bookmark;
</script>

<template>
  <t-row
    :gutter="[
      { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
      { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
    ]"
  >
    <t-col v-for="bookmark in bookmarks" :key="bookmark" :span="4">
      <t-card bordered>
        <t-image :src="bookmark.logo" fit="fill" shape="round" :style="{ width: '120px', height: '120px' }" />
        <div>
          <h3>{{ bookmark.title }}</h3>
          <p>{{ bookmark.description }}</p>
        </div>
      </t-card>
    </t-col>
  </t-row>
</template>

<style lang="less"></style>
