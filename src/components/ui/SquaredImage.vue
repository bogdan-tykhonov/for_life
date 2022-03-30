<template>
  <div 
    class="relative w-full before:block before:pt-[100%]"
  >
    <div
      :class="['bg-no-repeat bg-center bg-cover absolute inset-0 w-full ', $attrs.class]"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SquaredImage',
  inheritAttrs: false
};
</script>
