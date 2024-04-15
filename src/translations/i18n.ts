import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en, pt } from './languages';
import { languageDetector } from './plugins/language-detector';
import home from './modules/home';

export const resources = {
  en: {
    custom: en.customT,
    static: en.staticT,
    home: home.en,
  },
  pt: {
    custom: pt.customT,
    static: pt.staticT,
    home: home.pt,
  },
};

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    debug: false,
    fallbackLng: 'pt',
    ns: ['ptCommon', 'ptValidation', 'enCommon', 'enValidation'],
    compatibilityJSON: 'v3',
    resources,
  });

export default i18n;
