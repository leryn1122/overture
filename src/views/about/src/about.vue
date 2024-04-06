<template>
  <t-layout class="container">
    <t-aside class="left" />
    <t-content class="content-container">
      <div class="content">
        <h1 style="text-align: center">{{ title }}</h1>
        <p style="text-align: justify">{{ content }}</p>
        <div style="padding: 24px">
          <t-button variant="outline" style="margin: 8px">Homepage</t-button>
          <t-button variant="base" style="margin: 8px">Homepage</t-button>
        </div>
      </div>
    </t-content>
    <t-aside class="right" />
  </t-layout>
</template>

<script lang="ts" setup>
import about_json from './about.json';

const { title, content } = about_json;
</script>

<style lang="less">
.container {
  height: 100vh;
}

.content-container {
  display: flex;
  text-align: center;
  justify-content: center;
  padding-top: 120px;
  background-color: var(--td-bg-color-container);
}

.content {
  max-width: max(50%, 600px);
  padding-left: 32px;
  padding-right: 32px;
  height: 100%;
}

.left {
  background-image: url('@/assets/background/left-background.png');
  background-color: var(--td-bg-color-container);
  background-position: left;
  max-width: 30%;
}

.right {
  background-image: url('@/assets/background/right-background.png');
  background-color: var(--td-bg-color-container);
  background-position: right;
  max-width: 30%;
}
</style>
