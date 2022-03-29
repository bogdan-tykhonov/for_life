<template>
  <input
    v-model="model"
    class="placeholder:text-center placeholder:text-gray-border w-full px-3 focus:ring-1 ring-primary bg-white border border-gray-border rounded-lg h-15 text-xl"
    :placeholder="placeholder"
  >
</template>

<script>
import modelMixin from '@mixins/model-mixin';

export default {
  name: 'Input',
  mixins: [modelMixin],
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  }
};
</script>
