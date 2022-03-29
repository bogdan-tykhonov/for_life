<template>
  <h3
    class="text-primary font-bold text-4xl"
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

