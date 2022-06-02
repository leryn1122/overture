import { defineStore } from 'pinia';

interface PermissionState {
  permCode: (string | number)[];
}

export const PermissionStore = defineStore({
  id: 'PermissionStore',
  state: (): PermissionState => ({
    permCode: [],
  }),
  getters: {},
  actions: {},
});
