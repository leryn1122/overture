<template>
  <LoginFormTitle :v-if="showTitle" class="enter-x" />
  <LoginForm login="/login.do" />
  <ForgetPassword />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { ref, unref } from 'vue';
import ForgetPassword from './ForgetPassword.vue';
import LoginFormTitle from './LoginFormTitle.vue';
import LoginForm from './LoginForm.vue';
import { LoginChannel } from './userLogin';

export default defineComponent({
  name: 'Login',
  components: {
    LoginForm,
    LoginFormTitle,
    ForgetPassword,
  },
  setup() {
    const getLoginChannel = () => {
      return LoginChannel.DEFAULT;
    };

    const showTitle = computed(() => unref(getLoginChannel()) === LoginChannel.DEFAULT);

    return {
      showTitle,
    };
  },
});
</script>

<style lang="less" scoped>
@import url('./index');
</style>
