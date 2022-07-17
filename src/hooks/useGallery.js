import { unref } from '@vue/reactivity';
import { computed, onUnmounted } from '@vue/runtime-core';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';

const isMobile = window.innerWidth <= 768;
export default (gallery) => {

  const showSlider = computed(() => {
    if (!unref(gallery)) {
      return null;
    }

    return unref(gallery).length > 5 || (isMobile && unref(gallery).length > 3);
  });

  const itemsToShow = computed(() => {
    return isMobile ? 3 : 5;
  });

  let lightbox = null;
  const initSwiper = () => {
    const images = unref(gallery).map(image => {
      return {
        src: image.url
      };
    });

    lightbox = new PhotoSwipeLightbox({
      dataSource: images,
      pswpModule: PhotoSwipe,
      mainClass: 'gallery'
    });

    lightbox.init();
  };

  const openImage = (slideIndex) => {
    lightbox.loadAndOpen(slideIndex);
  };

  onUnmounted(() => {
    if (lightbox) {
      lightbox.destroy();
      lightbox = null;
    }
  });

  return {
    showSlider,
    itemsToShow,
    initSwiper,
    openImage
  };
};
