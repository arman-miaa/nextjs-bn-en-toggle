import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      greeting: 'Hello Arman!',
      toggleTheme: 'Toggle theme'
    }
  },
  bn: {
    translation: {
      greeting: 'হ্যালো আরমান 🌸',
      toggleTheme: 'থিম পরিবর্তন'
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
