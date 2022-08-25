<template>
  <h1 class="text-center my-7">Вопросы? Предложения? Сообщите нам!</h1>

  <form
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
        type="email"
        id="email"
        class="bg-gray-50 border-2 border-primary-dark focus:ring-2 focus-visible:ring-primary-light-hover text-sm rounded-lg focus:ring-primary-light-hover focus:border-primary-light-hover block w-full p-2.5"
        placeholder="Ваша электронная почта"
      />
    </div>

    <div class="w-2/3 2xl:w-2/5 xl:w-1/2 mb-6">
      <label for="email" class="block mb-2 text-sm font-medium"
        >Если не сможем ответить на почту, как с Вами связаться?
        <small class="text-gray-300 ml-4"
          >Или если будут нужные дополнительные сведения</small
        ></label
      >
      <input
        type="phone"
        id="phone"
        class="bg-gray-50 border-2 border-primary-dark focus:ring-2 focus-visible:ring-primary-light-hover text-sm rounded-lg focus:ring-primary-light-hover focus:border-primary-light-hover block w-full p-2.5"
        placeholder="Ваш телефон"
      />
    </div>

    <div class="w-2/3 2xl:w-2/5 xl:w-1/2 mb-6">
      <label for="email" class="block mb-2 text-sm font-medium"
        >Как к Вам обращаться?</label
      >
      <input
        type="name"
        id="name"
        class="bg-gray-50 border-2 border-primary-dark focus:ring-2 focus-visible:ring-primary-light-hover text-sm rounded-lg focus:ring-primary-light-hover focus:border-primary-light-hover block w-full p-2.5"
        placeholder="Ваше имя"
      />
    </div>

    <div class="w-2/3 2xl:w-2/5 xl:w-1/2 mb-6">
      <label for="message" class="block mb-2 text-sm font-medium"
        >Коротко и содержательно опишите возникшую ситуацию
        <small class="text-gray-300 ml-4">(20-500 символов)</small></label
      >
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm rounded-lg bg-gray-50 border-2 border-primary-dark focus:ring-2 focus-visible:ring-primary-light-hover focus:ring-primary-light-hover focus:border-primary-light-hover"
        placeholder="Что Вы хотите нам сказать?"
      ></textarea>
    </div>

    <div
      class="controls justify-between flex flex-col sm:flex-row w-2/3 2xl:w-2/5 xl:w-1/2"
    >
      <div class="flex items-center mb-5 sm:mb-0">
        <input
          id="opd"
          type="checkbox"
          value=""
          class="w-4 h-4 text-primary-dark bg-gray-100 rounded border-4 border-primary-dark focus:ring-primary-light-hover focus:ring-2"
        />
        <label for="default-checkbox" class="ml-2 text-sm font-medium"
          >Я ознакомился(-ась) и согласен(-на) с
          <router-link class="text-link" :to="{ name: 'opd' }"
            >политикой обработки персональных данных</router-link
          ></label
        >
      </div>

      <button
        type="submit"
        class="text-white bg-primary-dark hover:bg-primary-dark-hover focus:ring-4 focus:outline-none focus:ring-primary-light-hover font-medium rounded-lg text-xs px-3 py-1.5 text-center inline-flex items-center transition-colors"
      >
        <font-awesome-icon
          :icon="['fas', 'paper-plane']"
          fixed-width
          class="w-5 h-5 mr-2 text-primary-light"
        />
        Отправить
      </button>
    </div>
  </form>
</template>

<script lang="ts" setup>
function onSubmit() {
  console.log("submit");
}
function onReset() {
  console.log("reset");
}
</script>

<style lang="css" scoped></style>
