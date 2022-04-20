<template>
  <button
    class="bg-primary hover:bg-primary-hover transition-colors duration-200 w-full h-13 text-white font-bold text-xl p-4 rounded-lg flex-center"
    :class="{'cursor-not-allowed bg-gray hover:!bg-gray': disabled || isLoading}"
    @click="handleClick"
    v-text="title"
  />
</template>

<script>
export default {
  name: 'BtnPrimary',
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
  },
  emits: ['click'],
  methods: {
    handleClick () {
      if (this.disabled || this.isLoading) {
        return;
      }

      this.$emit('click');
    }
  }
};
</script>
