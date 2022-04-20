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
</template>

<script>
import Container from './components/ui/Container';
import Footer from './components/Footer';
import Header from './components/header/Header';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Container
    
  }
};
</script>
