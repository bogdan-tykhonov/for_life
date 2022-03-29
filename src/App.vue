<template>
  <Header class="text-black" />
  
  <main class="max-w-[1270px] mx-auto text-black">
    <router-view />
  </main>

  <Footer />

  <GetHelpModal ref="helpModal" />
</template>

<script>
import GetHelpModal from './components/modals/GetHelpModal';
import Footer from './components/Footer';
import Header from './components/header/Header';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    GetHelpModal
    
  },
  mounted () {
    this.emitter.on('show-get-help-modal', () => {
      this.$refs.helpModal.showModal();
    });
  }
};
</script>
