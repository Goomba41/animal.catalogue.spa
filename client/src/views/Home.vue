<script lang="ts" setup>
// import { RouterView } from "vue-router";
import { useMeta } from "vue-meta";
import Logo from "../components/Logo.vue";
import Navigation from "../components/Navigation.vue";

useMeta({
  title: "Каталог",
});
</script>

<template>
  <div class="grid grid-flow-row auto-rows-max">
    <Logo />
    <Navigation />
  </div>
</template>
