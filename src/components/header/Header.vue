<template>
  <header class="py-15 border-b border-gray">
    <div class="max-w-[1270px] mx-auto w-full flex items-center gap-10">
      <LogoIcon />

      <nav class="flex-1 flex gap-15">
        <ul class="flex flex-1 justify-between items-center">
          <li
            v-for="(link, index) in routes"
            :key="`navLink${index}`"
            class="text-xl font-medium cursor-pointer hover:opacity-70 transition-opacity duration-200"
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
            class="!text-lg w-45"
            :title="$t('want_help')"
          />

          <LocaleSelect />
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import LocaleSelect from './LocaleSelect';
import BtnPrimary from '../ui/BtnPrimary';
import LogoIcon from '../icons/LogoIcon';

export default {
  name: 'Header',
  components: {
    LogoIcon,
    BtnPrimary,
    LocaleSelect
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
