<script>
import { computed, defineProps } from 'vue';
export default {
  inheritAttrs: false
};
</script>

<script setup>
const props = defineProps({
  image: {
    type: String,
    default: ''
  }
});

const blockStyles = computed(() => {
  return {
    backgroundImage: `url('${props.image}')`
  };
});
</script>

<template>
  <div 
    class="relative w-full before:block before:pt-[100%]"
  >
    <div
      :class="['bg-no-repeat bg-center bg-cover absolute inset-0 w-full ', $attrs.class]"
      :style="blockStyles"
    >
      <slot />
    </div>
  </div>
</template>

