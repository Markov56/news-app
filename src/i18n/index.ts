import i18n, { use } from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from 'i18n/translations/en.json';
import uaTranslation from 'i18n/translations/ua.json';

use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: enTranslation,
    },
    ua: {
      translation: uaTranslation,
    },
  },
});

export default i18n;
