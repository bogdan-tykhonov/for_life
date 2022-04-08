<template>
  <div>
    <section>
      <div class="bg-stop-war-mob text-primary lg:text-white h-[250px] sm:h-[540px] bg-center lg:rounded-b-lg -mx-5 md:-mx-10 lg:mx-0 lg:bg-stop-war px-3 sm:px-10 py-3 sm:py-6 text-white bg-cover  flex flex-col justify-end">
        <p
          class="text-xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-3"
          v-text="$t('volunteer_team')"
        />

        <p
          class="text-sm sm:text-base md:text-lg font-bold"
          v-text="$t('main_text')"
        />
      </div>
    </section>
 
    <HelpSection class="mt-8" />

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
          class="flex items-end bg-[url('./img/programe_1.jpeg')]"
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
          class="flex items-end bg-[url('./img/programe_2.jpeg')]"
        >
          <p
            class="p-3 sm:p-10 font-bold text-lg sm:text-4xl"
            v-text="$t('help')"
          />
        </SquaredImage>
      </router-link>
    </div>

    <Documents class="my-8" />

    <Subtitle
      class="my-8"
      :title="$t('reports')"
    />

    <BlockLayout class="sm:!px-10 text-2xl lg:text-4xl font-bold !gap-4 text-center lg:text-left lg:!gap-30 items-center flex-col-reverse lg:flex-row">
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

    <SuccessModal
      ref="successModal"
      :title="$t('modal_title')"
      :subtitle="$t('modal_subtitle')"
    />
  </div>
</template>

<script>
import SquaredImage from '../components/ui/SquaredImage';
import TelegramIcon from '../components/icons/TelegramIcon';
import BlockLayout from '../components/home/BlockLayout';
import Documents from '../components/home/Documents';
import Subtitle from '../components/ui/Subtitle';
import HelpSection from '../components/home/HelpSection';
import stopWarImg from '../img/stop.jpeg';

export default { 
  name: 'Home',
  components: {
    HelpSection,
    Subtitle,
    Documents,
    BlockLayout,
    TelegramIcon,
    SquaredImage
  },
  data () {
    return {
      stopWarImg: stopWarImg
    };
  }
};
</script>

<i18n>
{
  "ua": {
    "volunteer_team": "Волонтерьска спільнота",
    "main_text": "Кожен з нас- це маленька краплинка дощу ,але разом ми будемо бурею для ворога. Одна краплина в морі -це лише краплинка, але разом ми океан. Тому Україна – це всі ми . І не важливо у якій частині нашої країни болить тому що  болить у кожного з нас у кожному кутку нашої родини.",
    "reports": "Звіти",
    "reports_text": "Ми активно ведемо наш телеграм канал для того, щоб ви могли стежити за роботою нашого фонду"
  },
  "en": {
    "volunteer_team": "Volunteer community",
    "main_text": "Each of us is a small raindrop, but together we will be a storm for the enemy. One drop in the sea is just a drop, but together we are the ocean. That is why Ukraine is all of us. And it doesn't matter in which part of our country it hurts because it hurts each of us in every corner of our family.", 
    "reports": "Reports",
     "reports_text": "We are actively running our telegram channel so that you can follow the work of our fund"
  }
}
</i18n>
