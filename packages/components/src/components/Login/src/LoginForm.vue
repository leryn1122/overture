<template>
  <a-layout-content class="container">
    <a-form>
      <a-form-model layout="inline" :ref="formRef" :model="loginForm" :rules="rules">
        <a-form-model-item>
          <a-input v-model:value="loginForm.username" ref="username" name="username" placeholder="Username">
            <a-icon type="user" style="color: rgba(0, 0, 0, 0.25)" />
            <a-icon type="info-circle" style="color: rgba(0, 0, 0, 0.45)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-input-password
            v-model:value="loginForm.password"
            ref="password"
            name="password"
            type="password"
            placeholder="Password"
          >
            <a-icon type="lock" style="color: rgba(0, 0, 0, 0.25)" />
            <a-icon type="info-circle" style="color: rgba(0, 0, 0, 0.45)" />
          </a-input-password>
        </a-form-model-item>
        <a-form-model-item>
          <a-button
            type="primary"
            :block="true"
            html-type="submit"
            @click="onLogin()"
            :disabled="loginForm.username === '' || loginForm.password === ''"
            >Login</a-button
          >
          <a-button type="default" :block="true" style="margin-top: 5px" @click="onRegister()"> Register </a-button>
          <a-button type="default" :block="true" style="margin-top: 5px" @click="onLogout()"> Logout </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-form>
  </a-layout-content>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref, unref, UnwrapRef } from 'vue';

import Router from '@/router';
import http from '@leryn/httpclient';
import { hasToken } from '@/utils/auth';
import { LoginParams } from '@/api/auth/type';
import { UserStore } from '@/store/modules/user';
import { rules } from './data';
import { AesEncryption, encryptByBase64 } from '@/utils/crypto';

export default defineComponent({
  name: 'LoginForm',
  props: {
    login: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const formRef = ref();
    const loginForm: UnwrapRef<LoginParams> = reactive({
      username: 'Leryn',
      password: '123456',
    });

    const userStore = UserStore();
    const aesEncryption: AesEncryption = new AesEncryption({
      privateKey: '12345678',
    });

    /** 加密请求 */
    function encrypt(params: LoginParams): LoginParams {
      const loginForm = { ...params };
      loginForm.password = aesEncryption.encryptByAES(params.password);
      return loginForm;
    }

    /** 用户登录 */
    async function onLogin() {
      const userInfo = await userStore.login(encrypt(loginForm));
    }

    /**  */
    function onRegister() {
      http.post('/v1/register.do', encrypt(loginForm)).then((response) => {
        Router.push('/login');
      });
    }

    /**  */
    function onLogout() {
      userStore.logout(false);
    }

    return {
      formRef,
      loginForm,
      rules,
      hasToken: hasToken,
      onLogin: onLogin,
      onRegister: onRegister,
      onLogout: onLogout,
    };
  },
});
</script>

<style lang="less" scoped>
@import url('./index');
</style>
