import type { Locale } from '@/locales/type';
import type { LocaleSettings } from 'types/settings';

import { defineStore } from 'pinia';
import { store } from '@/store';

import { settings as localeSettings } from '@/settings/localeSettings';

const lsLocaleSetting = localeSettings as LocaleSettings;

interface LocaleState {
  localInfo: LocaleSettings;
}

export const useLocaleStore = defineStore({
  id: 'app-locale',
  state: (): LocaleState => ({
    localInfo: lsLocaleSetting,
  }),
  getters: {
    getShowPicker(): boolean {
      return !!this.localInfo?.showPicker;
    },
    getLocale(): Locale {
      return this.localInfo?.locale ?? 'zh_CN';
    },
  },
  actions: {
    /**
     * Set up multilingual information and cache
     * @param info multilingual info
     */
    setLocaleInfo(info: Partial<LocaleSettings>) {
      this.localInfo = { ...this.localInfo, ...info };
    },
    /**
     * Initialize multilingual information and load the existing configuration from the local cache
     */
    initLocale() {
      this.setLocaleInfo({
        ...localeSettings,
        ...this.localInfo,
      });
    },
  },
});

// Need to be used outside the setup
export function useLocaleStoreWithOut() {
  return useLocaleStore(store);
}
