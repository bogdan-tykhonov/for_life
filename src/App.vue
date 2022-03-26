<template>
  <main class="w-[1270px] mx-auto">
    <Header />
  </main>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header
    
  },
  methods: {
    test () {
      const a = 123;
    }
  }
};
</script>
