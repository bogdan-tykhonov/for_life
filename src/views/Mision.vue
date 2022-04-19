<template>
  <section class="pt-4 sm:pt-10">
    <Subtitle :title="$t('mision')" />

    <p
      class="sm:text-xl mt-4 mb-8 sm:mt-5 sm:mb-12"
      v-text="$t('mission_text')"
    />

    <div class="flex items-end">
      <img
        class="w-12 sm:w-27 mr-4 sm:mr-10"
        :src="heartHands"
        alt="Heart hands"
      >

      <h2
        class="text-lg sm:text-4xl font-bold text-primary"
        v-text="$t('innocentity')"
      />
    </div>

    <p
      class="mt-4 mb-2 sm:mt-5 sm:mb-4 sm:text-xl"
      v-text="$t('innocentity_text')"
    />

    <p
      class="mt-4 mb-8 sm:mb-12 sm:text-xl"
      v-text="$t('innocentity_text2')"
    />

    <div class="flex items-end">
      <img
        class="w-12 mr-4 sm:w-27 sm:mr-10"
        :src="handImg"
        alt="Hand"
      >

      <h2
        class="text-lg sm:text-4xl font-bold text-primary"
        v-text="$t('voluntariness')"
      />
    </div>

    <p
      class="mt-4 mb-2 sm:mt-5 sm:mb-4 sm:text-xl"
      v-text="$t('voluntariness_text')"
    />

    <p
      class="mt-4 sm:mt-5 mb-8 sm:mb-12 sm:text-xl"
      v-text="$t('voluntariness_text2')"
    />

    <div class="flex items-end">
      <img
        class="w-12 mr-4 sm:w-27 sm:mr-10"
        :src="handsShake"
        alt="Hands shake"
      >

      <h2
        class="text-lg sm:text-4xl font-bold text-primary"
        v-text="$t('honesty')"
      />
    </div>

    <p
      class="mt-4 mb-2 sm:mt-5 sm:mb-4 sm:text-xl"
      v-text="$t('honesty_text')"
    />

    <p
      class="mt-4 sm:mt-5 sm:text-xl"
      v-text="$t('honesty_text2')"
    />
  </section>
</template>

<script>
import heartHands from '@images/heartHands.svg';
import handsShake from '@images/handsShake.svg';
import handImg from '@images/hand.svg';

import Subtitle from '../components/ui/Subtitle';

export default {
  name: 'OurMision',
  components: {
    Subtitle
  },
  data () {
    return {
      heartHands: heartHands,
      handsShake: handsShake,
      handImg: handImg
    };
  }
};
</script>

<i18n>
  {
    "ua": {
      "mission_text": "Надати допомогу військовим, які захищають наше життя на лінії фронту. Допомогти тим, хто втратив або змушений покинути дім через війну.",
      "mission_text2": "Благодійність - це процес, який передбачає дотримання механізму, правила якого поширюються на всіх без винятку його учасників: фізичних і юридичних осіб. Хочемо розповісти вам про наші основні принципи благодійності:",
      "innocentity": "Безкорисливість",
      "innocentity_text": "Головна мета благодійності - безкорислива допомога тим, хто цього потребує. Це усвідомлений вибір кожного учасника нашої спільноти.",
      "innocentity_text2": "Будь-яка благодійна допомога повинна надаватися на безоплатній основі, інакше вона втрачає будь-який сенс. Перед початком роботи потрібно відповісти на питання про те, яку мету ви переслідуєте. Саме вона визначає мотивацію, а також визначать вектор подальших дій. Мета не повинна бути корисливою - принести суспільству користь допоможе усвідомлений вибір, без ілюзій і надій.",
      "voluntariness": "Добровільність",
      "voluntariness_text": "Кожен з нас добровільно прийняв рішення допомогти тим, хто цього потребує, як ніуоли.  Дій за покликом серця!",
      "voluntariness_text2": "Рішення про участь у благодійності повинно бути добровільним, за умови відсутності впливу зовнішніх факторів. Також варто приділити увагу чесності. У даній сфері діяльності людям завжди буде, що ділити: репутацію, фінансування проектів і т.д. Без співпраці ви навряд чи зможете досягти результату, тому необхідно шукати однодумців, прагнути до партнерства, вчитися домовлятися.",
      "honesty": "Чесність",
      "honesty_text": "Чесність це основа благодійності. Шукайте однодумців, тих то  розділяє ваші цілі і прагнення.",
      "honesty_text2": "Рішення про участь у благодійності повинно бути добровільним, за умови відсутності впливу зовнішніх факторів. Також варто приділити увагу чесності. У даній сфері діяльності людям завжди буде, що ділити: репутацію, фінансування проектів і т.д. Без співпраці ви навряд чи зможете досягти результату, тому необхідно шукати однодумців, прагнути до партнерства, вчитися домовлятися."
    },
    "en": {
      "mission_text": "We support the Armed Forces of Ukraine who are defending our lives on the front lines. we help people who have lost or been forced to leave their homes because of the war.",
      "mission_text2": "Gratitude is a process that transfers to a dormant mechanism, the rules of which are extended to all without a fault of its participants: physical and legal rights. I would like to tell you about our main principles of beneficence:",
      "innocentity": "Innocentity",
      "innocentity_text": "The main purpose of charity is selfless help to those who need it. This is a conscious choice of every member of our community.",
      "innocentity_text2": "Be kind help guilty basics, otherwise it will be spent sens. Before the cob of roboti it is necessary to ask for food about those Yaku met you resleduєte. same won signifies motivation, as well as to designate a vector of distant diy. Meta is not guilty of buti cunning - bring mischief to the soul additional notifications vibir, without іluziy i nadіy.",
      "voluntariness": "Voluntariness",
      "voluntariness_text": "Each of us has voluntarily decided to help people who is in need right now. follow the call of your heart!",
      "voluntariness_text2": "The decision to participate in charity should be voluntary, provided that there are no external factors. You should also pay attention to honesty. In this area, people will always have something to share: reputation, project financing, etc. Without cooperation, you are unlikely to achieve results, so you need to look for like-minded people, strive for partnership, learn to negotiate.",
      "honesty": "Honesty",
      "honesty_text": "Чесність це основа благодійності. Шукайте однодумців, тих то  розділяє ваші цілі і прагнення.",
      "honesty_text2": "The decision to participate in charity should be voluntary, subject to external factors. Also worth a look attention to honesty. In this field of activity, people will always have something to share: reputation, project financing, etc. Without cooperation you are unlikely you can achieve results, so you need to look for like-minded people, strive for partnership, learn to negotiate."
    }
  }
</i18n>
