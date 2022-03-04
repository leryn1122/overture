<template>
  <div class="exception">
    <div class="img">
      <img :src="errorPage(code).img" />
    </div>
    <div class="content">
      <h1>{{ errorPage(code).title }}</h1>
      <div class="desc">{{ errorPage(code).desc }}</div>
      <div class="action">
        <a-button type="primary" :block="true" @click="goBackHome()"> Back to Homepage. </a-button>
        <a-button type="default" :block="true" @click="goBackPage()" style="margin-top: 4px">
          Back to Last Page.
        </a-button>
      </div>
      <div class="authority">Pic authored by:&nbsp;<i>twi.dengcio</i></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Router from '@/router';
import errorPage from './errorPage';

/**
 * 错误页面
 * Props需要一个HTTP错误码, 如果需要扩展错误页面, 修改./errorPage.ts
 */
export default defineComponent({
  name: 'ErrorPage',
  props: {
    code: {
      default: 404,
    },
  },
  setup() {
    function goBackHome(): void {
      Router.push({ name: 'Home' });
    }

    function goBackPage(): void {
      Router.go(-1);
    }

    return {
      errorPage,
      goBackHome,
      goBackPage,
    };
  },
});
</script>

<style lang="less" scoped>
@import url('./index');
</style>
