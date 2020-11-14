import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// All i18next configuration options:
// https://www.i18next.com/overview/configuration-options

// React-specific example:
// https://react.i18next.com/latest/using-with-hooks

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          'Interior Design': 'Interior Design',
          'Architectural Photo': 'Architectural Photo',
          'Contacts': 'Contacts',
          'Contact Us': 'Contact Us',
          'Contact Us Text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra, tortor vitae volutpat vehicula, massa neque porta diam, at convallis massa eros ac nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus eget nibh quis velit bibendum imperdiet justo.',
          'Requisites': 'Requisites',
          'Registration Number': 'Registration Number',
          'VAT Number': 'VAT Number',
          'Legal Address': 'Legal Address',
          'Legal Address Value': 'Talivalza iela 21A-20, Riga, <1>LV-1006, Latvia</1>',
          'Bank': 'Bank',
          'SWIFT Code': 'SWIFT Code',
        }
      },
      lv: {
        translation: {
          'Interior Design': 'Interjera dizains',
          'Architectural Photo': 'Arhitektūras foto',
          'Contacts': 'Kontakti',
          'Contact Us': 'Sazinies ar mums',
          'Contact Us Text': 'Sed id eleifend nisl. Cras bibendum ultricies sem in semper. Pellentesque vulputate turpis in mi venenatis, id volutpat metus venenatis. Mauris gravida ligula ut nunc aliquet, posuere vulputate magna bibendum. Integer pellentesque enim eu tempus consequat. Morbi urna mi, aliquet in ante non, porttitor.',
          'Requisites': 'Rekvizīti',
          'Registration Number': 'Reģistrācijas numurs',
          'VAT Number': 'PVN numurs',
          'Legal Address': 'Juridiskā adrese',
          'Legal Address Value': 'Tālivalža iela 21A-20, Rīga, <1>LV-1006, Latvija</1>',
          'Bank': 'Banka',
          'SWIFT Code': 'SWIFT kods',
        }
      },
    },

    // All supported languages: if the language is not detected, the first fallback is used
    fallbackLng: ['en', 'lv'],
    supportedLngs: ['en', 'lv'],

    // All i18next language detection configuration options:
    // https://www.npmjs.com/package/i18next-browser-languagedetector
    detection: {
      order: ['path', 'cookie'],
      caches: ['cookie'],
      excludeCacheFor: ['cimode'],
    },

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
