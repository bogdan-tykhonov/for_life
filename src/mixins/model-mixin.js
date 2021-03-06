export default {
  props: {
    modelValue: {
      required: true 
    }
  },
  emits: ['update:modelValue'],
  data () {
    return {
      model: this.modelValue
    };
  },
  watch: {
    modelValue (val) {
      this.model = val;
    },

    model (val) {
      this.$emit('update:modelValue', val);
    }
  }
};
