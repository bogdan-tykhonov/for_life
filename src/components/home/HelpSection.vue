<template>
  <section>
    <Subtitle :title="$t('title')" />

    <!-- Mob -->
    <div class="flex mt-4 gap-3 flex-col sm:hidden">
      <BtnPrimary
        class="lg:text-4xl !h-17 border border-primary bg-white text-primary hover:bg-white hover:border-primary-hover hover:text-primary-hover"
        :title="$t('get_help')"
        @click="showGetHelpModal"
      />
      
      <BtnPrimary
        class="lg:text-4xl !h-17"
        :title="$t('want_help')"
      />
    </div>
    <!-- Mob -->


    <!-- Desktop -->
    <BlockLayout class="hidden sm:flex">
      <router-link
        :to="{name: 'Contacts'}"
        class="!h-17 block w-full"
      >
        <BtnPrimary
          class="w-full !h-full lg:text-4xl "
          :title="$t('want_help')"
        />
      </router-link>

      <BtnPrimary
        class="lg:text-4xl !h-17"
        :title="$t('get_help')"
        @click="showGetHelpModal"
      />
    </BlockLayout>
    <!-- Desktop -->
  </section>
</template>

<script>
import BlockLayout from './BlockLayout';
import Subtitle from '../ui/Subtitle';
import BtnPrimary from '../ui/BtnPrimary';
export default { 
  name: 'HelpSection',
  components: {
    BtnPrimary,
    Subtitle,
    BlockLayout
  },
  emits: ['show-get-help-modal'],
  methods: {
    showGetHelpModal () {
      this.$emit('show-get-help-modal');
    }
  }
};
</script>

<i18n>
{
  "ua": {
    "title": "Благородно тільки те, що безкорисливо"
  },
  "en": {
    "title": "Noble only that which is selfless"
  }
}
</i18n>
