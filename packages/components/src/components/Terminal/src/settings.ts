import { ITerminalOptions } from 'xterm';

export const iTerminalOptions: ITerminalOptions = {
  rendererType: 'canvas',
  cols: 170,
  rows: 47,
  convertEol: true, //启用时，光标将设置为下一行的开头
  scrollback: 10, //终端中的回滚量
  disableStdin: false, //是否应禁用输入
  cursorStyle: 'underline', //光标样式
  cursorBlink: true, //光标闪烁
  theme: {
    background: '#060101', //背景色
    cursor: 'help', //设置光标
  },
};
