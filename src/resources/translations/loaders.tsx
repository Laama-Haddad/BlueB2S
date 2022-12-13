/* eslint-disable global-require */

/**
 * This file can be used to load multiple languages
 * and using the default function in the index.tsx
 * language can be changed. This can be done through
 * React Context or Redux
 */

export default {
  en: {
    languageCode: 'en',
    countryCode: 'US',
    language: 'English (US)',
    loader: () => require('./en.json'),
  },
};
