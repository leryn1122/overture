<template>
  <t-layout class="container">
    <t-aside class="left" />
    <t-content class="login-container login-container-reactive">
      <div class="login">
        <div class="login-title">
          <div class="login-title-welcome">Welcome to</div>
          <div class="login-title-name">
            {{ module }}
          </div>
        </div>
        <t-input
          class="login-input"
          v-model="loginForm.username"
          :clearable="true"
          size="medium"
          placeholder="Username"
          :status="inputStatus(usernameValidated)"
          @blur="validateUsername"
          @enter="onEnterLoginForm"
        />
        <t-input
          class="login-input"
          v-model="loginForm.password"
          :clearable="true"
          size="medium"
          type="password"
          placeholder="Password"
          :status="inputStatus(passwordValidated)"
          @blur="validatePassword"
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
        <t-button class="login-button" variant="base" @click="onClickLoginButton">Login in</t-button>
        <div class="login-noaccount">Don't have an account? <a href="/signup">Sign up now</a></div>
      </div>
    </t-content>
    <t-aside class="right" />
  </t-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ButtonProps, InputProps, InputValue, MessagePlugin } from 'tdesign-vue-next';
import { useRouter } from 'vue-router';
import { InfoCircleIcon } from 'tdesign-icons-vue-next';
import { useUserStore } from '@/store/modules/user';
import { Nullable } from '@/vite-env';

import { throttle } from 'lodash';
import { LoginForm } from './login';
import AES from 'crypto-js/AES';

const userStore = useUserStore();
const router = useRouter();

const module = extractLoginModuleFromQuery() || 'Customer Center';

const loginForm = ref<LoginForm>({
  username: '',
  password: '',
});

const passwordValidated = ref<boolean>(true);
const usernameValidated = ref<boolean>(true);

async function login() {
  if (!usernameValidated.value || loginForm.value.username.length == 0) {
    MessagePlugin.error({ content: 'Please check the username.', duration: 1500 });
    return;
  }
  if (!passwordValidated.value || loginForm.value.password.length == 0) {
    MessagePlugin.error({ content: 'Please check the password.', duration: 1500 });
    return;
  }

  const redirect = extractRedirectFromQuery();

  const password = AES.encrypt(
    loginForm.value.password,
    'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALyIzVdsxPcI4MVnwGISNWyn5XLmPOW/' +
      'fr+S+28q/oX+alHLIPmpHxZ+NFmrynipp+zFEVs4eYt/MYqZ+sU1RdECAwEAAQ==',
  );

  const userInfo = await userStore.login({
    username: loginForm.value.username,
    password: password.toString(),
    redirect: redirect!,
  });
  if (userInfo == null) {
    MessagePlugin.error({ content: 'Login failed.', duration: 1500 });
    return;
  }

  if (redirect) {
    if (redirect!.startsWith('/')) {
      router.push(redirect!);
    } else {
      window.location.href = redirect!;
    }
  } else {
    router.push('/');
  }
  return;
}

function extractRedirectFromQuery(): Nullable<string> {
  const params = Object.fromEntries(new URLSearchParams(window.location.search).entries());
  return params['redirect'];
}

function extractLoginModuleFromQuery(): Nullable<string> {
  const params = Object.fromEntries(new URLSearchParams(window.location.search).entries());
  return params['m'];
}

const onEnterLoginForm: InputProps['onEnter'] = throttle((_: InputValue) => {
  login();
}, 2000);

const onClickLoginButton: ButtonProps['onClick'] = throttle(() => {
  login();
}, 2000);

const validateUsername: InputProps['onBlur'] = (value: InputValue, _context: { e: FocusEvent }) => {
  usernameValidated.value = value.toString().length > 0;
};

const validatePassword: InputProps['onBlur'] = (value: InputValue, _context: { e: FocusEvent }) => {
  passwordValidated.value = value.toString().length > 0;
};

function inputStatus(enabled: boolean): string {
  return enabled ? 'default' : 'error';
}
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
