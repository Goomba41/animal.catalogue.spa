<template>
  <b-row class="mb-5">
    <b-col class="text-justify">
      <h1 class="mb-5 text-center">Вопросы? Предложения? Сообщите нам!</h1>

      <b-overlay :show="pending" rounded>
        <template v-slot:overlay>
          <div class="d-flex align-items-center">
            <b-spinner variant="custom-green-dark"></b-spinner>
            <!-- We add an SR only text for screen readers -->
            <span class="sr-only">Please wait...</span>
          </div>
        </template>

        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
          <b-form-group
            description="Куда нам отправить ответ? Не волнуйтесь, мы никому не раскроем Вашу электронную почту."
          >
            <b-form-input
              v-model.trim="form.email"
              :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
              @input="$v.form.email.$touch()"
              placeholder="Ваша электронная почта"
              autofocus
            ></b-form-input>
            <b-form-invalid-feedback
              :state="$v.form.email.$dirty ? !$v.form.email.$anyError : null"
            >
              <span v-if="!$v.form.email.required">
                Сожалеем, но это поле обязательно :(
              </span>
              <span v-if="!$v.form.email.email">
                Сожалеем, но возможно вы ввели почту неправильно, попробуйте ещё
                :(
              </span>
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            description="Если не сможем ответить на почту, как с Вами связаться?"
          >
            <VuePhoneNumberInput
              autocomplete="off"
              :onlyCountries="['RU']"
              :disabledFetchingCountry="true"
              :no-country-selector="true"
              color="#2b7a78"
              valid-color="#28a745"
              error-color="#dc3545"
              :error="$v.form.phone.$dirty ? $v.form.phone.$anyError : null"
              :translations="translations"
              @update="phoneValid = $event.isValid"
              v-model="$v.form.phone.$model"
            />
            <b-form-invalid-feedback
              :state="$v.form.phone.$dirty ? !$v.form.phone.$error : null"
            >
              <span v-if="!$v.form.phone.required">
                Сожалеем, но это поле обязательно :(
              </span>
              <span v-if="$v.form.phone.$model && !$v.form.phone.isPhone">
                Непонятный номер телефона... Возможно вы допустили ошибку?
              </span>
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group description="Как к Вам обращаться?">
            <b-form-input
              v-model.trim="form.name"
              placeholder="Ваше имя"
              :state="$v.form.name.$dirty ? !$v.form.name.$error : null"
              @input="$v.form.name.$touch()"
            ></b-form-input>
            <b-form-invalid-feedback
              :state="$v.form.name.$dirty ? !$v.form.name.$anyError : null"
            >
              <span v-if="!$v.form.name.required">
                Сожалеем, но это поле обязательно :(
              </span>
              <span v-if="!$v.form.name.alpha">
                Вас действительно так зовут? Кажется есть некорректные
                символы...
              </span>
              <span v-if="!$v.form.name.maxLength">
                Можно обращаться к Вам немного короче?
              </span>
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            description="Постарайтесь написать коротко и содержательно (20-500 символов)."
          >
            <b-form-textarea
              placeholder="Что Вы хотите нам сказать?"
              v-model.trim="form.message"
              :state="$v.form.message.$dirty ? !$v.form.message.$error : null"
              @input="$v.form.message.$touch()"
              rows="8"
            ></b-form-textarea>
            <b-form-invalid-feedback
              :state="
                $v.form.message.$dirty ? !$v.form.message.$anyError : null
              "
            >
              <span v-if="!$v.form.message.required">
                Сожалеем, но это поле обязательно :(
              </span>
              <span v-if="!$v.form.message.minLength">
                Вы действительно хотите что-то сообщить? Возможно нет?
              </span>
              <span v-if="!$v.form.message.maxLength">
                Мы совсем запутались, не могли бы Вы немного обобщить?
              </span>
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            description="Вы должны согласиться, что Ваши персональные данные обрабатываются нами, чтобы принять Ваше обращение."
          >
            <b-form-checkbox
              v-model.trim="form.opd"
              @input="$v.form.opd.$touch()"
            >
              Я ознакомился(-ась) и согласен(-на) с
              <b-link class="text-warning attention" :to="{ name: 'opd' }">
                политикой обработки персональных данных</b-link
              >.
            </b-form-checkbox>
            <b-form-invalid-feedback
              :state="$v.form.opd.$dirty ? !$v.form.opd.$anyError : null"
            >
              <span v-if="!$v.form.opd">
                Сожалеем, но если Вы не согласны с обработкой ПД, мы не можем
                принять Ваше сообщение :(
              </span>
            </b-form-invalid-feedback>
          </b-form-group>

          <b-button
            type="submit"
            block
            variant="custom-green-dark"
            :disabled="
              $v.form.$invalid || !$v.form.$anyDirty || $v.form.$anyError
            "
          >
            Отправить
          </b-button>
        </b-form>
        <!--       <b-card class="mt-3" header="Validation">
          <pre class="m-0">
            <tree-view :data="this.$v" :options="{maxDepth: 3}"></tree-view>
          </pre>
        </b-card> -->
      </b-overlay>
    </b-col>
  </b-row>
</template>

<script>
import {
  required,
  minLength,
  email,
  maxLength,
} from "vuelidate/lib/validators";
import VuePhoneNumberInput from "vue-phone-number-input";
import axios from "axios";
import "vue-phone-number-input/dist/vue-phone-number-input.css";

export default {
  name: "Feedback",
  data() {
    return {
      form: {
        email: "",
        phone: "",
        name: "",
        message: null,
        opd: null,
      },
      phoneValid: false,
      pending: false,
      translations: {
        countrySelectorLabel: "Код страны",
        countrySelectorError: "Выберите страну",
        phoneNumberLabel: "Номер телефона",
        example: "Например :",
      },
    };
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      phone: {
        required,
        isPhone: function () {
          return this.phoneValid;
        },
      },
      name: {
        required,
        alpha: (val) => /^[а-яё ]*$/i.test(val),
        maxLength: maxLength(50),
      },
      message: {
        required,
        minLength: minLength(20),
        maxLength: maxLength(500),
      },
      opd: {
        checked: (value) => value === true,
      },
    },
  },
  components: { VuePhoneNumberInput },
  methods: {
    async onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        this.pending = true;
        await axios
          .post(`/api/feedback`)
          .then((response) => {
            this.onReset();
            this.toastShow(
              response.data.title,
              response.data.message,
              "success"
            );
            this.pending = false;
          })
          .catch((error) => {
            this.toastShow(
              error.response.data.title,
              error.response.data.message,
              "danger"
            );
            this.pending = false;
          });
      }
    },
    onReset() {
      // Reset our form values
      this.form.email = "";
      this.form.phone = "";
      this.form.name = "";
      this.form.message = null;
      this.form.opd = null;

      this.phoneValid = false;
      this.pending = false;
      // Reset form validation
      this.$v.$reset();
    },
    toastShow(title, message, type) {
      // Use a shorter name for this.$createElement
      const h = this.$createElement;

      // Create the message
      const vNodesMsg = message;
      // Create the title
      const vNodesTitle = h("strong", title);
      // Pass the VNodes as an array for message and title
      this.$bvToast.toast([vNodesMsg], {
        title: [vNodesTitle],
        solid: true,
        variant: type,
      });
    },
  },
};
</script>
