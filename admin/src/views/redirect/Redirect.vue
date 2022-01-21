<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, unref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const { currentRoute, replace } = useRouter();
    const { params, query } = unref(currentRoute);
    console.log('params', unref(currentRoute));
    const { path, _redirect_type = 'path' } = params;

    Reflect.deleteProperty(params, '_redirect_type');
    Reflect.deleteProperty(params, 'path');

    const _path = Array.isArray(path) ? path.join('/') : path;

    if ('name' === _redirect_type) {
      replace({
        name: _path,
        query,
        params,
      });
    } else {
      replace({
        path: _path.startsWith('/') ? _path : '/' + _path,
        query,
      });
    }
  },
});
</script>

<style scoped></style>
