<template>
  <section class="pt-4 sm:pt-8">
    <Subtitle :title="$t('write_us')" />

    <form
      class="mt-4 sm:mt-8 max-w-[380px]"
      @submit.prevent
    >
      <div class="flex flex-col gap-5">
        <Input
          v-model="v$.formData.name.$model"
          class="!text-lg sm:!text-xl"
          :placeholder="$t('name')"
        />

        <Input
          v-model="v$.formData.email.$model"
          class="!text-lg sm:!text-xl"
          :placeholder="$t('email')"
        />

        <Input
          v-model="v$.formData.phone.$model"
          v-maska="'+38 (###) ### ## ##'"
          class="!text-lg sm:!text-xl"
          :placeholder="$t('phone')"
        />

        <textarea
          v-model="v$.formData.message.$model"
          :placeholder="$t('message')"
          class="pt-4 h-29 placeholder:text-gray-border w-full pl-3 focus:ring-1 outline-none ring-primary bg-white border border-gray-border rounded-lg !text-lg sm:!text-xl"
        />

        <BtnPrimary
          :title="$t('send')"
          @click="sendForm"
        />
      </div>
    </form>
  </section>
</template>

<script>
import BtnPrimary from '../components/ui/BtnPrimary';
import Subtitle from '../components/ui/Subtitle';
import { required, email, minLength } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

import Input from '../components/ui/Input';

export default {
  name: 'Contacts',
  components: {
    Input,
    Subtitle,
    BtnPrimary
  },
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
    sendForm () {
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
      "write_us": "Напишіть нам",
      "name": "Ваше ім'я",
      "phone": "Ваш телефон",
      "email": "Ваш e-mail",
      "message": "Повідомлення",
      "send": "Відправити"
    },
    "en": {
      "write_us": "Write us",
      "name": "Your name",
      "phone": "Your phone",
      "email": "Your e-mail",
      "message": "Повідомлення",
      "send": "Send"
    }
  }
</i18n>
