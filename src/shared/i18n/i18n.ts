import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

// Niveles Senior++ / Architect:
// 1. Lazy loading vía HttpBackend para optimizar bundle inicial.
// 2. Detección automática con persistencia en localStorage delegada.
// 3. Namespaces para escalabilidad de features.

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    load: 'languageOnly', // Ignora variantes regionales como en-US
    
    // Namespaces principales
    ns: ['common', 'header', 'home', 'footer', 'categories', 'legal', 'products', 'search', 'contact', 'offers'],
    defaultNS: 'common',

    // Configuración del backend para carga dinámica
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    // Configuración de detección de idioma
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },

    // Optimización de performance
    react: {
      useSuspense: true, // Usaremos Suspense para manejar la carga de traducciones
    },

    interpolation: {
      escapeValue: false, // React ya se encarga de escapar los valores
    },

    debug: false,
  });

export default i18n;
