import { createI18n } from 'vue-i18n';

export default createI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'ua',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: {
    ua: {
      'want_help': 'Хочу допомогти',
      'get_help': 'Отримати допомогу',
      'programs': 'Наші програми',
      'help': 'Допомога',
      'about': 'Про нас',
      'mision': 'Наша місія',
      'contacts': 'Контакти',
      'military_help': 'Допомога військовим'
    },
    en: {
      'want_help': 'Want to help',
      'get_help': 'Get help',
      'programs': 'Our programs',
      'help': 'Help',
      'about': 'About',
      'mision': 'Our mision',
      'contacts': 'Contacts',
      'military_help': 'Military help'
    }
  }
});
