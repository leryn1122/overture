import { Messager, MessagerConfig } from '@/utils/message/type';
import AntdMessager from '@/utils/message/antdMessager';

const config: MessagerConfig = {};

const messager: Messager = new AntdMessager(config);

export default messager as Messager;
