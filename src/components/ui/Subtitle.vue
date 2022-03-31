<template>
  <h3
    class="text-primary text-xl font-bold sm:text-4xl"
    v-text="title"
  />
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

