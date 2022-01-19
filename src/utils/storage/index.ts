import type { StorageProps } from 'types/storage';

/**
 * Storage支持若干存储方式:
 *  - Memory 内存级别
 *  - SessionStorage 支持但完全不推荐
 *  - LocalStorage
 *  - WebSQL 仅限Chrome
 *  - IndexedDB
 */
export function createStorage() {

}

export class WebStorage {
  private storage?: Storage;
  private hasEncryption: boolean;

  constructor(props: StorageProps) {
    this.storage = props.storage;
    this.hasEncryption = props.hasEncryption;
  }

  public set(key: string, value: any): void {
    if (value instanceof String) {
      this.storage?.setItem(key, value as string);
    } else {
      this.storage?.setItem(key, JSON.stringify(value));
    }
  }

  public get(key: string, defaultVal: any = null): any {
    return this.storage?.getItem(key);
  }

  public remove(key: string): void {
    this.storage?.removeItem(key);
  }

  public clear(): void {
    this.storage?.clear();
  }

}