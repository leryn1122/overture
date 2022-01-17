import { Locale } from '@/locales/type';

export interface EncryptionSettings {
  useAES: boolean;
  aesPublicKey: string | undefined;
  useRSA: boolean;
  rsaPublicKey: string | undefined;
  rsaPriviateKey: string | undefined;
}
export interface ProjectSettings {
  closeMessageOnSwitch: boolean;
  permissionCacheStrategy: 'local' | 'session';
  removeAllHttpPending: boolean;
  routerMode: 'history' | 'hash';
}

export interface LocaleSettings {
  locale: Locale;
  showPicker: boolean;
}
