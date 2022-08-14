<template>
  <b-container id="app">
    <router-view />
  </b-container>
</template>

<script>
export default {
  metaInfo: {
    htmlAttrs: {
      lang: "ru",
    },
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
        content:
          "Каталог бездомных собак и кошек из Кирова. Возьми себе друга!",
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
  },
};
</script>
