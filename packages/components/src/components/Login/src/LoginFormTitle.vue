<template>
  <template v-if="visible">
    <h2 class="mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left">
      {{ getFormTitle }}
    </h2>
  </template>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { LoginChannel } from './userLogin';

export default defineComponent({
  setup() {
    const visible = true;

    const getFormTitle = computed(() => {
      const titleOject = {
        [LoginChannel.DEFAULT]: '登录', // t('sys.login.signInFormTitle'),
        [LoginChannel.RESET_PASSWORD]: '重置密码', // t('sys.login.forgetFormTitle'),
        [LoginChannel.REGISTER]: '注册', // t('sys.login.signUpFormTitle'),
        [LoginChannel.MOBILE]: '手机登录', // t('sys.login.mobileSignInFormTitle'),
        [LoginChannel.QR_CODE]: '二维码登录', // t('sys.login.qrSignInFormTitle'),
      };
      return titleOject[LoginChannel.DEFAULT];
    });

    return {
      visible,
      getFormTitle,
    };
  },
});
</script>
