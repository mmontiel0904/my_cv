import i18next from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { createI18nStore } from 'svelte-i18next';

import commonEn from '@/i18n/en_us/common.json';
import commonEs from '@/i18n/es_mx/common.json';

import { DEFAULT_LANG, I18_LANG } from '@/constants';

i18next.use(detector).init({
    detection: {
        order: ['localStorage', 'navigator'], 
        lookupLocalStorage: I18_LANG,
        caches: ['localStorage'],
    },
    fallbackLng: DEFAULT_LANG,
    resources: {
        en: {common: commonEn },
        es: {common: commonEs }
    },
    interpolation: { escapeValue: false },
    initImmediate: false,
    defaultNS: 'common',
    returnNull: false,
});

export const langs = ['es', 'en'];

export default createI18nStore(i18next);





