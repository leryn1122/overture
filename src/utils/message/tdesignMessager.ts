import { Messager, MessagerConfig } from '@/utils/message/type';
import { Message as $message } from 'tdesign-vue-next';

export default class TdesignMessager implements Messager {

  constructor() {
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
