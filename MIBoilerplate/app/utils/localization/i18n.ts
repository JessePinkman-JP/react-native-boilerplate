import { I18n } from 'i18n-js';

import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';

export enum AppLanguages {
  En = 'en',
  Es = 'Es',
  Fr = 'fr',
}

const i18n = new I18n();

i18n.enableFallback = true;

i18n.translations = {
  en,
  es,
  fr,
};
i18n.locale = AppLanguages.En;
i18n.defaultLocale = AppLanguages.En;

export default i18n;
