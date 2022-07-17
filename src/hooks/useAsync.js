import { reactive, ref } from 'vue';

export default (cb) => {
  const isLoading = ref(false);
  const error = ref(false);

  const execute = async (...args) => {
    try {
      error.value = false;
      isLoading.value = true;
      await cb(...args);
    } catch (e) {
      error.value = true;
      console.error(e);
    } finally {
      isLoading.value = false;
    }
  };

  const clearError = () => {
    error.value = false;
  };
  
  return reactive({
    isLoading,
    error,
    execute,
    clearError
  });
};
