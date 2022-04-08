<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="showModal"
        class="fixed z-max inset-0 bg-gray-transparent flex-center transition-all duration-300 "
      >
        <div
          id="modal-container"
          :class="wrapStyles"
          :style="modalStyles"
          class="inline-block bg-white rounded-lg text-left transition-all duration-300 shadow-xl transform align-middle w-full"
        >
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
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
    showModal (val) {
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
    },
    
    close () {
      this.$emit('close');

      if (htmlOverflow !== 'visible') {
        document.documentElement.style.overflow = htmlOverflow;
      }
      
      document.body.classList.remove('overflow-hidden');

      this.showModal = false;
    }
  }
};
</script>
