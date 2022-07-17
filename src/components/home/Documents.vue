<script setup>
import 'photoswipe/dist/photoswipe.css';
import 'vue3-carousel/dist/carousel.css';
import ApiCall from '@api';
import useGallery from '@hooks/useGallery';
import useAsync from '@hooks/useAsync';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

import Skeleton from '../ui/Skeleton';
import BlockLayout from './BlockLayout';
import Subtitle from '../ui/Subtitle';
import { computed, ref } from 'vue';

const documents = ref([]);
const gallery = computed(() => {
  return documents.value.map(doc => {
    return {
      url: doc.documentImage.url
    };
  });
});

const {showSlider, itemsToShow, initSwiper, openImage} = useGallery(gallery);
const fetchDocumentsHandler = useAsync(async () => {
  const {data: {data: {allDocuments}}} = await ApiCall.getDocuments();
  documents.value = allDocuments;
  initSwiper();
});

fetchDocumentsHandler.execute();
</script>

<template>
  <section>
    <Subtitle :title="$t('documents')" />

    <BlockLayout class="sm:!px-10">
      <transition
        name="fade"
        mode="out-in"
      >
        <div
          v-if="fetchDocumentsHandler.isLoading"
          key="skeletons"
          class="flex gap-3 justify-center w-full"
        >
          <Skeleton
            v-for="(document, index) in itemsToShow"
            :key="`document${index}`"
            class="1/3 md:w-1/5 max-w-50 before:block before:pt-[130%]"
          />
        </div>

        <Carousel
          v-else-if="showSlider"
          key="carousel"
          :items-to-show="itemsToShow"
        >
          <Slide
            v-for="(document, index) in gallery"
            :key="`document${index}`"
            class="p-3 cursor-pointer hover:scale-90 transition-transform duration-300"
            @click="openImage(index)"
          >
            <img :src="document.url">
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>

        <div
          v-else
          key="staticImages"
          class="flex gap-3 justify-center w-full"
        >
          <img
            v-for="(document, index) in gallery"
            :key="`document${index}`"
            class="cursor-pointer w-1/3 md:w-1/5 max-w-50 hover:scale-90 transition-transform duration-300"
            :src="document.url"
            @click="openImage(index)"
          >
        </div>
      </transition>
    </BlockLayout>
  </section>
</template>

