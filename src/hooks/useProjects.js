import { ref } from '@vue/reactivity';
import Api from '@api';
import { computed } from '@vue/runtime-core';
import { useI18n } from 'vue-i18n';

const projectsData = ref([]);

export default () => {
  const { locale } = useI18n();

  const fetchProjects = async () => {
    projectsData.value = await Api.getProjects();
  };

  const projects = computed(() => {
    const currentLocale = locale.value === 'ua' ? 'uk' : 'en';

    return projectsData.value.map(({id, image, _allContentLocales, _allTitleLocales, gallery}) => {
      return {
        id,
        image: image.url,
        gallery,
        title: _allTitleLocales.find(title => title.locale === currentLocale).value,
        content: _allContentLocales.find(content => content.locale === currentLocale).value.value
      };
    });
  });

  const getProject = (id) => {
    return projects.value.find(project => Number(project.id) === id);
  };

  return {
    fetchProjects,
    getProject,
    projects
  };
};
