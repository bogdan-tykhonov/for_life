<template>
  <button
    class="bg-primary hover:bg-primary-hover transition-colors duration-200 w-full h-13 text-white font-bold text-xl p-4 rounded-lg flex-center"
    :class="{'cursor-not-allowed bg-gray hover:!bg-gray': disabled}"
    :disabled="disabled"
  >
    <SpinnerIcon v-if="isLoading" />
    
    <span
      v-else
      v-text="title"
    />
  </button>
</template>

<script>
import SpinnerIcon from '../icons/SpinnerIcon';
export default {
  name: 'BtnPrimary',
  components: {
    SpinnerIcon
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
