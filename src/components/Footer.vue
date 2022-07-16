<template>
  <footer class="bg-primary text-white sm:text-xl font-medium pt-8 pb-12 mt-8">
    <Container>
      <nav class="flex justify-between sm:justify-start sm:gap-27">
        <ul class="flex flex-col gap-2 sm:gap-4">
          <li
            v-for="(link, index) in routes"
            :key="`navLink${index}`"
            class="sm:text-xl font-medium cursor-pointer hover:opacity-70 transition-opacity duration-200"
          >
            <router-link
              :to="{
                name: link.name
              }"
              v-text="link.label"
            />
          </li>
        </ul>

        <div>
          <p
            class="mb-2 sm:mb-4"
            v-text="$t('our_links')"
          />
          <div class="flex gap-6">
            <a
              class="hover:scale-110 transition-transform duration-200"
              href="https://instagram.com/forlife_ua?utm_medium=copy_link"
            >
              <InstagramIcon />
            </a>
            <a
              class="hover:scale-110 transition-transform duration-200"
              href="https://www.facebook.com/Заради-життя-109634191680207/"
            >
              <FacebookIcon />
            </a>
            <a
              class="hover:scale-110 transition-transform duration-200"
              href="https://t.me/forlife_ua"
            >
              <TelegramIcon />
            </a>
          </div>
        </div>
      </nav>

      <div class="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between mt-8">
        <a
          class="sm:text-xl font-medium cursor-pointer hover:opacity-70 transition-opacity duration-200"
          href="mailto:sakeoflifeua@gmail.com"
          v-text="'sakeoflifeua@gmail.com'"
        />

        <h3 v-text="$t('fond_name')" />
      </div>
    </Container>
  </footer>
</template>

<script>
import Container from './ui/Container';
import TelegramIcon from './icons/TelegramIcon';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';

export default {
  name: 'Footer',
  components: {
    InstagramIcon,
    FacebookIcon,
    TelegramIcon,
    Container
  },
  computed: {
    routes () {
      return [
        {
          name: 'Programs',
          label: this.$t('programs')
        },
        {
          name: 'About',
          label: this.$t('about')
        },
        {
          name: 'Mision',
          label: this.$t('mision')
        },
        {
          name: 'Contacts',
          label: this.$t('contacts')
        }
      ];
    }
  }
};
</script>

<i18n>
  {
    "ua": {
      "our_links": "Ми у соцмережах:",
      "fond_name": "БО 'БФ' 'УКРАЇНА - ЦЕ ВСІ МИ'"
    },
    "en": {
      "our_links": "We in social medias:",
       "fond_name": "CO 'CF' 'UKRAINE IS ALL OF US'"
    }
  }
</i18n>
