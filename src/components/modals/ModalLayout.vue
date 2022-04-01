<template>
  <div
    v-if="showModal"
    class="fixed z-max inset-0 overflow-scroll"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="overflow-y-auto text-center block p-0 h-max"
    >
      <Transition
        :duration="{enter: 200, leave: 200}"
        enter-from-class="opacity-0"
        enter-active-class="ease-out duration-300"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-active-class="ease-in duration-200"
        leave-to-class="opacity-0"
        @before-enter="showModalContent = true;"
        @before-leave="showModalContent = false;"
        @after-leave="showModal = false;"
      >
        <div
          v-if="showModalOverlay"
          class="fixed inset-0 bg-gray-transparent"
          aria-hidden="true"
        />
      </Transition>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="inline-block align-middle h-screen"
        aria-hidden="true"
      >&#8203;</span>

      <Transition
        :duration="{enter: 200, leave: 200}"
        enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enter-active-class="ease-out duration-300"
        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
        leave-from-class="opacity-100 translate-y-0 sm:scale-100"
        leave-active-class="ease-in duration-200 opacity-0"
        leave-to-class="translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div
          v-if="showModalContent"
          :class="wrapStyles"
          :style="modalStyles"
          class="inline-block bg-white rounded-lg text-left shadow-xl transform transition-all align-middle w-full"
        >
          <slot />
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>

const htmlOverflow = getComputedStyle(document.documentElement).overflow;

export default {
  name: 'ModalLayout',
  props: {
    wrapStyles: {
      type: [Array, Object],
      default: () => ([])
    },
    showCloseBtn: {
      type: Boolean, 
      default: true
    },
    maxWidth: {
      type: Number,
      default: 600
    },
    closeDelay: {
      type: Number,
      default: null
    },
    closeIconStyle: {
      type: String,
      default: ''
    }
  },
  emits: ['close'],
  data () {
    return {
      showModal: false,
      showModalOverlay: false,
      showModalContent: false,
      mobilePaddingNum: 35,
      containerWidth: window.innerWidth,
      closeTimeOut: null
    };
  },
  computed: {
    modalStyles () {
      const computedMaxWidth = this.containerWidth < 640
        ? this.containerWidth - this.mobilePaddingNum * 2 
        : this.maxWidth;

      return {
        maxWidth: `${ computedMaxWidth }px`
      };
    }
  },
  watch: {
    showModalContent (val) {
      if (val && this.closeDelay) {
        this.closeTimeOut = setTimeout(() => {
          this.close();
        }, this.closeDelay);
      }
    }
  },
  unmounted () {
    clearTimeout(this.closeTimeOut);
  },
  methods: {
    show () {
      if (htmlOverflow !== 'visible') {
        document.documentElement.style.overflow = 'visible';
      }
      document.body.classList.add('overflow-hidden');

      this.showModal = true;
      this.$nextTick(() => {
        this.showModalOverlay = true;
      });
    },
    
    close () {
      this.$emit('close');

      if (htmlOverflow !== 'visible') {
        document.documentElement.style.overflow = htmlOverflow;
      }
      
      document.body.classList.remove('overflow-hidden');

      this.showModalOverlay = false;
    }
  }
};
</script>
