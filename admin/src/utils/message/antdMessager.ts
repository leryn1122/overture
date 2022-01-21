import { Messager, MessagerConfig } from '@/utils/message/type';
import { message as $message } from 'ant-design-vue';
import { ConfigOptions } from 'ant-design-vue/lib/message';

export default class AntdMessager implements Messager {
  // private config: MessagerConfig;

  private options: ConfigOptions;

  constructor(config: MessagerConfig) {
    // this.config = config;
    this.options = config as MessagerConfig;
    $message.config(this.options);
  }

  public success(message: string): void {
    $message.success(message);
  }

  public info(message: string): void {
    $message.info(message);
  }

  public warn(message: string): void {
    $message.warn(message);
  }

  public error(message: string): void {
    $message.error(message);
  }
}
