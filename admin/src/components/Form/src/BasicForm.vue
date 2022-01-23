<template>
  <Form>
    <slot name="formHeader">表单头</slot>
    <Row v-bind="getRow">
      <slot name="formHeader"></slot>
    </Row>
    <slot name="formFooter">表单脚注</slot>
  </Form>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { computed, ref, unref, onMounted } from 'vue';
import type { Recordable } from '@overture/types';
import { Form, FormItem, Row, RowProps } from 'ant-design-vue';
import { BasicProps } from './type';

export default defineComponent({
  name: 'Form',
  components: { Form, FormItem, Row },
  emits: [],
  props: {
    basicProps: {
      type: Object as PropType<BasicProps>,
    },
  },
  setup(props, { emit }) {
    const getProps = computed((): BasicProps => {
      return {};
    });

    const getRow = computed((): Recordable => {
      const { rowProps } = unref(getProps);
      return {};
    });

    const initDefault = () => {
      console.log('....');
    };

    /**
     *
     */
    onMounted(() => {
      initDefault();
    });

    return {
      getRow,
    };
  },
});
</script>

<style lang="less" scoped>
@import url('./index');
</style>
