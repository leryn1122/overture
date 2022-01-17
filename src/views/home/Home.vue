<template>
  <a-layout id="components-layout-demo-top-side">
    <a-layout-header class="header">
      <Header :menu="toArray(content.menu)" />
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider>
          <Sider :submenu="toArray(content.menu)" />
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          Content
          <br />
          Hello Leryn!!
          <li>主页:<a href="https://leryn.top">https://leryn.top</a></li>
          <li>Docker仓库:<a href="https://docker.leryn.top">https://docker.leryn.top</a></li>
          <li>Docker API:<a href="https://docker-api.leryn.top">https://docker-api.leryn.top</a></li>
          <li>Docker仓库UI:<a href="https://docker-ui.leryn.top">https://docker-ui.leryn.top</a></li>
          <li>流水线:<a href="https://drone.leryn.top">https://drone.leryn.top</a></li>
          <li>网盘:<a href="https://disk.leryn.top">https://disk.leryn.top</a></li>
          <li>容器管理:<a href="https://portainer.leryn.top">https://portainer.leryn.top</a></li>
          <li>Web Shell:<a href="https://webssh.leryn.top">https://webssh.leryn.top</a></li>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout>
      <Footer />
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Footer from '@/views/container/Footer.vue';
import Header from '@/views/container/Header.vue';
import Sider from '@/views/container/Sider.vue';

export type Menu = {
  menu: {
    name: string;
    submenu: {
      name: string;
      options: {
        name: string;
      }[];
    }[];
  }[];
};

export default defineComponent({
  name: 'Home',
  components: {
    Sider,
    Header,
    Footer,
  },
  setup() {
    let content = reactive({
      menu: [
        {
          name: 'Learn',
          submenu: [
            {
              name: '',
              options: [
                {
                  name: '',
                },
              ],
            },
          ],
        },
        {
          name: 'Project',
          submenu: [
            {
              name: '',
              options: [
                {
                  name: '',
                },
              ],
            },
          ],
        },
        {
          name: 'Support',
          submenu: [
            {
              name: '',
              options: [
                {
                  name: '',
                },
              ],
            },
          ],
        },
        {
          name: 'Community',
          submenu: [
            {
              name: '',
              options: [
                {
                  name: '',
                },
              ],
            },
          ],
        },
      ],
    });

    let selected = reactive({
      menuIndex: 0,
      submenuIndex: 0,
      optionalIndex: 0,
    });

    function toArray(array: Array<any>): string[] {
      let result: string[] = [];
      Array.prototype.forEach.call(array, (element) => {
        if (element?.name) {
          result.push(element?.name);
        }
      });
      return result;
    }

    return {
      content,
      selected,
      toArray,
    };
  },
});
</script>

<style scoped></style>
