<script setup>
import Skeleton from '../components/ui/Skeleton.vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import BlockLayout from '../components/home/BlockLayout.vue';
import Subtitle from '../components/ui/Subtitle.vue';
import useProjects from '@hooks/useProjects';
import useAsync from '@hooks/useAsync';
import useGallery from '@hooks/useGallery';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { computed, ref, watch } from 'vue';
import { StructuredText } from 'vue-datocms';
import fondImg1 from '@/img/fond_logo_1.svg';
import fondImg2 from '@/img/fond_logo_2.svg';
import 'photoswipe/dist/photoswipe.css';
import 'vue3-carousel/dist/carousel.css';

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
});
const { t, locale } = useI18n();
const router = useRouter();
const { getProject, fetchProjects, projects } = useProjects();
const project = ref({});

const gallery = computed(() => {
  return project.value.gallery || [];
});
const {showSlider, itemsToShow, initSwiper, openImage} = useGallery(gallery);

const setProject = () => {
  const currentProject = getProject(props.id);
  if (currentProject) {
    project.value = getProject(props.id);
  } else {
    router.push({name: 'Projects'});
  }
};

const fetchProjectsHandler = useAsync(async () => {
  await fetchProjects();  
  setProject();
  initSwiper();
});

if (!projects.value.length) {
  fetchProjectsHandler.execute();
} else {
  setProject();
  initSwiper();
}

watch(locale, () => {
  project.value = getProject(props.id);
});

</script>

<template>
  <section>
    <transition
      name="fade"
      mode="out-in"
    >
      <div
        v-if="fetchProjectsHandler.isLoading"
        class="flex flex-col gap-5 sm:gap-10"
      > 
        <Skeleton class="w-1/3 h-10" />
        <Skeleton class="w-full h-10" />
        <Skeleton class="w-full h-50" />
      </div>

      <div v-else>
        <h1
          class="text-primary text-xl sm:text-4xl font-bold"
          v-text="`«${project.title}»`"
        />

        <StructuredText
          class="project-content"
          :data="project.content"
        />

        <p
          class="font-bold text-lg sm:text-xl text-primary mt-10 sm:mt-25 mb-10 max-w-[960px]"
          v-text="t('fonds_text')"
        />

        <div class="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
          <a
            href="http://www.irf.ua/"
            target="blank"
            class="hover:scale-90 transition-transform duration-300"
          >
            <img
              :src="fondImg1"
              alt="Міжнародний Фонд «Відродження»"
            >
          </a>

          <a
            href="https://www.care.de/"
            target="blank"
            class="hover:scale-90 transition-transform duration-300"
          >
            <img
              :src="fondImg2"
              alt="Ocare"
            >
          </a>
        </div>

        <section
          v-if="project.gallery && project.gallery.length"
          class="mt-10 sm:mt-40"
        >
          <Subtitle :title="$t('project_gallery')" />

          <BlockLayout class="sm:!px-10">
            <Carousel
              v-if="showSlider"
              key="carousel"
              :items-to-show="itemsToShow"
            >
              <Slide
                v-for="(image, index) in project.gallery"
                :key="`image${index}`"
                class="p-3 cursor-pointer hover:scale-90 transition-transform duration-300"
                @click="openImage(index)"
              >
                <img :src="image.url">
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
                v-for="(image, index) in project.gallery"
                :key="`image${index}`"
                class="cursor-pointer w-1/3 md:w-1/5 max-w-50 hover:scale-90 transition-transform duration-300"
                :src="image.url"
                @click="openImage(index)"
              >
            </div>
          </BlockLayout>
        </section>
      </div>
    </transition>
  </section>
</template>

