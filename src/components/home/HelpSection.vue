<template>
  <section>
    <Subtitle :title="$t('title')" />

    <!-- Mob -->
    <div class="flex mt-4 gap-3 flex-col sm:hidden">
      <BtnPrimary
        class="lg:text-4xl !h-17"
        :title="$t('want_help')"
      />

      <BtnPrimary
        class="lg:text-4xl !h-17 border border-primary bg-white text-primary hover:bg-white hover:border-primary-hover hover:text-primary-hover"
        :title="$t('get_help')"
        @click="showGetHelpModal"
      />
    </div>
    <!-- Mob -->


    <!-- Desktop -->
    <BlockLayout class="hidden sm:flex">
      <BtnPrimary
        class="lg:text-4xl !h-17"
        :title="$t('want_help')"
      />

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
  methods: {
    showGetHelpModal () {
      this.emitter.emit('show-get-help-modal');
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
