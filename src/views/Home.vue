<template>
  <div>
    <section>
      <div class="bg-stop-war-mob text-primary lg:text-white h-[250px] sm:h-[540px] bg-center lg:rounded-b-lg -mx-5 md:-mx-10 lg:mx-0 lg:bg-stop-war px-3 sm:px-10 py-3 sm:py-6 text-white bg-cover  flex flex-col justify-end">
        <p
          class="text-xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-3"
          v-text="$t('ukraine_is_us')"
        />

        <p
          class="text-sm sm:text-base md:text-lg font-bold"
          v-text="$t('main_text')"
        />

        <p
          class="text-sm sm:text-base sm:my-2 md:text-lg font-bold"
          v-text="$t('main_text2')"
        />

        <p
          class="text-sm sm:text-base md:text-lg font-bold"
          v-text="$t('main_text3')"
        />
      </div>
    </section>
 
    <HelpSection
      class="mt-8"
      @show-get-help-modal="showHelpModalHandler"
    />

    <Subtitle
      class="my-8"
      :title="$t('programs')"
    />

    <div class="flex gap-5 text-white">
      <router-link
        :to="{
          name: 'Programs'
        }"
        tag="div"
        class="flex items-end rounded-md overflow-hidden w-full hover:scale-90 transition-transform duration-300"
      >
        <SquaredImage
          class="flex items-end"
          image="./img/programe_1.jpeg"
        >
          <p
            class="p-3 sm:p-10 font-bold text-lg sm:text-4xl"
            v-text="$t('military_help')"
          />
        </SquaredImage>
      </router-link>

      <router-link
        :to="{
          name: 'Programs'
        }"
        tag="div"
        class="flex items-end rounded-md overflow-hidden w-full hover:scale-90 transition-transform duration-300"
      >
        <SquaredImage
          class="flex items-end"
          image="./img/programe_2.jpeg"
        >
          <p
            class="p-3 sm:p-10 font-bold text-lg sm:text-4xl"
            v-text="$t('population_assistance')"
          />
        </SquaredImage>
      </router-link>
    </div>

    <Documents class="my-8" />

    <Subtitle
      class="my-8"
      :title="$t('reports')"
    />

    <BlockLayout class="sm:!px-10 text-2xl lg:text-4xl font-bold !gap-8 text-center lg:text-left lg:!gap-30 items-center flex-col-reverse lg:flex-row">
      <a
        class="w-[300px] h-18"
        href="https://t.me/forlife_ua"
      >
        <button class="bg-primary flex-center w-full h-full text-white rounded-lg hover:bg-primary-hover transition-colors duration-200">
          Telegram
          <TelegramIcon class="ml-3" />
        </button>
      </a>

      <p
        class="text-primary flex-1 text-lg sm:text-2xl"
        v-text="$t('reports_text')"
      />
    </BlockLayout>

    <Subtitle
      class="my-8"
      :title="$t('our_partners')"
    />

    <div class="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
      <a
        href="http://www.irf.ua/"
        class="hover:scale-90 transition-transform duration-300"
      >
        <img
          :src="fondImg1"
          alt="Міжнародний Фонд «Відродження»"
        >
      </a>

      <a
        href="https://www.care.de/"
        class="hover:scale-90 transition-transform duration-300"
      >
        <img
          :src="fondImg2"
          alt="Ocare"
        >
      </a>
    </div>

    <GetHelpModal
      ref="helpModal"
      @success="showSuccessModal"
    />

    <SuccessModal
      ref="successModal"
      :title="$t('success_modal_title')"
      :subtitle="$t('success_modal_subtitle')"
    />
  </div>
</template>

<script>
import SuccessModal from '../components/modals/SuccessModal.vue';
import SquaredImage from '../components/ui/SquaredImage';
import TelegramIcon from '../components/icons/TelegramIcon';
import BlockLayout from '../components/home/BlockLayout';
import Documents from '../components/home/Documents';
import Subtitle from '../components/ui/Subtitle';
import HelpSection from '../components/home/HelpSection';
import stopWarImg from '../img/stop.jpeg';
import GetHelpModal from '../components/modals/GetHelpModal';
import fondImg1 from '@/img/fond_logo_1.svg';
import fondImg2 from '@/img/fond_logo_2.svg';

export default { 
  name: 'Home',
  components: {
    HelpSection,
    Subtitle,
    Documents,
    BlockLayout,
    TelegramIcon,
    SquaredImage,
    GetHelpModal,
    SuccessModal
  },
  data () {
    return {
      stopWarImg: stopWarImg,
      fondImg1,
      fondImg2
    };
  },
  methods: {
    showHelpModalHandler () {
      this.$refs.helpModal.showModal();
    },
    showSuccessModal () {
      this.$refs.successModal.showModal();
    }
  }
};
</script>

<i18n>
{
  "ua": {
    "ukraine_is_us": "УКРАЇНА – ЦЕ ВСІ МИ!",
    "main_text": "24го лютого о пятій годині ранку життя кожного українця змінилось назавжди.  Наші серця болять за кожен куточок нашої Батьківщини.",
    "main_text2": "Окремо кожен з нас- це маленька краплина дощу, але всі разом ми станемо зливою, що змиє ворога з нашої землі.",
    "main_text3": "Украіна – це кожен із нас!",
    "reports": "Звіти",
    "reports_text": "Ми активно ведемо наш телеграм канал для того, щоб ви могли стежити за роботою нашого фонду",
    "our_partners": "Наші партнери"
  },
  "en": {
    "ukraine_is_us": "All of us are Ukraine!",
    "main_text": "On February 24, at five o'clock in the morning lifes of every Ukrainians changed forever. Our hearts ache for every parts of our Motherland.", 
    "main_text2": "Each of us is a small drop of the rain but together we are the downpour that will wash away the enemy from our land",
    "main_text3": "Ukraine - is each of us!",
    "reports": "Reports",
    "reports_text": "We are actively running our telegram channel so that you can follow the work of our fund",
    "our_partners": "Our partners"
  }
}
</i18n>
