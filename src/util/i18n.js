import I18n from 'i18n-js';
import * as RNLOCALIZE from 'react-native-localize';

import es from '../locales/es';
import en from '../locales/en';
import pt from '../locales/pt';

const locales = RNLOCALIZE.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.translations = {
  en,
  pt,
  es,
};
export default I18n;
