<template>
  <section class="pt-4 sm:pt-10">
    <Subtitle :title="$t('about')" />

    <p
      class="sm:text-xl my-4"
      v-text="$t('about_text_1')"
    />

    <p
      class="sm:text-xl my-4"
      v-text="$t('about_text_2')"
    />

    <p
      class="sm:text-xl my-4 sm:mb-8"
    >
      {{ $t('about_text_3') }} <span
        class="text-primary font-bold"
        v-text="$t('ukraine_is_us')"
      />
    </p>

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
      "about_text_1": "24 лютого 5 годин ранку, як тільки ворог почав бомбити нашу землю, саме тоді стало зрозуміло, як найшвидше потрібна допомога, бо без всіх нас немає України.",
      "about_text_2": "Я, Дудніченко Ольга Володимирівна та Горячкін Андрій Андрійович заснували цей фонд для допомоги ЗСУ та людям, які потрапили під гусениці танка під назвою русскій мір.",
      "about_text_3": "Наша команда нараховує дуже багато людей, які не байдужі до горя, яке ввійшло в хати багатьох наших українців. Це хлопці та дівчата, які допомогають зі збором коштів, розвозять їжу, допомогають за власні кошти вивозити людей з місць де з’явилося зло, це всі ми разом, бо ",
      "ukraine_is_us": "УКРАЇНА - ЦЕ ВСІ МИ"
    },
    "en": {
      "about_text_1": "On February 24, at 5 o'clock in the morning, as soon as the enemy began to bomb our land, it became clear that help was needed as soon as possible, because without all of us there is no Ukraine.",
      "about_text_2": "I, Dudnichenko Olga Vladimirovna and Goryachkin Andrey Andreevich established this fund for the help of ZSU (Armed Forces of Ukraine) and the people who got under caterpillars of the tank under the name \"Russian measure.\"",
      "about_text_3": "Our team has a lot of people who are not indifferent to the grief that has entered the homes of many of our Ukrainians. These are boys and girls who help with fundraising, deliver food, help to take people out of places where evil has appeared at their own expense, it's all of us together, because ",
      "ukraine_is_us": "UKRAINE IS ALL OF US"
    }
  }
</i18n>
