<template>
  <t-layout class="container">
    <t-aside class="left" />
    <t-content class="login-container login-container-reactive">
      <div class="login">
        <div class="login-title">
          <div class="login-title-welcome">Welcome to</div>
          <div class="login-title-name">
            {{ businessModule }}
          </div>
        </div>
        <t-input
          class="login-input"
          v-model="loginForm.username"
          clearable
          size="medium"
          placeholder="Username / Email Address"
          @enter="onEnterLoginForm"
        />
        <t-input
          class="login-input"
          v-model="loginForm.password"
          clearable
          size="medium"
          type="password"
          placeholder="Password"
          @enter="onEnterLoginForm"
        />
        <div class="login-forgetpassord">
          <a href="/forget-password">Forget your password</a>
          <t-tooltip placement="bottom" :show-arrow="false" theme="light">
            <InfoCircleIcon style="margin-left: 4px" />
            <template #content>
              <a href="">How to recover a forgotten password.</a>
            </template>
          </t-tooltip>
        </div>
        <t-button class="login-button" variant="base" @click="onClickLoginButton">Sign in</t-button>
        <div class="login-noaccount">Don't have an account? <a href="">Sign up now</a></div>
      </div>
    </t-content>
    <t-aside class="right" />
  </t-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ButtonProps, InputProps, InputValue, MessagePlugin } from 'tdesign-vue-next';
import { InfoCircleIcon } from 'tdesign-icons-vue-next';
import { useUserStore } from '@/store/modules/user';
import { Nullable } from '@/vite-env';

import { LoginForm } from './login';

const router = useRouter();
const userStore = useUserStore();

const businessModule = ref<string>('Customer Center');

const loginForm = ref<LoginForm>({
  username: '',
  password: '',
});

const login = () => {
  // MessagePlugin.error({ content: '用户表示操作引起严重的后果', duration: 1000 });
  // const redirect = getRedirectFromQuery();
  // userStore.login({ ...loginForm.value, redirect: redirect! });
  userStore.login({ ...loginForm.value });

  // if (redirect) {
  //   if (redirect!.startsWith('/')) {
  //     router.push(redirect!);
  //   } else {
  //     window.location.href = redirect!;
  //   }
  // } else {
  //   router.push('/');
  // }
  return {};
};

function getRedirectFromQuery(): Nullable<string> {
  const params = Object.fromEntries(new URLSearchParams(window.location.search).entries());
  const redirectTarget = params['redirect'];
  return redirectTarget;
}

const onEnterLoginForm: InputProps['onEnter'] = (_: InputValue) => {
  login();
};

const onClickLoginButton: ButtonProps['onClick'] = () => {
  login();
};
</script>

<style lang="less">
a {
  color: var(--td-brand-color-8);
  text-decoration: none;
}

.container {
  height: 100vh;
}

.login-container {
  display: flex;
  width: 256px;
  padding-top: 25vh;
  text-align: center;
  justify-content: center;
  background-color: var(--td-bg-color-container);
}

.login {
  padding-left: 32px;
  padding-right: 32px;
  height: 100%;
  width: 368px;

  &-title {
    margin: 8px 0 8px 0;
    text-align: left;
    justify-content: left;
    color: var(--td-font-color);

    &-welcome {
      margin-top: inherit;
      margin-bottom: inherit;
      font-size: larger;
    }

    &-name {
      margin-bottom: 32px;
      font-size: xx-large;
    }
  }

  &-input {
    margin-top: 16px;
    width: 100%;
  }

  &-button {
    margin-top: 16px;
    width: 100%;
    text-transform: uppercase;
  }

  &-forgetpassord {
    margin: 8px 0 8px 0;
    color: var(--td-text-color-primary);
    font-size: medium;
    text-align: right;
    justify-content: right;
  }

  &-noaccount {
    color: var(--td-font-color);
    margin: 8px 0 8px 0;
    font-size: small;
    text-align: right;
    justify-content: right;
  }
}

.left {
  background-image: url('@/assets/background/left-background.png');
  background-color: var(--td-bg-color-container);
  background-position: left;
  max-width: 10%;
}

.right {
  background-image: url('@/assets/background/right-background.png');
  background-color: var(--td-bg-color-container);
  background-position: right;
  max-width: 10%;
}

.t-input__inner {
  font-size: medium;
}

.t-tooltip .t-popup__content {
  font-size: small;
}
</style>
