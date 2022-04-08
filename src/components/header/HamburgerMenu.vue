<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="showMenu"
        class="fixed z-max inset-0 bg-gray-transparent flex-center transition-all duration-300 "
      >
        <nav
          id="hamburger-container"
          class="bg-white overflow-hidden shadow-xl transition-all duration-300 h-screen fixed right-0 top-0 flex flex-col pt-25 w-[250px] sm:w-[300px]"
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
              class="pl-7 sm:text-xl font-bold border-t last:border-b hover:text-primary-hover group border-gray-border py-4 sm:py-6 cursor-pointer transition-colors duration-200"
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
            class="relative w-full h-15 sm:h-19"
            @click.prevent
          >
            <button
              class="w-full pl-7 py-4 sm:py-6 h-full text-left sm:text-xl font-bold  border-b border-gray-border text-primary hover:text-primary-hover transition-colors duration-200"
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
                class="absolute top-[calc(100%-10px)] z-10 bg-white w-full overflow-hidden border border-t-0 text-primary sm:text-xl font-bold border-primary"
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
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import LocaleSelect from './LocaleSelect';
import CloseIcon from '../icons/CloseIcon';
const htmlOverflow = getComputedStyle(document.documentElement).overflow;

export default {
  name: 'HamburgerMenu',
  components: {
    CloseIcon
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
      showMenu: false
    };
  },
  methods: {
    show () {
      if (htmlOverflow !== 'visible') {
        document.documentElement.style.overflow = 'visible';
      }
      document.body.classList.add('overflow-hidden');

      this.showMenu = true;
    },

    close () {
      if (htmlOverflow !== 'visible') {
        document.documentElement.style.overflow = htmlOverflow;
      }
      
      document.body.classList.remove('overflow-hidden');
      this.showMenu = false;
    }
  }
};
</script>
