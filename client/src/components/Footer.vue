<script setup lang="ts">
import { computed } from "vue";

const projectStartYear: number = 2019;
const currentYear: null | string =
  new Date().getFullYear() > projectStartYear
    ? ` - ${new Date().getFullYear()}`
    : null;
</script>

<template>
  <div class="grid grid-rows-3 text-center place-items-center">
    <div class="socials">
      <a
        target="_blank"
        href="https://vk.com/public181634653"
        class="pr-2 hover:text-vk transition-colors"
      >
        <font-awesome-icon :icon="['fab', 'vk']" size="2x" fixed-width />
      </a>
      <a
        href=""
        class="pr-2 hover:text-instagram transition-colors"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'instagram']" size="2x" fixed-width />
      </a>
      <a
        target="_blank"
        href="https://t.me/Goomba_41"
        class="hover:text-telegram transition-colors"
      >
        <font-awesome-icon :icon="['fab', 'telegram']" size="2x" fixed-width />
      </a>
    </div>
    <div class="contacts text-xs flex items-end h-full">
      <a class="font-thin hover:text-primary-light transition-colors"
        >©️ {{ projectStartYear }} {{ currentYear }}</a
      >
      <span class="px-2">•</span>
      <a
        target="_blank"
        class="font-thin hover:text-primary-light transition-colors"
        href="tel:+79229471982"
        >+7 (922) 947-19-82</a
      >
      <span class="px-2">•</span>
      <a
        target="_blank"
        class="font-thin hover:text-primary-light transition-colors"
        href="mailto:ask@nevsedoma.ru"
        >ask@nevsedoma.ru</a
      >
    </div>
    <div class="services text-xs flex items-start h-full">
      <a
        role="link"
        target="_blank"
        class="font-thin hover:text-primary-light transition-colors"
        href="https://forms.yandex.ru/u/5e4b6aad3775d6014ccbec1c/"
      >
        Заказать фотосессию
      </a>
      <span class="px-2">•</span>
      <router-link
        role="link"
        class="font-thin hover:text-primary-light transition-colors"
        id="{{`publication-page`}}"
        :to="{ name: 'publication' }"
      >
        Размещение в каталоге
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
