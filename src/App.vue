<template>
  <Header class="text-black" />
  
  <main class="text-black pb-10 sm:pb-20">
    <Container>
      <router-view v-slot="{ Component }">
        <transition
          name="fade"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </Container>
  </main>


  <Footer />

  <GetHelpModal ref="helpModal" />
</template>

<script>
import Container from './components/ui/Container';
import GetHelpModal from './components/modals/GetHelpModal';
import Footer from './components/Footer';
import Header from './components/header/Header';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    GetHelpModal,
    Container
    
  },
  mounted () {
    this.emitter.on('show-get-help-modal', () => {
      this.$refs.helpModal.showModal();
    });
  }
};
</script>
