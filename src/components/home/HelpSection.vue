<template>
  <section>
    <Subtitle :title="$t('title')" />

    <BlockLayout>
      <BtnPrimary
        class="text-4xl h-18"
        :title="$t('want_help')"
      />

      <BtnPrimary
        class="text-4xl h-18"
        :title="$t('get_help')"
      />
    </BlockLayout>
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
