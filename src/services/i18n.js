import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';
import en from '../i18n/en.json';

let i18nInit = () => {
  // register('en', () => import('../i18n/en.json'));
  addMessages('en', en);
  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator()
  });
};

export { i18nInit }