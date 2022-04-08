<template>
  <ModalLayout
    ref="modalLayout"
    :show-close-btn="false"
    :max-width="510"
    :close-delay="3000"
    role="dialog"
    aria-labelledby="dialog1Title"
    aria-describedby="dialog1Desc"
  >
    <div class="flex flex-col items-center py-14 px-4 sm:px-6 text-center relative">
      <div class="flex-center bg-primary rounded-full w-9 h-9">
        <CheckIcon class="h-12 w-auto text-gray" />
      </div>

      <h2
        id="dialog1Title"
        class="text-2xl max-w-[270px] text-primary font-bold mt-5 mb-4"
        v-text="title"
      />

      <p
        v-if="subtitle"
        id="dialog1Desc"
        v-text="subtitle"
      />
    </div>
  </ModalLayout>
</template>

<script>
import CheckIcon from '../icons/CheckIcon';
import ModalLayout from './ModalLayout';
import modalMixin from '@mixins/modal-mixin';

export default {
  name: 'SuccessModal',
  components: { 
    ModalLayout,
    CheckIcon
  },
  mixins: [modalMixin],
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
};
</script>
