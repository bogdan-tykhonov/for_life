<template>
  <section>
    <Subtitle :title="$t('documents')" />

    <BlockLayout class="sm:!px-10">
      <transition
        name="fade"
        mode="out-in"
      >
        <div
          v-if="isLoading"
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
            v-for="(document, index) in documents"
            :key="`document${index}`"
            class="p-3 cursor-pointer"
            @click="openImage(index)"
          >
            <img :src="document.documentImage.url">
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
            v-for="(document, index) in documents"
            :key="`document${index}`"
            class="cursor-pointer w-1/3 md:w-1/5 max-w-50"
            :src="document.documentImage.url"
          >
        </div>
      </transition>
    </BlockLayout>
  </section>
</template>

<script>
import 'photoswipe/dist/photoswipe.css';
import 'vue3-carousel/dist/carousel.css';
import ApiCall from '@api';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

import Skeleton from '../ui/Skeleton';
import DocImg from '../../img/doc.jpeg';
import BlockLayout from './BlockLayout';
import Subtitle from '../ui/Subtitle';

export default {
  name: 'Documents',
  components: {
    Subtitle,
    BlockLayout,
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Skeleton

  },
  data () {
    return {
      docImg: DocImg,
      lightbox: null,
      isLoading: false,
      documents: [],
      isMobile: window.innerWidth <= 768
    };
  },
  computed: {
    showSlider () {
      return this.documents.length > 5 || (this.isMobile && this.documents.length > 3);
    },

    itemsToShow () {
      return this.isMobile ? 3 : 5;
    }
  },
  mounted () {
    this.fetchDocuments();
  },
  unmounted () {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  },
  methods: {
    initSwiper () {
      const images = this.documents.map(doc => {
        return {
          src: doc.documentImage.url,
          width: 700,
          height: 1000
        };
      });

      this.lightbox = new PhotoSwipeLightbox({
        dataSource: images,
        pswpModule: PhotoSwipe
      });

      this.lightbox.init();
    },

    async fetchDocuments () {
      try {
        this.isLoading = true;
        const {data: {data: {allDocuments}}} = await ApiCall.getDocuments();
        this.documents = allDocuments;
        this.initSwiper();
      } catch (e) {
        console.error(e);
      } finally {
        this.isLoading = false;
      }
    },

    openImage (slideIndex) {
      this.lightbox.loadAndOpen(slideIndex);
    }
  }
};
</script>

<i18n>
{
  "ua": {
    "documents": "Документи"
  },
  "en": {
    "documents": "Documents"
  }
}
</i18n>
