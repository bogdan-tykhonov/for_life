<template>
  <Header class="text-black" />
  
  <main class="max-w-[1270px] mx-auto text-black">
    <router-view />
  </main>

  <Footer />
</template>

<script>
import Footer from './components/Footer';
import Header from './components/header/Header';

export default {
  name: 'App',
  components: {
    Header,
    Footer
    
  },
  methods: {
    
  }
};
</script>
