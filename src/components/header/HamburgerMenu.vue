<template>
  <div
    v-if="showMenu"
    class="z-max fixed inset-0"
  >
    <transition
      :duration="{enter: 300, leave: 200}"
      enter-from-class="opacity-0"
      enter-active-class="ease-out duration-300"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-to-class="opacity-0"
      @before-enter="showMenuContent = true;"
      @before-leave="showMenuContent = false;"
      @after-leave="showMenu = false;"
    >
      <div
        v-if="showMenuOverlay"
        class="fixed inset-0 bg-gray-transparent"
        aria-hidden="true"
      />
    </transition>


    <transition
      :duration="{enter: 300, leave: 200}"
      enter-from-class="translate-x-full"
      enter-active-class="ease-out duration-300"
      enter-to-class="translate-x-0"
      leave-from-class="translate-x-0"
      leave-active-class="ease-in duration-200"
      leave-to-class="translate-x-full"
    >
      <nav
        v-if="showMenuContent"
        class="bg-white overflow-hidden shadow-xl transition-all h-screen fixed right-0 top-0 flex flex-col pt-25 w-[300px]"
      >
        <div
          class="flex-center w-11 h-11 rounded-full bg-extra-gray-4 absolute top-4 right-4 hover:bg-gray-dark transition-colors duration-200 cursor-pointer"
          @click="close"
        >
          <CloseIcon />
        </div>

        <ul class="flex flex-col">
          <li
            v-for="(link, index) in routes"
            :key="`navLink${index}`"
            class="pl-7 text-xl font-bold border-t last:border-b hover:text-primary-hover group border-gray-border py-6 cursor-pointer transition-colors duration-200"
            :class="{'text-primary hover:!text-primary ': link.active}"
          >
            <router-link
              class="group-hover:scale-90 block duration-200 transition-transform"
              :to="{
                name: link.name
              }"
              @click="close"
              v-text="link.label"
            />
          </li>
        </ul>

        <div
          v-click-outside="() => showSelect = false"
          class="relative w-full h-19"
          @click.prevent
        >
          <button
            class="w-full pl-7 py-6 h-full text-left text-xl font-bold  border-b border-gray-border text-primary hover:text-primary-hover transition-colors duration-200"
            :class="{'hover:!border-primary hover:!text-primary': showSelect}"
            @click="() => showSelect = !showSelect"
          >
            <span
              v-text="currentLocale"
            />
          </button>

          <transition name="fade">
            <div
              v-show="showSelect"
              class="absolute top-[calc(100%-10px)] z-10 bg-white w-full overflow-hidden border border-t-0 text-primary text-xl font-bold border-primary"
            >
              <p
                v-for="(locale, index) in normilizedLocale"
                :key="`locale${index}`"
                class="pl-7 py-2 cursor-pointer hover:bg-gray transition-colors hover:text-white duration-200"
                :class="{'text-white bg-primary hover:bg-primary': currentLocale === locale}"
                @click="changeLocale(locale)"
                v-text="locale"
              />
            </div>
          </transition>
        </div>
      </nav>
    </transition>
  </div>
</template>

<script>
import LocaleSelect from './LocaleSelect';
import CloseIcon from '../icons/CloseIcon';
const htmlOverflow = getComputedStyle(document.documentElement).overflow;

export default {
  name: 'HamburgerMenu',
  components: {
    CloseIcon,
    LocaleSelect
  },
  extends: LocaleSelect,
  props: {
    routes: {
      type: Array,
      required: true 
    }
  },
  data () {
    return {
      showMenu: false,
      showMenuOverlay: false,
      showMenuContent: false
    };
  },
  methods: {
    show () {
      if (htmlOverflow !== 'visible') {
        document.documentElement.style.overflow = 'visible';
      }
      document.body.classList.add('overflow-hidden');

      this.showMenu = true;
      this.$nextTick(() => {
        this.showMenuOverlay = true;
      });
    },

    close () {
      if (htmlOverflow !== 'visible') {
        document.documentElement.style.overflow = htmlOverflow;
      }
      document.body.classList.remove('overflow-hidden');
      
      document.body.classList.remove('overflow-hidden');
      this.showMenuOverlay = false;
    }
  }
};
</script>
