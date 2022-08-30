<script setup lang="ts">
import { inject, onMounted, ref, type Ref } from "vue";
import type { VueCookies } from "vue-cookies";

let visible: Ref<boolean> = ref(true);

const $cookies: any = inject<VueCookies>("$cookies");

function CookieAccept() {
  $cookies.set("CookieAccepted", "true", { expires: "1M" });
  visible.value = false;
}

function CookieDismissed() {
  $cookies.set("CookieAccepted", "false", { expires: "1M" });
}

onMounted(() => {
  const cookie = $cookies.get("CookieAccepted");
  visible.value = cookie !== "true";
});
</script>

<template>
  <div
    id="cookie-alert"
    class="p-4 mx-4 mb-4 border border-primary-dark-hover rounded-lg bg-primary-light fixed bottom-0 shadow-lg z-50"
    role="alert"
    v-if="visible"
  >
    <div class="flex items-center">
      <font-awesome-icon
        :icon="['fas', 'circle-info']"
        fixed-width
        aria-hidden="true"
        class="w-5 h-5 mr-2 text-primary-dark"
      />
      <span class="sr-only">Информация</span>
      <h3 class="text-lg font-medium text-primary-dark">
        На сайте используются файлы cookie
      </h3>
    </div>
    <div class="mt-2 mb-4 text-sm text-primary-dark">
      Во время посещения данного сайта, может использоваться общеотраслевая
      технология, называемая cookie. Файлы cookie представляют собой небольшие
      фрагменты данных, которые временно сохраняются на вашем компьютере или
      мобильном устройстве, и обеспечивают более эффективную работу сайта (<a
        target="_blank"
        class=""
        href="https://ru.wikipedia.org/wiki/Cookie"
        >подробнее о cookie</a
      >). Продолжая просматривать данный сайт, Вы соглашаетесь с
      <router-link target="_blank" class="" :to="{ name: 'cookie' }"
        >использованием файлов cookie</router-link
      >
      и принимаете условия.
    </div>
    <div class="flex">
      <button
        type="button"
        class="text-white bg-primary-dark hover:bg-primary-dark-hover focus:ring-4 focus:outline-none focus:ring-primary-light-hover font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center transition-colors"
        @click="CookieAccept()"
      >
        <font-awesome-icon
          :icon="['fas', 'thumbs-up']"
          fixed-width
          class="w-5 h-5 mr-2 text-primary-light"
        />
        Продолжить
      </button>
      <button
        type="button"
        class="text-primary-dark bg-transparent border border-primary-dark hover:bg-primary-dark hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-light-hover font-medium rounded-lg text-xs px-3 py-1.5 text-center inline-flex items-center transition-colors"
        aria-label="Close"
        @click="CookieDismissed()"
      >
        Отказаться
      </button>
    </div>
  </div>
</template>

<style scoped></style>
