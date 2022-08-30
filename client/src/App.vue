<script lang="ts" setup>
import { inject } from "vue";
import { useMeta } from "vue-meta";
import { RouterView } from "vue-router";

import Logo from "@/components/Logo.vue";
import Toast from "@/components/Toast.vue";
import Footer from "@/components/Footer.vue";
import BackToTop from "@/components/BackToTop.vue";
import Navigation from "@/components/Navigation.vue";
import CookieWarning from "@/components/CookieWarning.vue";

import { useLoadingStore } from "@/stores/loading";

import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const axios: any = inject("axios");
const store = useLoadingStore();

// Отслеживание начала загрузки (отправка запроса)
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    store.loading(true, "axios");
    return config;
  },
  (error: AxiosError) => {
    store.loading(false, "axios");
    return Promise.reject(error);
  }
);

// Отслеживание окончания загрузки (ответа от сервера)
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    store.loading(false, "axios");
    return response;
  },
  (error: AxiosError) => {
    store.loading(false, "axios");
    return Promise.reject(error);
  }
);

useMeta({
  htmlAttrs: { lang: "ru", amp: true },
  meta: [
    { vmid: "charset", charset: "utf-8" },
    {
      vmid: "viewport",
      name: "viewport",
      content:
        "width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no",
    },
    { vmid: "author", name: "author", content: "Goomba" },
    {
      vmid: "keywords",
      name: "keywords",
      content: "взять, собака, кошка, приют, щенок, даром, бесплатно",
    },
    {
      vmid: "description",
      name: "description",
      content:
        "Взять собаку или кошку из приюта – это нормально и совсем не страшно, а дворняги ничуть не хуже породистых собак!",
    },
    {
      vmid: "og:title",
      property: "og:title",
      content: "Каталог бездомных собак и кошек из Кирова. Возьми себе друга!",
    },
    {
      vmid: "og:description",
      property: "og:description",
      content:
        "Взять собаку или кошку из приюта – это нормально и совсем не страшно, а дворняги ничуть не хуже породистых собак!",
    },
    { vmid: "og:url", property: "og:url", content: "" },
    { vmid: "og:type", property: "og:type", content: "website" },
    { vmid: "og:image", property: "og:image", content: "" },
  ],
});
</script>

<template>
  <metainfo> </metainfo>

  <div class="container mx-auto flex flex-col min-h-screen py-4">
    <Logo />
    <Navigation />
    <div class="flex-auto mb-5 min-h-full">
      <RouterView />
    </div>
    <Footer />
  </div>

  <CookieWarning />
  <BackToTop />
  <!-- <Toast /> -->
</template>

<style scoped></style>
