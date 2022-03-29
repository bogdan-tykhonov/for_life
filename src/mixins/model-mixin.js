export default {
  props: {
    value: {
      required: true 
    }
  },
  emits: ['input'],
  data () {
    return {
      model: this.value
    };
  },
  watch: {
    value (val) {
      this.model = val;
    },

    model (val) {
      this.$emit('input', val);
    }
  }
};
