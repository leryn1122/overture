import { EncryptionSettings } from '@/settings/type';

import CipherOption from 'crypto-js';
import { encrypt, decrypt } from 'crypto-js/aes';
import { parse } from 'crypto-js/enc-utf8';
import Base64 from 'crypto-js/enc-base64';
import ECB from 'crypto-js/mode-ecb';
import md5 from 'crypto-js/md5';
import pkcs7 from 'crypto-js/pad-pkcs7';
import UTF8 from 'crypto-js/enc-utf8';

export interface EncryptionParams {
  publicKey?: string;
  privateKey: string;
}

export class AesEncryption {
  private privateKey;

  constructor(options: EncryptionParams) {
    const { privateKey } = options;
    this.privateKey = parse(privateKey);
  }

  private getOptions() {
    return {
      mode: ECB,
      padding: pkcs7,
      iv: this.privateKey,
    };
  }

  encryptByAES(plaintext: string) {
    return encrypt(plaintext, this.privateKey, this.getOptions()).toString();
  }

  decryptByAES(cipherText: string) {
    return decrypt(cipherText, this.privateKey, this.getOptions()).toString(UTF8);
  }
}

class RsaEncryption {
  // TODO
}

export function encryptByBase64(plaintext: string): string {
  return UTF8.parse(plaintext).toString(Base64);
}

export function decryptByBase64(ciphertext: string): string {
  return Base64.parse(ciphertext).toString(UTF8);
}

export function encryptByMD5(plaintext: string): string {
  return md5(plaintext).toString();
}
