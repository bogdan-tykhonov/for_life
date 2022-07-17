<script setup>
import { useRoute } from 'vue-router';
import Container from './components/ui/Container';
import Footer from './components/Footer';
import Header from './components/header/Header';
import { computed } from 'vue';

const route = useRoute();
const currentPage = computed(() => {
  return route.name;
});
</script>

<template>
  <Header class="text-black" />
  
  <main class="text-black pb-10 sm:pb-20">
    <Container :class="{'pt-4 sm:pt-10': currentPage !== 'Home'}">
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
