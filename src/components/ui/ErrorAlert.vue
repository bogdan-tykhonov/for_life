<template>
  <transition
    name="fade"
    appear
  >
    <p
      class="text-red-black text-sm text-center bg-red-light p-4 rounded-md"
      v-text="error"
    />
  </transition>
</template>

<script>
export default {
  name: 'ErrorAlert',
  props: {
    error: {
      type: String,
      default: ''
    }
  }
};
</script>
