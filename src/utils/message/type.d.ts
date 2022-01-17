import { VNode } from '@vue/runtime-core';

/**
 * 消息提示器: 适配器模式
 */
export interface Messager {
  success(message: string): void;

  info(message: string): void;

  warn(message: string): void;

  error(message: string): void;
}

export interface MessagerConfig {
  duration?: number;
  onClose?: Function;
  icon?: string | VNode | ((h: any) => VNode);
  key?: string | number;
}
