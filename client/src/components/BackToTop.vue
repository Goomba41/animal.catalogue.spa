<template>
  <button
    type="button"
    id="btn-back-to-top"
    @click="scrollTo()"
    class="fixed p-3 bg-primary-dark text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-primary-dark-hover hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-light-hover active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5"
    :class="[show ? 'inline-block' : 'hidden']"
  >
    <font-awesome-icon
      :icon="['fas fw', 'arrow-up']"
      fixed-width
      class="w-3 h-3 text-primary-light"
    />
  </button>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let show = ref(false);

window.onscroll = function () {
  show.value =
    document.body.scrollTop > 325 || document.documentElement.scrollTop > 325;
};

function scrollTo(position: string = "documentTop") {
  console.log(position);
  if (position === "documentTop") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
</script>

<style lang="css" scoped></style>
