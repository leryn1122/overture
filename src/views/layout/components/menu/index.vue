<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { MenuProps } from 'tdesign-vue-next';

import { useContext } from '@/layout/context';
import { Menu } from '@/layout';

const { getMenus } = useContext();

// const props = defineProps({
//   collapsable: {
//     type: Boolean,
//     default: true,
//   },
// });

const menuList = ref<Menu[]>([]);

onMounted(async () => {
  menuList.value = await getMenus();
});

const router = useRouter();

// const collapsed = ref<boolean>(false);
// const collapsedButtonIcon = ref<string>('chevron-left-double');

const onForwardingMenu: MenuProps['onChange'] = (active: any) => {
  router.push({ name: active });
};

// const changeCollapsed: ButtonProps['onClick'] = () => {
//   collapsed.value = !collapsed.value;
//   collapsedButtonIcon.value = !collapsed.value ? 'chevron-left-double' : 'chevron-right-double';
// };
</script>

<template>
  <t-menu @change="onForwardingMenu" width="300px" style="width: 100%">
    <template #logo>
      <img height="36" src="/logo/logo.jpeg" alt="logo" class="logo-image" />
      <span class="logo-title">Leryn Homepage</span>
    </template>
    <t-submenu v-for="(menu, _) in menuList" :value="menu.key">
      <template #icon v-if="menu.icon">
        <t-icon :name="menu.icon" />
      </template>
      <template #title>
        {{ menu.name }}
      </template>
      <t-menu v-for="(submenu, _) in menu.children" :value="submenu.key">
        {{ submenu.name }}
      </t-menu>
    </t-submenu>
    <!-- <template #operations :v-if="collapsed">
      <t-button class="t-collapse-btn" variant="text" shape="square" @click="changeCollapsed">
        <template #icon>
          <t-icon :name="collapsedButtonIcon" />
        </template>
      </t-button>
    </template> -->
  </t-menu>
</template>

<style lang="less">
.logo {
  &-image {
    border-radius: 5px;
  }

  &-title {
    font-weight: bold;
    font-size: 24px;
  }
}
</style>
