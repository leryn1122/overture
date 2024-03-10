<template>
  <t-layout>
    <t-header>
      <slot name="header"> </slot>
    </t-header>
    <t-layout>
      <t-aside class="aside">
        <slot name="aside"> </slot>
      </t-aside>
      <t-content style="margin: 8px; background-color: var(--td-bg-color-container); padding: 8px;">
          <slot name="main">
            <div>To be mounted!!</div>
          </slot>
      </t-content>
      <t-footer class="footer">
        <slot name="footer"> </slot>
      </t-footer>
    </t-layout>
  </t-layout>
</template>

<style lang="less">
.main {
  margin: 8px;
}

.aside {
  width: auto;
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
