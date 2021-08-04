import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Contact details to use across the site
const email = 'sonya@sonya.lv'

// All i18next configuration options:
// https://www.i18next.com/overview/configuration-options

// React-specific example:
// https://react.i18next.com/latest/using-with-hooks

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      // Note: translations may contain non-breaking spaces
      en: {
        translation: {
          'Main Title': 'Sonya Pavlovich',
          'Interior Design': 'Interior Design',
          'Contact': 'Contact',
          'About Text': 'I am a furniture and interior designer. My completed projects include various furniture items, private and commercial interiors, even quite unusual things, such as travel wardrobes and live casino studios. In my designs I always try to achieve modern yet memorable look, all while using natural and sustainable materials.',
          'Contact Text': 'Contact me via email:',
          'Page Not Found': 'Page Not Found',
          'Page Not Found Text': 'This page is not found. Visit <1>the main page</1> instead.',
          'Email': email,
        }
      },
      lv: {
        translation: {
          'Main Title': 'Sofija Pavloviča',
          'Interior Design': 'Interjera dizains',
          'Contact': 'Kontakti',
          'About Text': 'I am a furniture and interior designer. My completed projects include various furniture items, private and commercial interiors, even quite unusual things, such as travel wardrobes and live casino studios. In my designs I always try to achieve modern yet memorable look, all while using natural and sustainable materials.',
          'Contact Text': 'Sazinies ar mani pa e-pastu:',
          'Page Not Found': 'Lapa nav atrasta',
          'Page Not Found Text': 'Šī lapa nav atrasta. Pāriet <1>uz sākumlapu</1>.',
          'Email': email,
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
