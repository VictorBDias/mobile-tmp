import { LanguageDetectorModule } from 'i18next';
import { NativeModules, Platform } from 'react-native';

import { LanguagesType } from '../translations.interfaces';

const defaultLang = 'en';

const { SettingsManager, I18nManager } = NativeModules;

export const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  init: () => {},
  cacheUserLanguage: () => {},
  detect: () => {
    const supportedLanguages: LanguagesType[] = ['en', 'pt'];
    const locale =
      Platform.OS === 'ios'
        ? SettingsManager?.settings?.AppleLocale ||
          SettingsManager?.settings?.AppleLanguages[0] ||
          ''
        : I18nManager?.localeIdentifier || '';

    const [lowerCaseLocale] = locale.split('_');

    if (supportedLanguages.includes(lowerCaseLocale)) {
      return lowerCaseLocale;
    }

    return defaultLang;
  },
};
