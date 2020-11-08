import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

// All i18next configuration options:
// https://www.i18next.com/overview/configuration-options

// React-specific example:
// https://react.i18next.com/latest/using-with-hooks

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          'Interior Design': 'Interior Design',
          'Architectural Photo': 'Architectural Photo',
          'Contacts': 'Contacts',
        }
      },
      lv: {
        translation: {
          'Interior Design': 'Interjera dizains',
          'Architectural Photo': 'Arhitektūras foto',
          'Contacts': 'Kontakti',
        }
      },
    },

    // Default language hardcoded to English, consider using LanguageDetector instead
    lng: 'en',
    fallbackLng: ['en', 'lv'],

    // Enable to debug configuration issues
    debug: false,

    // Disabled, since English translations are used as keys
    keySeparator: false,

    interpolation: {
      // Not needed for React, as it escapes by default
      escapeValue: false,
    },

    react: {
      // While all translations are embedded, Suspense is not needed
      useSuspense: false,
    },
  })

export default i18n
