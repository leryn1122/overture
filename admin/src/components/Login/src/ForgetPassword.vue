<template>
  <template v-if="visible" class="container">
    <a-layout-content class="container">
      <a-form class="" ref="formRef" :model="formData" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item ref="username">
          <a-input v-model:value="formData.username" placeholder="用户名" />
        </a-form-item>
        <a-form-item ref="mobile">
          <a-input v-model:value="formData.mobile" placeholder="手机号" />
        </a-form-item>
        <a-form-item ref="captcha">
          <a-input v-model:value="formData.captcha" placeholder="验证码" />
        </a-form-item>
        <a-form-item>
          <a-button>{{ '获取验证码' }}</a-button>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" @click="onSubmit()">
            {{ '重置' }}
          </a-button>
          <a-button type="default">
            {{ '返回' }}
          </a-button>
        </a-form-item>
      </a-form>
    </a-layout-content>
  </template>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { ref, toRaw } from 'vue';
import type { UnwrapRef } from 'vue';
import Messager from '@/utils/message';

interface FormState {
  username: string;
  mobile: string;
  captcha: string;
}

export default defineComponent({
  name: 'ForgetPassword',
  components: {},
  setup() {
    const visible = true;
    const formRef = ref();
    const formData: UnwrapRef<FormState> = reactive({
      username: '',
      mobile: '',
      captcha: '',
    });

    const rules = {
      username: [
        {
          type: 'string',
          required: true,
        },
      ],
      mobile: [
        {
          type: 'number',
          message: '',
          required: true,
        },
      ],
      captcha: [
        {
          type: 'string',
          required: true,
        },
      ],
    };

    function onSubmit() {
      formRef.value
        .validate()
        .then(() => {
          console.log('values', formData, toRaw(formData));
        })
        .catch((error: any) => {
          console.log('error', error);
        });
      Messager.info('开始重置密码');
    }

    return {
      visible,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      formData,
      formRef,
      rules,
      onSubmit,
    };
  },
});
</script>

<style lang="less" scoped>
@import url('./index');
</style>
