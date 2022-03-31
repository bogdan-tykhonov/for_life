<template>
  <section class="pt-4 sm:pt-10">
    <Subtitle :title="$t('about')" />

    <p
      class="sm:text-xl max-w-[700px] my-4 sm:my-5"
      v-text="$t('about_text')"
    />

    <img
      :src="helpImage"
      :alt="$t('about')"
    >
  </section>
</template>

<script>
import HelpImage from '@images/help1.jpeg';

import Subtitle from '../components/ui/Subtitle';
export default {
  name: 'About',
  components: {
    Subtitle
  },
  data () {
    return {
      helpImage: HelpImage
    };
  }
};
</script>

<i18n>
  {
    "ua": {
      "about_text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatatnon proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    "en": {
      "about_text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatatnon proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  }
</i18n>
