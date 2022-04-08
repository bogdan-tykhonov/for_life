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
          v-model="formData.message"
          :placeholder="$t('message')"
          class="pt-4 h-29 placeholder:text-gray-border w-full pl-3 focus:ring-1 outline-none ring-primary bg-white border border-gray-border rounded-lg !text-lg sm:!text-xl"
        />

        <BtnPrimary
          :title="$t('send')"
          :disabled="v$.formData.$invalid"
          @click="sendForm"
        />

        <ErrorAlert
          v-if="showError"
          :error="$t('error_try_again')"
        />
      </div>
    </form>

    <SuccessModal
      ref="successModal"
      :title="$t('modal_title')"
      :subtitle="$t('modal_subtitle')"
    />
  </section>
</template>

<script>
import ErrorAlert from '../components/ui/ErrorAlert';
import SuccessModal from '../components/modals/SuccessModal';
import ApiCall from '@api';
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
    BtnPrimary,
    SuccessModal,
    ErrorAlert
  },
  setup () {
    return { v$: useVuelidate() };
  },
  data () {
    return {
      isLoading: false,
      showError: false,
      formData: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    };
  },
  methods: {
    showModal () {
      this.$refs.successModal.showModal();
    },

    async sendForm () {
      this.showError = false;
      try {
        this.isLoading = true;
        //await ApiCall.sendMail(this.formData);
        this.showModal();
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
      "write_us": "Напишіть нам",
      "name": "Ваше ім'я*",
      "phone": "Ваш телефон*",
      "email": "Ваш e-mail*",
      "message": "Повідомлення",
      "send": "Надіслати",
      "modal_title": "Ваша заявка успішно відправлена!",
      "modal_subtitle": "Найближчим часом з вами зв'яжеться наша команда"
    },
    "en": {
      "write_us": "Write us",
      "name": "Your name*",
      "phone": "Your phone*",
      "email": "Your e-mail*",
      "message": "Повідомлення",
      "send": "Send"
    }
  }
</i18n>
