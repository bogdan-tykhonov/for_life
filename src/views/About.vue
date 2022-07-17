<template>
  <section>
    <Subtitle :title="$t('about')" />

    <p
      class="sm:text-xl my-4"
    >
      “<span
        class="font-bold text-primary"
        v-text="$t('ukraine_is_us')"
      />{{ $t('about_text_1') }}
    </p>

    <p
      class="sm:text-xl my-4"
      v-text="$t('about_text_2')"
    />

    <p
      class="sm:text-xl my-4"
      v-text="$t('about_text_3')"
    />

    <p
      class="sm:text-xl my-4"
      v-text="$t('about_text_4')"
    />

    <p
      class="sm:text-xl my-4"
    >
      {{ $t('about_text_5') }}
      <span
        class="font-bold text-primary"
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
      "about_text_1": "”- це волонтерська спільнота, що заснована Ольгою Дудніченко та Андрієм Горячкіним",
      "about_text_2": "Зараз наша команда налічує більше 25 небайдужих хлопців і дівчат, які з перших днів війни самовідданно допомогають тим, хто цього потребує.",
      "about_text_3": "Ми закуповуємо  екіпірування, обладнання, медичні засоби для військових. Збираємо гуманітарну допомогу для цивільного населення. За власні кошти займаємося евакуацією людей,  звичне життя яких було зруйновано “русским миром”.",
      "about_text_4": "Усі кошти, що надходять на рахунок фонду ми витрачаємо на потреби українських військових та гуманітарну допомогу.",
      "about_text_5": "Дякуємо, що долучаєтеся!",
      "ukraine_is_us": "УКРАЇНА - ЦЕ ВСІ МИ"
    },
    "en": {
      "about_text_1": "“- is volonteer comunity which was founded by Olga Dudnichenko and Andriy Goryachkin",
      "about_text_2": "As for now, our team unites 25 people. Starting from the first days of the war, they help for those who is in need.",
      "about_text_3": "We purchase kit, equipment and medicines for the Armed Forces of Ukraine. We collect humanitarian aid for civilians. We are evacuating people whose normal lives ruined by russian federation at our own expense.",
      "about_text_4": "All payments that we got we spend for needs of the Armed Forces and humanitarian aid. ",
      "about_text_5": "Thanks you for joining!",
      "ukraine_is_us": "All of us are Ukraine!"
    }
  }
</i18n>
