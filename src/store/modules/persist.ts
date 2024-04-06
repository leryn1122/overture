import { defineStore } from 'pinia';

export const usePersistState = defineStore({
  id: 'persist',
  getters: {},
  actions: {
    getKey<T>(key: string): T {
      return localStorage.getItem(key) as T;
    },
    setKey: (key: string, value: any) => {
      localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
    },
    removeKey: (key: string) => {
      localStorage.removeItem(key);
    },
  },
});
