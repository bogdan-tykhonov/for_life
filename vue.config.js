const path = require('path');

module.exports = {
  lintOnSave: 'warning',
  chainWebpack: config => {
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@intlify/vue-i18n-loader');
    config.resolve.alias
      .set('@mixins', path.resolve(__dirname, 'src/mixins'))
      .set('@images', path.resolve(__dirname, 'src/img'))
      .set('@api', path.resolve(__dirname, 'src/api'))
      .set('@hooks', path.resolve(__dirname, 'src/hooks'));
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'ua',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  }
};

