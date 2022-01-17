<template>
  <a-layout-footer class="copyright" style="text-align: center">
    <div>MIT License 2020-2030 Leryn. All rights reserved.</div>
    <div>
      <a-divider type="vertical" />
      <img
        src="https://img.shields.io/static/v1?label=license&message=MIT&color=blue&style=plastic&logo=github&logoColor=white?longCache=true"
        alt="Image not found"
      />
      <a-divider type="vertical" />
      <img
        src="https://img.shields.io/static/v1?label=module&message=leryn&color=salmon&style=plastic&logo=gitee&logoColor=white?longCache=true"
        alt="Image not found"
      />
    </div>
    <div>
      <a href="https://beian.miit.gov.cn" target="_blank">沪ICP备2021005089号</a>
    </div>
  </a-layout-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: '',
  setup() {
    return {
      copyright: '',
      images: [
        'https://img.shields.io/static/v1?label=license&message=MIT&color=blue&style=plastic&logo=github&logoColor=white?longCache=true',
        'https://img.shields.io/static/v1?label=module&message=leryn&color=salmon&style=plastic&logo=gitee&logoColor=white?longCache=true',
      ],
    };
  },
});
</script>

<style lang="less" scoped>
.copyright {
  font-family: 'TrajanPro3-Regular', serif;
  font-weight: bold;
  position: relative;
  text-align: center;
  height: 50px;
  border-top: 1px solid #e9e9e9;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
</style>
