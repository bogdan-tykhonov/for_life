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
      'military_help': 'Допомога військовим',
      'error_try_again': 'Сталася помилка, спробуйте ще раз',
      'success_modal_title': 'Ваша заявка успішно відправлена!',
      'success_modal_subtitle': 'Найближчим часом з вами зв\'яжеться наша команда'
    },
    en: {
      'want_help': 'Want to help',
      'get_help': 'Get help',
      'programs': 'Our programs',
      'help': 'Help',
      'about': 'About',
      'mision': 'Our mision',
      'contacts': 'Contacts',
      'military_help': 'Military help',
      'error_try_again': 'An error occurred, try again',
      'success_modal_title': 'Your form has successfully sent!',
      'success_modal_subtitle': 'Our team will contact you soon'
    }
  }
});
