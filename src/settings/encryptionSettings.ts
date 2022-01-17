import { EncryptionSettings } from './type';

/**
 * 加密算法的设置
 */
const settings: EncryptionSettings = {
  /** 是否使用AES算法加密 */
  useAES: true,

  aesPublicKey: 'asdfasdfasdf',

  /** 是否使用RSA算法加密 */
  useRSA: true,

  rsaPublicKey: 'asdfasdfasdf',

  rsaPriviateKey: 'sadfasdfsf',
};

export { settings };
