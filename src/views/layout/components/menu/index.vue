<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { ButtonProps, MenuProps } from 'tdesign-vue-next';

import { context } from '@/layout/context';
import { Menu } from './types';
import { data } from './data';

const { getMenus } = context;

const props = defineProps({
  collapsable: {
    type: Boolean,
    default: true,
  },
});

const menuList = ref<Menu[]>([]);

onMounted(async () => {
  menuList.value = await getMenus();
  menuList.value = data;
});

let router = useRouter();

const collapsed = ref<boolean>(false);
const collapsedButtonIcon = ref<string>('chevron-left-double');

const onForwardingMenu: MenuProps['onChange'] = (active: any) => {
  router.push({ name: active });
};

const changeCollapsed: ButtonProps['onClick'] = () => {
  collapsed.value = !collapsed.value;
  collapsedButtonIcon.value = !collapsed.value ? 'chevron-left-double' : 'chevron-right-double';
};
</script>

<template>
  <t-menu @change="onForwardingMenu" :collapsed="props.collapsable ? collapsed : false" style="width: 100%;">
    <t-menu-item v-for="(menu, _) in menuList" :value="menu.key">
      <template #icon v-if="menu.icon">
        <t-icon :name="menu.icon" />
      </template>
      {{ menu.name }}
    </t-menu-item>
    <template #operations :v-if="props.collapsable">
      <t-button class="t-collapse-btn" variant="text" shape="square" @click="changeCollapsed">
        <template #icon>
          <t-icon :name="collapsedButtonIcon" />
        </template>
      </t-button>
    </template>
  </t-menu>
</template>

<style lang="less">
</style>
