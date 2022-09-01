<template>
  <h1 class="text-center my-7">Вопросы? Предложения? Сообщите нам!</h1>

  <div
    v-if="loadingStore.loadingState"
    class="loading-skeleton items-center flex flex-col my-10"
  >
    <div class="w-2/3 2xl:w-2/5 xl:w-1/2 mb-6">
      <div
        class="skeleton-box rounded-lg bg-primary-light-hover h-5 mb-2 w-1/2"
      ></div>
      <div class="skeleton-box rounded-lg bg-primary-light-hover h-11"></div>
    </div>
    <div class="w-2/3 2xl:w-2/5 xl:w-1/2 mb-6">
      <div
        class="skeleton-box rounded-lg bg-primary-light-hover h-5 mb-2 w-1/2"
      ></div>
      <div class="skeleton-box rounded-lg bg-primary-light-hover h-11"></div>
    </div>
    <div class="w-2/3 2xl:w-2/5 xl:w-1/2 mb-6">
      <div
        class="skeleton-box rounded-lg bg-primary-light-hover h-5 mb-2 w-1/2"
      ></div>
      <div class="skeleton-box rounded-lg bg-primary-light-hover h-11"></div>
    </div>
    <div class="w-2/3 2xl:w-2/5 xl:w-1/2 mb-6">
      <div
        class="skeleton-box rounded-lg bg-primary-light-hover h-5 mb-2 w-1/2"
      ></div>
      <div class="skeleton-box rounded-lg bg-primary-light-hover h-28"></div>
    </div>
    <div
      class="controls justify-between flex flex-col sm:flex-row w-2/3 2xl:w-2/5 xl:w-1/2"
    >
      <div
        class="skeleton-box rounded-lg bg-primary-light-hover h-11 w-3/5"
      ></div>
      <div
        class="skeleton-box rounded-lg bg-primary-light-hover h-11 w-1/5"
      ></div>
    </div>
  </div>

  <form
    v-else
    class="items-center flex flex-col my-10"
    @submit.prevent="onSubmit"
    @reset.prevent="onReset"
  >
    <div class="w-2/3 2xl:w-2/5 xl:w-1/2 mb-6">
      <label for="email" class="block mb-2 text-sm font-medium"
        >Куда нам отправить ответ?
        <small class="text-gray-300 ml-4"
          >Не волнуйтесь, мы никому не раскроем Вашу электронную почту</small
        ></label
      >
      <input
        id="email"
        @input="$v.email.$touch()"
        v-model.trim="form.email"
        autofocus
        class="text-primary-dark bg-gray-50 border-2 border-primary-dark focus:ring-2 focus-visible:ring-primary-light-hover text-sm rounded-lg focus:ring-primary-light-hover focus:border-primary-light-hover block w-full p-2.5"
        placeholder="Ваша электронная почта"
      />

      <div v-if="$v.email.$dirty ? $v.email.$error : null">
        <span
          v-for="error of $v.email.$errors"
          :key="error.$uid"
          class="font-medium text-danger text-xs"
        >
          <font-awesome-icon
            :icon="['fas', 'circle-exclamation']"
            fixed-width
            aria-hidden="true"
          />
          {{ error.$message }}
        </span>
      </div>
    </div>

    <div class="w-2/3 2xl:w-2/5 xl:w-1/2 mb-6">
      <label for="phone" class="block mb-2 text-sm font-medium"
        >Если не сможем ответить на почту, как с Вами связаться?
        <small class="text-gray-300 ml-4"
          >Или если будут нужны дополнительные сведения</small
        ></label
      >
      <input
        type="phone"
        ref="phone"
        id="phone"
        v-model.trim="form.phone"
        class="text-primary-dark bg-gray-50 border-2 border-primary-dark focus:ring-2 focus-visible:ring-primary-light-hover text-sm rounded-lg focus:ring-primary-light-hover focus:border-primary-light-hover block w-full p-2.5"
        placeholder="Ваш телефон"
        v-mask="'+7 (___) ___ __ __'"
      />

      <!-- @input="$v.phone.$touch()"
      <div v-if="$v.phone.$dirty ? $v.phone.$error : null">
        <span
          v-for="error of $v.phone.$errors"
          :key="error.$uid"
          class="font-medium text-danger text-xs"
        >
          <font-awesome-icon
            :icon="['fas', 'circle-exclamation']"
            fixed-width
            aria-hidden="true"
          />
          {{ error.$message }}
        </span>
      </div> -->
    </div>

    <div class="w-2/3 2xl:w-2/5 xl:w-1/2 mb-6">
      <label for="name" class="block mb-2 text-sm font-medium"
        >Как к Вам обращаться?</label
      >
      <input
        type="name"
        id="name"
        @input="$v.name.$touch()"
        v-model.trim="form.name"
        class="text-primary-dark bg-gray-50 border-2 border-primary-dark focus:ring-2 focus-visible:ring-primary-light-hover text-sm rounded-lg focus:ring-primary-light-hover focus:border-primary-light-hover block w-full p-2.5"
        placeholder="Ваше имя"
      />
      <div v-if="$v.name.$dirty ? $v.name.$error : null">
        <span
          v-for="error of $v.name.$errors"
          :key="error.$uid"
          class="font-medium text-danger text-xs"
        >
          <font-awesome-icon
            :icon="['fas', 'circle-exclamation']"
            fixed-width
            aria-hidden="true"
          />
          {{ error.$message }}
        </span>
      </div>
    </div>

    <div class="w-2/3 2xl:w-2/5 xl:w-1/2 mb-6">
      <label for="message" class="block mb-2 text-sm font-medium"
        >Коротко и содержательно опишите возникшую ситуацию
        <small class="text-gray-300 ml-4">(20-500 символов)</small></label
      >
      <textarea
        id="message"
        @input="$v.message.$touch()"
        rows="4"
        v-model.trim="form.message"
        class="text-primary-dark block p-2.5 w-full text-sm rounded-lg bg-gray-50 border-2 border-primary-dark focus:ring-2 focus-visible:ring-primary-light-hover focus:ring-primary-light-hover focus:border-primary-light-hover"
        placeholder="Что Вы хотите нам сказать?"
      ></textarea>
      <div v-if="$v.message.$dirty ? $v.message.$error : null">
        <span
          v-for="error of $v.message.$errors"
          :key="error.$uid"
          class="font-medium text-danger text-xs"
        >
          <font-awesome-icon
            :icon="['fas', 'circle-exclamation']"
            fixed-width
            aria-hidden="true"
          />
          {{ error.$message }}
        </span>
      </div>
    </div>

    <div
      class="controls justify-between flex flex-col sm:flex-row w-2/3 2xl:w-2/5 xl:w-1/2"
    >
      <div class="flex items-center mb-5 sm:mb-0">
        <input
          id="opd"
          @input="$v.$touch()"
          type="checkbox"
          v-model.trim="form.opd"
          class="w-4 h-4 text-primary-dark bg-gray-100 rounded border-4 border-primary-dark focus:ring-primary-light-hover focus:ring-2"
        />
        <label for="opd" class="ml-2 text-sm font-medium"
          >Я ознакомился(-ась) и согласен(-на) с
          <router-link class="text-link" :to="{ name: 'opd' }"
            >политикой обработки персональных данных</router-link
          ></label
        >
      </div>

      <button
        type="submit"
        :disabled="!$v.$anyDirty || $v.$invalid"
        class="text-white disabled:bg-gray-300 disabled:text-gray-400 bg-primary-dark hover:bg-primary-dark-hover focus:ring-4 focus:outline-none focus:ring-primary-light-hover font-medium rounded-lg text-xs px-3 py-1.5 text-center inline-flex items-center transition-colors"
      >
        <font-awesome-icon
          :icon="['fas', 'paper-plane']"
          fixed-width
          class="w-5 h-5 mr-2"
        />
        Отправить
      </button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { inject, reactive } from "vue";

import useVuelidate from "@vuelidate/core";
import type VueAxios from "vue-axios";
import type { AxiosError, AxiosResponse } from "axios";

import {
  required,
  minLength,
  email,
  maxLength,
  helpers,
} from "@vuelidate/validators";

import { useLoadingStore } from "@/stores/loading";

import { useCategoriesStore } from "@/stores/categories";
const categoriesStore = useCategoriesStore();
categoriesStore.fetchCategories();

const axios: any = inject<typeof VueAxios>("axios");

const loadingStore = useLoadingStore();

const initialForm = {
  email: "",
  phone: "",
  name: "",
  message: "",
  opd: false,
};

const form = reactive({ ...initialForm });

// Повторяющийся хелпер для правил валидации
const requiredHelper = helpers.withMessage(
  "Сожалеем, но это поле обязательно :(",
  required
);

const rules = {
  email: {
    // Можно просто оставить ValidationRule типа:
    // required,
    // но если нужно кастомное сообщение, то через helpers
    required: requiredHelper,
    email: helpers.withMessage(
      "Сожалеем, но возможно вы ввели почту неправильно, попробуйте ещё :(",
      email
    ),
  },
  phone: {
    required: requiredHelper,
  },
  name: {
    required: requiredHelper,
    alpha: helpers.withMessage(
      "Вас действительно так зовут? Кажется есть некорректные символы...",
      (val: string) => /^[а-яё ]*$/i.test(val)
    ),
    maxLengthName: helpers.withMessage(
      "Можно обращаться к Вам немного короче?",
      maxLength(50)
    ),
  },
  message: {
    required: requiredHelper,
    minLengthMessage: helpers.withMessage(
      "Вы действительно хотите что-то сообщить? Возможно нет?",
      minLength(20)
    ),
    maxLengthMessage: helpers.withMessage(
      "Мы совсем запутались, не могли бы Вы немного обобщить?",
      maxLength(500)
    ),
  },
  opd: {
    checked: (value: boolean) => value === true,
  },
};

const $v = useVuelidate(rules, form);

// Проверяет, действительна ли форма, и если да, то отправляет POST-запрос на сервер.
function onSubmit() {
  // Проверим форму
  $v.value.$touch();
  // Если валидна - отправим запрос
  if (!$v.value.$invalid) {
    return axios
      .post("/api/feedback")
      .then((response: AxiosResponse) => {
        console.log(response.data.title, response.data.message);
        onReset();
      })
      .catch((error: AxiosError) => {
        error.response?.data;
      });
  }

  return;
}

// Сброс формы
function onReset() {
  // Обнулим форму
  Object.assign(form, initialForm);
  // Сброс валидации
  $v.value.$reset();
}

const vMask = {
  mounted: (el: any, binding: any) => {
    console.log(el, binding);

    el.addEventListener("focus", function (event: any) {
      event.preventDefault();
    });
  },
};
</script>

<style lang="css" scoped></style>
