<script lang="ts" setup>
import data from './bookmark.json';
import { Bookmark } from './type';

const bookmarks: Bookmark[] = data.bookmark;
</script>

<template>
  <t-row
    :gutter="[
      { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
      { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 },
    ]"
  >
    <t-col v-for="bookmark in bookmarks" :key="bookmark" :span="4">
      <t-card class="card" :bordered="true">
        <div class="card-container">
          <t-image class="card-image" :src="bookmark.logo" fit="fill" shape="round" />
          <div style="padding-left: 8px; max-width: 70%">
            <h3 class="card-content">{{ bookmark.title }}</h3>
            <p class="card-content">{{ bookmark.description }}</p>
          </div>
        </div>
      </t-card>
    </t-col>
  </t-row>
</template>

<style lang="less">
.card {
  height: 108px;

  &-container {
    display: flex;
  }

  &-image {
    height: 60px;
    background-color: transparent;
  }

  &-content {
    margin: 0;
    text-wrap: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
