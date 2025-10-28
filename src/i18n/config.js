import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from './translations';

// Detect browser language
const getBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage;
  // Extract language code (e.g., 'zh-CN' -> 'zh', 'en-US' -> 'en')
  const langCode = browserLang.split('-')[0];
  // Check if we support this language, otherwise fallback to 'en'
  return translations[langCode] ? langCode : 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: getBrowserLanguage(), // auto-detect browser language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
