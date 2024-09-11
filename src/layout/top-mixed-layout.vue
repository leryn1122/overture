<template>
  <t-layout>
    <t-aside class="aside-container">
      <slot name="aside" />
    </t-aside>
    <t-layout>
      <t-header>
        <slot name="header" />
      </t-header>
      <t-content class="main-container" style="">
        <slot name="main" />
      </t-content>
      <t-footer class="footer-container">
        <slot name="footer" />
      </t-footer>
    </t-layout>
  </t-layout>
</template>

<style lang="less">
.main-container {
  background-color: var(--td-bg-color-container);
  margin: 8px;
  padding: 8px;
  min-height: 96vh;
  border-radius: 4px;
}

.aside-container {
  width: auto;
}

.footer-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
