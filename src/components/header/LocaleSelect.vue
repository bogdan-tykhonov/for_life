<template>
  <div
    v-click-outside="() => showSelect = false"
    class="relative w-20 h-13"
    @click.prevent
  >
    <button
      class="w-full px-4 h-full text-xl font-bold rounded-lg flex-center border border-primary text-primary hover:text-primary-hover hover:border-primary-hover transition-colors duration-200 bg-arrow"
      :class="{'hover:!border-primary hover:!text-primary': showSelect}"
      @click="() => showSelect = !showSelect"
    >
      <span
        class="mr-1"
        v-text="currentLocale"
      />

      <ShortArrowIcon />
    </button>

    <transition name="bounce">
      <div
        v-show="showSelect"
        class="absolute top-[calc(100%-10px)] z-10 bg-white w-full overflow-hidden rounded-b-lg border border-t-0 text-prmary text-xl font-bold border-primary"
      >
        <p
          v-for="(locale, index) in normilizedLocale"
          :key="`locale${index}`"
          class="px-4 py-2 cursor-pointer hover:bg-gray transition-colors hover:text-white duration-200"
          :class="{'text-white bg-primary hover:bg-primary': currentLocale === locale}"
          @click="changeLocale(locale)"
          v-text="locale"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import ShortArrowIcon from '../icons/ShortArrowIcon';

export default {
  name: 'LocaleSelect',
  components: {
    ShortArrowIcon
  },
  data () {
    return {
      showSelect: false
    };
  },
  computed: {
    currentLocale () {
      return this.$i18n.locale.toUpperCase();
    },

    normilizedLocale () {
      const locales = [...this.$i18n.availableLocales];

      locales.sort((a, b) => {
        if (a === this.$i18n.locale) {
          return -1;
        } else if (b === this.$i18n.locale) {
          return 1;
        } 

        return 0;
      });

      return locales.map(locale => locale.toUpperCase());
    }
  },
  methods: {
    changeLocale (locale) {
      if (locale === this.currentLocale) {
        this.showSelect = false;
        return;
      }

      this.$i18n.locale = locale.toLowerCase();
      this.showSelect = false;
    }
  }
};
</script>
