<template>
  <div>
    <div ref="webTerminal" style="width: 100%; height: 100%">终端</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted, onDeactivated, ref } from 'vue';
import { Command } from './type';

import 'xterm/css/xterm.css';
import 'xterm/lib/xterm.js';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { AttachAddon } from 'xterm-addon-attach';

import { iTerminalOptions } from './settings';

/**
 * 终端界面
 * 基于XTerm的实现, 所有业务逻辑都由后端处理并返回, 前端仅负责显示.
 */
export default defineComponent({
  name: 'Terminal',
  props: {
    url: {
      type: String as PropType<string>,
      require: true,
    },
  },
  setup(props) {
    let socket: WebSocket;
    let terminal: Terminal;
    let messageBuffer: string = '';

    function initTerminal() {
      terminal = new Terminal(iTerminalOptions);

      const webTerminal = ref<HTMLElement | null>(null);
      terminal.open(webTerminal.value as HTMLElement);

      const fitAddon = new FitAddon();
      const attachAddon = new AttachAddon(socket);
      terminal.loadAddon(fitAddon);
      terminal.loadAddon(attachAddon);

      fitAddon.fit();
      terminal.focus();
    }

    function initWebSocket(url: string): void {
      socket = new WebSocket(url);
      socket.onopen = onSocketOpen;
      socket.onclose = onSocketClose;
      socket.onerror = onSocketError;
    }

    function onSocketOpen(event: Event): void {
      console.log('socket连接成功', event);
      initTerminal();
      terminal.write('Welcome to web shell terminal.');
    }

    function onSocketClose(): void {
      socket.close();
    }

    function onSocketError(event: Event): void {
      console.log('连接错误', event);
    }

    let url: string = props.url as string;
    if ('https:' == window.location.protocol) {
      url = url.replace('ws://', 'wss://');
    }

    onMounted(() => {
      initWebSocket(url);
    });

    onDeactivated(() => {
      terminal.dispose();
      socket.close();
    });

    return {
      socket: WebSocket,
      terminal: Terminal,
      initWebSocket,
    };
  },
});
</script>

<style lang="less" scoped>
@import url('./index');
</style>
