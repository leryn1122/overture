<template>
  <!-- <Loading tip="Application is Loading" :loading="true"> </Loading> -->
  <div>
    <!-- <Terminal url="ws://127.0.0.1:3000/terminals/">Debug</Terminal> -->
    嗯嗯嗯
  </div>
  <!-- <BasicForm>表单</BasicForm> -->
  <!-- <ErrorLog :error="throwError()"></ErrorLog> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Loading } from '@leryn/components';
// import { Terminal } from '@/components/Terminal';
// import ErrorLog from '@/views/error/ErrorLog.vue';

export default defineComponent({
  name: 'Debug',
  components: { Loading },
  setup() {
    let error: Error = new Error();

    try {
      let a: number = 1 / 0;
    } catch (e) {
      error = e as Error;
    }

    function throwError(): Error {
      return error;
    }

    return {
      error: error,
      throwError,
    };
  },
});
</script>
