export type StorageProps =
  | {
      storage?: Storage;
      hasEncryption: boolean;
    }
  | {
      storage: undefined;
      hasEncryption: false;
    };
