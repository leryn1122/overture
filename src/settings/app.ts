/**  跟应用全局相关的静态配置放在这里  */
import { Message } from 'tdesign-vue-next';

const AppConfig = {
  $message: Message,
};

const StaticConfig = {
  MaxPageSize: 1000,
};

export { AppConfig, StaticConfig };
