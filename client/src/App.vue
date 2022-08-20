<script lang="ts" setup>
import { RouterView } from "vue-router";
import { useActiveMeta, useMeta } from "vue-meta";

const siteName: string = "Не все дома?";
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
  <metainfo>
    <template v-slot:title="{ content }">
      {{ content ? `${content} • ${siteName}` : siteName }}
    </template>
  </metainfo>

  <div class="container mx-auto h-screen py-4">
    <RouterView />
  </div>
</template>

<style scoped></style>
