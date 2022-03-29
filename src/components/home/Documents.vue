<template>
  <section>
    <Subtitle :title="$t('documents')" />

    <BlockLayout class="!px-10">
      <Carousel :items-to-show="5">
        <Slide
          v-for="slide in 10"
          :key="slide"
          class="p-3 cursor-pointer"
          @click="openImage(slide)"
        >
          <img :src="docImg">
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </BlockLayout>
  </section>
</template>

<script>
import PhotoSwipe from 'photoswipe';
import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';
import 'photoswipe/dist/photoswipe.css';

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
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
    Navigation
  },
  data () {
    return {
      docImg: DocImg,
      lightbox: null
    };
  },
  mounted () {
    if (!this.lightbox) {
      this.lightbox = new PhotoSwipeLightbox({
        dataSource: [
          { src: 'https://dummyimage.com/800x600/555/fff/?text=1', width: 800, height: 600 },
          { src: 'https://dummyimage.com/800x600/555/fff/?text=2', width: 800, height: 600 },
          { src: 'https://dummyimage.com/800x600/555/fff/?text=3', width: 800, height: 600 },
          { src: 'https://dummyimage.com/800x600/555/fff/?text=4', width: 800, height: 600 },
          { src: 'https://dummyimage.com/800x600/555/fff/?text=5', width: 800, height: 600 }
        ],
        pswpModule: PhotoSwipe
      });
      this.lightbox.init();
    }
  },
  unmounted () {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  },
  methods: {
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
