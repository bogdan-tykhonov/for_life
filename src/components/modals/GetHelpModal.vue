<template>
  <ModalLayout
    ref="modalLayout"
    role="dialog"
    aria-labelledby="dialog1Title"
    :max-width="530"
  >
    <div class="px-10 sm:px-18 py-15 text-center">
      <h2
        id="dialog1Title"
        class="font-bold text-xl sm:text-4xl mb-4 sm:mb-8 text-primary"
        v-text="$t('title')"
      />

      <form
        class="flex flex-col gap-5"
        @submit.prevent
      >
        <Input
          v-model="v$.formData.name.$model"
          name="name"
          required
          class="h-10 text-base sm:text-lg sm:h-15"
          :placeholder="$t('name')"
        />

        <Input
          v-model="v$.formData.email.$model"
          name="email"
          required
          class="h-10 text-base sm:text-lg sm:h-15"
          :placeholder="$t('email')"
        />

        <Input
          v-model="v$.formData.phone.$model"
          v-maska="'+38 (###) ### ## ##'"
          name="phone"
          required
          class="h-10 text-base sm:text-lg sm:h-15"
          :placeholder="$t('phone')"
        />

        <textarea
          v-model="formData.message"
          name="message"
          :placeholder="$t('message')"
          class="pt-4 h-29 placeholder:text-gray-border w-full pl-3 focus:ring-1 outline-none ring-primary bg-white border border-gray-border rounded-lg text-base sm:text-lg"
        />

        <BtnPrimary
          type="submit"
          :title="$t('send')"
          class="h-15"
          :disabled="v$.formData.$invalid"
          @click="sendForm"
        />
        
        <BtnPrimary
          :title="$t('cancel')"
          class="h-15 border border-primary bg-white text-primary hover:bg-white hover:border-primary-hover hover:text-primary-hover"
          @click="closeModal"
        />
      </form>
    </div>
  </ModalLayout>
</template>

<script>
import Input from '../ui/Input';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import ApiCall from '@api';
import modalMixin from '@mixins/modal-mixin';

import BtnPrimary from '../ui/BtnPrimary';
import ModalLayout from './ModalLayout';


export default {
  name: 'GetHelpModal',
  components: {
    ModalLayout,
    BtnPrimary,
    Input
  },
  mixins: [modalMixin],
  emits: ['success'],
  setup () {
    return { v$: useVuelidate() };
  },
  data () {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    };
  },
  methods: {
    async sendForm () {
      this.showError = false;
      try {
        this.isLoading = true;
        await ApiCall.sendMail(this.formData);
        this.$emit('success');
        this.closeModal();
      } catch (e) {
        this.showError = true;
      } finally {
        this.isLoading = false;
      }
    }
  },
  validations: {
    formData: {
      name: {required},
      email: {
        email,
        required
      },
      phone: {
        required,
        minLength: minLength(19)
      }
    }
  }  
};
</script>

<i18n>
  {
    "ua": {
      "title": "Отримати допомогу",
      "name": "Ваше ім'я*",
      "phone": "Ваш телефон*",
      "email": "Ваш e-mail*",
      "message": "Опишіть Вашу проблему" ,
      "send": "Надіслати",
      "cancel": "Скасувати"
    },
    "en": {
      "title": "Get help",
      "name": "Your name*",
      "phone": "Your phone*",
      "email": "Your e-mail*",
      "message": "Describe your problem" ,
      "send": "Send",
      "cancel": "Cancel"
    }
  }
</i18n>
