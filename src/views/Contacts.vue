<template>
  <section>
    <section class="grid lg:grid-cols-2 gap-6 lg:gap-13">
      <div
        v-for="(currency, key) in paymentConfig"
        :key="`currency${key}`"
        class="w-full mb-6 lg:mb-13"
        :class="{'break-all': key === 'UAH'}"
      >
        <h2
          class="font-bold text-primary text-lg md:text-2xl mb-2 md:mb-8"
          v-text="key"
        />

        <div
          v-for="(field, fieldIndex) in currency"
          :key="`currency${fieldIndex}`"
          class="w-full border border-b-0 last:border-b first:rounded-b-md last:rounded-b-md border-gray-border flex"
          :class="{'rounded-t-md': fieldIndex === 0}"
        >
          <h2
            class="w-1/3 border-r p-3 border-gray-border font-bold text-sm md:text-lg"
            v-text="field.name"
          />

          <p
            v-if="field.html"
            class="flex-1 p-3 text-sm md:text-lg break-all"
            v-html="field.value"
          />

          <p
            v-else
            class="flex-1 p-3 text-sm md:text-lg break-all"
            v-text="field.value"
          />
        </div>
      </div>
    </section>

    <Subtitle
      class="md:!text-2xl"
      :title="$t('write_us')"
    />

    <form
      class="w-full mt-4 md:mt-8"
      @submit.prevent
    >
      <div class="flex flex-col md:flex-row gap-4 md:gap-10 mb-6">
        <Input
          v-model="v$.formData.name.$model"
          required
          name="name"
          class="!text-lg sm:!text-xl"
          :placeholder="$t('name')"
        />

        <Input
          v-model="v$.formData.email.$model"
          required
          name="email"
          class="!text-lg sm:!text-xl"
          :placeholder="$t('email')"
        />

        <Input
          v-model="v$.formData.phone.$model"
          v-maska="'+38 (###) ### ## ##'"
          required
          name="phone"
          class="!text-lg sm:!text-xl"
          :placeholder="$t('phone')"
        />
      </div>

      <textarea
        v-model="formData.message"
        name="message"
        :placeholder="$t('message')"
        class="pt-4 mb-6 h-29 placeholder:text-gray-border w-full pl-3 focus:ring-1 outline-none ring-primary bg-white border border-gray-border rounded-lg !text-lg sm:!text-xl"
      />

      <ErrorAlert
        v-if="showError"
        class="my-4"
        :error="$t('error_try_again')"
      />

      <BtnPrimary
        :title="$t('send')"
        class="sm:max-w-[380px]"
        :is-loading="isLoading"
        :disabled="v$.formData.$invalid"
        @click="sendForm"
      />
    </form>

    <SuccessModal
      ref="successModal"
      :title="$t('success_modal_title')"
      :subtitle="$t('success_modal_subtitle')"
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
      },
      paymentConfig: {
        'EUR': [
          {
            name: 'Beneficiary',
            value: 'CO "CF "UKRAINE IS ALL OF US"'
          },
          {
            name: 'Beneficiary address',
            value: '9, district 297, Kremenchug, Ukraine, 39600'
          },
          {
            name: 'Enterprise code',
            value: '44863516'
          },
          {
            name: 'Currency of account ',
            value: 'EUR'
          },
          {
            name: 'Account number',
            value: 'UA683510050000026001879139984'
          },
          {
            name: 'Bank name',
            html: true,
            value: `07205696 <br>
              JOINT STOCK COMPANY "UKRSIBBANK"<br>
              Beneficiary bank (JSC "UKRSIBBANK")<br>
              07205696<br>
              UKRSIBBANK<br>
              ANDRIIVSKA STREET 2/12<br>
              KYIV, UKRAINE<br>
              SWIFT code: KHABUA2KXXX<br>
              `
          },
          {
            name: 'Intermediary bank',
            html: true,
            value: `
              BNP PARIBAS SA<br>
              Paris, FRANCE<br>
              SWIFT-код: BNPAFRPPXXX<br>
              `
          },
          {
            name: 'Purpose of payment',
            value: 'Charitable donation to CO “CF “UKRAINE IS ALL OF US”'
          }
        ],
        'USD': [
          {
            name: 'Beneficiary',
            value: 'CO "CF "UKRAINE IS ALL OF US"'
          },
          {
            name: 'Beneficiary address',
            value: '9, district 297, Kremenchug, Ukraine, 39600'
          },
          {
            name: 'Enterprise code',
            value: '44863516'
          },
          {
            name: 'Currency of account ',
            value: 'USD'
          },
          {
            name: 'Account number',
            value: 'UA503510050000026002879139983'
          },
          {
            name: 'Bank name',
            html: true,
            value: `020061151200138 <br>
              JOINT STOCK COMPANY "UKRSIBBANK"<br>
              Beneficiary bank (JSC "UKRSIBBANK")<br>
              07205696<br>
              UKRSIBBANK<br>
              ANDRIIVSKA STREET 2/12<br>
              KYIV, UKRAINE<br>
              SWIFT code: KHABUA2KXXX<br>
              `
          },
          {
            name: 'Intermediary bank',
            html: true,
            value: `
             BNP PARIBAS U.S.A. - New York Branch<br>
              New York, USA<br>
              SWIFT-код: BNPAUS3NXXX<br>
            `
          },
          {
            name: 'Purpose of payment',
            value: 'Charitable donation to CO “CF “UKRAINE IS ALL OF US”'
          }
        ],
        'UAH': [
          {
            name: 'Найменування юр. особи',
            value: 'БО "БФ "УКРАЇНА - ЦЕ ВСІ МИ"'
          },
          {
            name: 'Код за ЄДРПОУ юр. особи',
            value: '44863516'
          },
          {
            name: 'Валюта рахунку',
            value: 'UAH'
          },
          {
            name: '№ рахунку',
            value: 'UA323510050000026003879139982'
          },
          {
            name: 'Назва банку',
            value: 'АТ « УКРСИББАНК»'
          },
          {
            name: 'Призначення платежу',
            value: 'Благодійний внесок для БО “БФ “УКРАЇНА ЦЕ ВСІ МИ”'
          }
        ],
        'USDT': [
          {
            name: 'Wallet',
            value: 'THEnox7JG1KRqHJkS8hZvFdc4Hdonc3Ndh'
          }
        ]
      }
    };
  },
  methods: {
    showModal () {
      this.$refs.successModal.showModal();
    },

    async sendForm () {
      this.isLoading = true;
      this.showError = false;
      try {
        this.isLoading = true;
        //await ApiCall.sendMail(this.formData);
        this.resetData();
        this.showModal();
      } catch (e) {
        this.showError = true;
      } finally {
        this.isLoading = false;
      }
    },

    resetData () {
      this.formData = {
        name: '',
        email: '',
        phone: '',
        message: ''
      };

      this.showError = false;
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
