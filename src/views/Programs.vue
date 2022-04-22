<template>
  <section class="pt-4 sm:pt-8">
    <Subtitle :title="$t('military_help')" />

    <p
      class="mt-4 sm:mt-8 text-lg sm:text-xl font-bold"
      v-html="$t('zsu_help')"
    />

    <ul
      class="list-disc flex flex-col gap-2 mt-4 pl-4"
      v-html="$t('help_list')"
    />

    <p
      class="mt-4 sm:mt-8 sm:text-xl"
      v-text="$t('military_help_text_1')"
    />

    <p
      class="mb-4 mt-4 sm:mb-8 sm:text-xl"
      v-html="$t('military_help_text_2')"
    />

    <img
      :src="helpImage"
      :alt="$t('military_help')"
    >

    <Subtitle
      class="mt-4 sm:mt-8"
      :title="$t('humanitarian_help')"
    />

    <p
      class="mt-4 sm:mt-8 sm:text-xl"
      v-text="$t('humanitarian_desc')"
    />

    <p
      class="mt-4 sm:mt-8 sm:text-xl"
      v-text="$t('humanitarian_desc2')"
    />

    <p
      class="mt-4 sm:mt-8 sm:text-xl"
      v-text="$t('humanitarian_help_text_1')"
    />

    <p
      class="mb-4 mt-4 sm:mb-8 sm:text-xl"
      v-html="$t('humanitarian_help_text_2')"
    />

    <img
      :src="helpImage"
      :alt="$t('humanitarian_help')"
    >
  </section>
</template>

<script>
import HelpImage from '@images/help1.jpeg';

import Subtitle from '../components/ui/Subtitle';
export default {
  name: 'Programs',
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
      "zsu_help": "Забезпечення Збройних Сил України:",
      "help_list": "<li>Бронежилети</li><li>Шоломи</li><li>Аптечки</li><li>GPS-трекери</li><li>Акумулятори</li><li>Додатковий мобільний телефон</li><li>Батареї</li><li>Картки пам’яті</li><li>Теплі речі</li><li>Продукти харчування</li><li>Продукти харчування</li><li>Медикаменти</li>",
      "military_help_text_1": "Якщо кожен з нас зрозуміє, що не допоможи ми сьогодні нашим хлопцям на передовій (залишивши лопату вдома), то повірти наступного тижня саме цією лопатою ми можемо хоронити вже наших родичів.",
      "military_help_text_2": "Ми намагаємося зробити все можливе та неможливе для наших хлопців ЗСУ – ми купуємо бронежилети, каски, рації, розгрузки, обмундирування, їжу та намагаємося знайти все, що потрібно, аби ворог розумів <span class=\"text-primary font-bold\">ми вся УКРАЇНА</span> з нашими хлопцями саме на тій передовій",        
      "humanitarian_help": "Допомога населенню",
      "humanitarian_desc": "Ми забезпечуємо людей іжею, допомагаємо ліками, одягом. Надаємо психологічну підтримку і притулок для тих, хто втратив домівки.",
      "humanitarian_desc2": "Створення осередку (HUB) у м. Кремнчуг для біженців із Маріуполя(проект на етапі розробки).Облаштування місць розміщення біженців та громадян, які через бойові дії залишили місце свого проживання;",
      "humanitarian_help_text_1": "Ми намагаємося допомогти людям, які залишилися просто неба, тому що до них прийшов \"русскій мір\". Вісім років тому ми всі зробили дуже велику помилку, коли вважали, що стріляють не біля нас, там самі розберуться, але не зараз, ця помилка повинна навчити усіх нас, тому, що сьогодні вони, а завтра ми.",
      "humanitarian_help_text_2": "Ми всі діти однієї країни нашої <span class=\"text-primary font-bold\">неньки УКРАЇНИ</span>. Якщо хтось загубив кров, ми допоможемо. Завдяки вам усім ми годуємо багато сімей, ми допомагаємо ліками, одежею, та надаємо психологічну підтримку",
    },
    "en": {
      "zsu_help": "Support to the Armed Forces of Ukraine",
      "help_list": "<li>Bulletproof vastes</li><li>Battle helmet</li><li>First aid kid </li><li>GPS-tracker</li><li>Accumulators</li><li>Additional mobile phones</li><li>Batteries</li><li>Flash memory cards</li><li>Warm clothes</li><li>Food</li><li>Medicines</li><li>Медикаменти</li>",
      "military_help_text_1": "If each of us understands that it will not help me today to our guys on the front line (leaving the shovel at home), then next week we can bury our shovel with this shovel.",
      "military_help_text_2": "We try to do everything possible and impossible for our guys in the Armed Forces - we buy bulletproof vests, helmets, walkie-talkies, unloading, uniforms, food and try to find everything you need so that the enemy understands <span class=\"text-primary font-bold\">the whole UKRAINE</span> with our guys on the front line.",    
      "humanitarian_desc": "We serve people with food, medicines and clothes. We provide psychological support and shelters for those who have lost their homes",
      "humanitarian_desc2": "Establishment of HUB in Kremenchug for refugees from Mariupol (project is under development). Arrangement of accommodation for people who left their homes because of war.",
      "humanitarian_help": "Humanitarian help",
      "humanitarian_help_text_1": "We try to help people who are left out in the open because I came to them \"Russian peace\". Eight years ago we all made a very big mistake when we thought that they were not shooting near us, they would figure it out themselves, but not now - this mistake should teach us all, because today they are and tomorrow we are.",
      "humanitarian_help_text_2": "We are all children of one country of <span class=\"text-primary font-bold\">our mother UKRAINE.</span> If someone has lost blood, we will help. Thanks to all of you, we feed many families, we help with medicine, clothes, and provide psychological support.",    
    }
  }
</i18n>
