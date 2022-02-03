export declare type EncryptionSettings = Partial<{
  /** 是否使用AES算法加密 */
  useAES: boolean;

  aesPublicKey: string | undefined;

  /** 是否使用RSA算法加密 */
  useRSA: boolean;

  rsaPublicKey: string | undefined;

  rsaPriviateKey: string | undefined;
}>