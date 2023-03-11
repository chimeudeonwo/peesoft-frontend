import i18next from 'i18next';
import en from './translate/en.json'
import de from './translate/de.json'

export const InitI18n = () => {
    // TODO: Detect user language and set it as default else use english as default
    const defaultLanguage = 'en';

    i18next.init({
        interpolation: { escapeValue: false },  // React already does escaping
        lng: defaultLanguage,                              // language to use
        resources: {
            en: {
                common: en               // 'common' is our custom namespace
            },
            de: {
                common: de
            },
        },
    });
}