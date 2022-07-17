<script setup>
import Skeleton from '../components/ui/Skeleton.vue';
import SquaredImage from '../components/ui/SquaredImage.vue';
import useProjects from '@hooks/useProjects';
import useAsync from '@hooks/useAsync';

const { fetchProjects, projects } = useProjects();
const fetchProjectsHandler = useAsync(async () => {
  await fetchProjects();  
});
if (!projects.value.length) {
  fetchProjectsHandler.execute();
}

</script>

<template>
  <section>
    <transition
      name="fade"
      mode="out-in"
    >
      <div
        v-if="fetchProjectsHandler.isLoading"
        class="grid grid-cols-3 gap-10 "
      >
        <SquaredImage
          v-for="(item, index) in 6"
          :key="index"
        >
          <Skeleton />
        </SquaredImage>
      </div>

      <div
        v-else
        class="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10"
      >
        <router-link
          v-for="(project, index) in projects"
          :key="index"
          :to="{
            name: 'ProjectView',
            params: {
              projectId: project.id
            }
          }"
          tag="article"
          class="flex items-end rounded-md overflow-hidden w-full hover:scale-90 transition-transform duration-300"
        >
          <SquaredImage
            class="flex items-start"
            :image="project.image"
          >
            <p
              class="p-3 text-white sm:p-10 font-bold text-lg sm:text-4xl"
              v-text="project.title"
            />
          </SquaredImage>
        </router-link>
      </div>
    </transition>
  </section>
</template>
