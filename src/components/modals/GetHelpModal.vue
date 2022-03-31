<template>
  <ModalLayout
    ref="modalLayout"
    :max-width="530"
  >
    <div class="max-w-[380px] mx-auto py-15 text-center">
      <h2
        class="font-bold text-4xl mb-8 text-primary"
        v-text="$t('title')"
      />

      <div class="flex flex-col gap-5">
        <Input
          v-model="v$.formData.name.$model"
          :placeholder="$t('name')"
        />

        <Input
          v-model="v$.formData.email.$model"
          :placeholder="$t('email')"
        />

        <Input
          v-model="v$.formData.phone.$model"
          v-maska="'+38 (###) ### ## ##'"
          :placeholder="$t('phone')"
        />

        <textarea
          v-model="v$.formData.message.$model"
          :placeholder="$t('message')"
          class="pt-4 h-29 placeholder:text-gray-border w-full pl-3 focus:ring-1 outline-none ring-primary bg-white border border-gray-border rounded-lg text-xl"
        />

        <BtnPrimary
          :title="$t('send')"
          class="h-15"
          @click="sendForm"
        />
        
        <BtnPrimary
          :title="$t('cancel')"
          class="h-15 border border-primary bg-white text-primary hover:bg-white hover:border-primary-hover hover:text-primary-hover"
          @click="closeModal"
        />
      </div>
    </div>
  </ModalLayout>
</template>

<script>
import Input from '../ui/Input';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
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
      console.log('send');
    }
  },
  validations: {
    formData: {
      name: required,
      email: email,
      phone: {
        required,
        minLength: minLength(19)
      },
      message: required
    }
  }  
};
</script>

<i18n>
  {
    "ua": {
      "title": "Отримати допомогу",
      "name": "Ваше ім'я",
      "phone": "Ваш телефон",
      "email": "Ваш e-mail",
      "message": "Опишіть Вашу проблему" ,
      "send": "Відправити",
      "cancel": "Скасувати"
    },
    "en": {
      "title": "Get help",
      "name": "Your name",
      "phone": "Your phone",
      "email": "Your e-mail",
      "message": "Describe your problem" ,
      "send": "Send",
      "cancel": "Cancel"
    }
  }
</i18n>
