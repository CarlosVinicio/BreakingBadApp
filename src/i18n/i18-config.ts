import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import  enTranslation  from "./languages/en.json";
import  esTranslation  from "./languages/es.json";

const defaultLanguage = 'es';

const resources = {
  en: {
    translation: enTranslation
  },
  es: {
    translation: esTranslation
  }
}

i18n.use(initReactI18next)
  .init({
    resources, 
    lng: defaultLanguage, 
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n;