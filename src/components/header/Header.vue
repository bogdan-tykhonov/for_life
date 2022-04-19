<template>
  <header class="py-2 sm:py-5 lg:py-10 shadow-md border-b sticky top-0 bg-white z-10 border-gray">
    <Container class="flex justify-between lg:justify-start lg:flex-col xl:flex-row items-center gap-5 xl:gap-10">
      <router-link
        :to="{name: 'Home'}"
        class="w-1/2 sm:w-auto max-w-full"
      >
        <LogoIcon class="w-full" />
      </router-link>

      <nav class="flex-1 gap-5 xl:gap-15 hidden lg:flex">
        <ul class="flex flex-1 w-max xl:w-auto gap-5 justify-between items-center">
          <li
            v-for="(link, index) in routes"
            :key="`navLink${index}`"
            class="xl:text-xl font-medium cursor-pointer hover:opacity-70 transition-opacity duration-200"
            :class="{'text-primary hover:!opacity-100 ': link.active}"
          >
            <router-link
              :to="{
                name: link.name
              }"
              v-text="link.label"
            />
          </li>
        </ul>

        <div class="flex gap-5">
          <BtnPrimary
            class="!text-base xl:!text-lg w-42 xl:w-45"
            :title="$t('want_help')"
          />

          <LocaleSelect />
        </div>
      </nav>

      <BarsIcon
        class="cursor-pointer hover:text-primary-hover duration-200 lg:hidden transition-colors"
        @click="showHamburgerMenu"
      />

      <HamburgerMenu
        ref="hamburgerMenu"
        class="lg:hidden"
        :routes="routes"
      />
    </Container>
  </header>
</template>

<script>
import BarsIcon from '../icons/BarsIcon';
import HamburgerMenu from './HamburgerMenu';
import Container from '../ui/Container';
import LocaleSelect from './LocaleSelect';
import BtnPrimary from '../ui/BtnPrimary';
import LogoIcon from '../icons/LogoIcon';

export default {
  name: 'Header',
  components: {
    LogoIcon,
    BtnPrimary,
    LocaleSelect,
    Container,
    HamburgerMenu,
    BarsIcon
  },
  computed: {
    routes () {
      return [
        {
          name: 'Home',
          label: this.$t('main'),
          active: this.$route.name === 'Home'
        },
        {
          name: 'Programs',
          label: this.$t('programs'),
          active: this.$route.name === 'Programs'
        },
        {
          name: 'About',
          label: this.$t('about'),
          active: this.$route.name === 'About'
        },
        {
          name: 'Mision',
          label: this.$t('mision'),
          active: this.$route.name === 'Mision'
        },
        {
          name: 'Contacts',
          label: this.$t('contacts'),
          active: this.$route.name === 'Contacts'
        }
      ];
    }
  },
  methods: {
    showHamburgerMenu () {
      this.$refs.hamburgerMenu.show();
    }
  }
};
</script>

<i18n>
  {
    "ua": {
      "main": "Головна",
    },
    "en": {
      "main": "Main",
    }
  }
</i18n>
