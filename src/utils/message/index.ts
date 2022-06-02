import { Messager, MessagerConfig } from '@/utils/message/type';
import TdesignMessager from '@/utils/message/tdesignMessager';

const config: MessagerConfig = {};

const messager: Messager = new TdesignMessager();

export default messager as Messager;
