import type { App } from 'vue';
import type { I18n, I18nOptions } from 'vue-i18n';

import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { setHtmlPageLang, setLoadLocalePool } from './helper';
import { settings as localeSettings } from '@/settings/localeSettings';
import { useLocaleStoreWithOut } from '@/store/modules/locale';

export let i18n: ReturnType<typeof createI18n>;

async function createI18nOptions(): Promise<I18nOptions> {
  const localeStore = useLocaleStoreWithOut();
  const locale = localeStore.getLocale;
  const defaultLocal = await import(`./lang/${locale}.ts`);
  const message = defaultLocal.default?.message ?? {};

  setHtmlPageLang(locale);
  setLoadLocalePool((loadLocalePool) => {
    loadLocalePool.push(locale);
  });

  return {
    legacy: false,
    locale,
    messages: {
      [locale]: message,
    },
    sync: true, //If you don’t want to inherit locale from global scope, you need to set sync of i18n component option to false.
    silentTranslationWarn: true, // true - warning off
    missingWarn: false,
    silentFallbackWarn: true,
  };
}

export async function setupI18n(app: ReturnType<typeof createApp>): Promise<ReturnType<typeof createApp>> {
  const options = await createI18nOptions();
  i18n = createI18n(options) as I18n;
  app.use(i18n);
  return app;
}
