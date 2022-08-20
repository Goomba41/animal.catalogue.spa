<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useCategoriesStore } from "@/stores/categories";

const store = useCategoriesStore();
store.fetchCategories();
</script>

<template>
  <nav
    class="nav flex flex-row md:flex-row flex-wrap pl-0 pb-5 justify-center"
    id="app_navigation"
    role="navigation"
    aria-label="Категории животных"
  >
    <div
      class="nav-item text-center mr-2"
      v-for="(category, index) in (store.categories as any)"
      v-bind:key="index"
      role="presentation"
    >
      <router-link
        class="nav-link [&.active]:bg-primary-dark hover:bg-primary-dark-hover transition-colors block font-medium text-xs leading-tight rounded px-6 py-3 my-2 focus:outline-none focus:ring-0"
        role="link"
        :id="`${category.route}-category`"
        :to="{ name: 'animals', params: { category: category.route } }"
      >
        {{ category.title }}
      </router-link>
    </div>
    <div class="nav-item text-center mr-2" role="presentation">
      <router-link
        class="nav-link [&.active]:bg-primary-dark hover:bg-primary-dark-hover transition-colors block font-medium text-xs leading-tight rounded px-6 py-3 my-2 focus:outline-none focus:ring-0"
        role="link"
        id="{{`adopted-page`}}"
        :to="{ name: 'adopted' }"
      >
        Все дома!
      </router-link>
    </div>

    <div class="nav-item text-center mr-2" role="presentation">
      <router-link
        class="nav-link [&.active]:bg-primary-dark hover:bg-primary-dark-hover transition-colors block font-medium text-xs leading-tight rounded px-6 py-3 my-2 focus:outline-none focus:ring-0"
        role="link"
        id="{{`support-page`}}"
        :to="{ name: 'support' }"
      >
        Поддержать
      </router-link>
    </div>

    <div
      class="relative inline-block text-center dropdown mr-2 last:mr-0"
      role="presentation"
    >
      <!-- class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" -->

      <button
        class="nav-link inline-flex content-center hover:bg-primary-dark-hover transition-colors font-medium text-xs leading-tight rounded px-6 py-3 my-2 focus:outline-none focus:ring-0 [&.active]:bg-primary-dark focus:bg-primary-dark"
        type="button"
        aria-haspopup="true"
      >
        <span>Информация</span>
        <svg class="w-3 h-3 ml-2 -mr-1" viewBox="0 0 20 16" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      <div
        class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95"
      >
        <div
          class="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg outline-none"
          aria-labelledby="headlessui-menu-button-1"
          role="menu"
        >
          <div class="px-4 py-3 bg-white rounded-tl-lg rounded-tr-lg">
            <p
              class="text-xs leading-5 text-gray-400 truncate cursor-default text-left"
            >
              Правовая информация
            </p>
          </div>
          <div class="py-1">
            <router-link
              class="text-black flex justify-between w-full hover:text-white [&.active]:bg-primary [&.active]:text-white hover:bg-primary-light-hover transition-colors text-sm text-left leading-5 px-4 py-2 focus:outline-none focus:ring-0"
              role="link"
              id="{{`cookie-page`}}"
              :to="{ name: 'cookie' }"
            >
              Политика cookie
            </router-link>

            <router-link
              class="text-black flex w-full hover:text-white [&.active]:bg-primary [&.active]:text-white hover:bg-primary-light-hover transition-colors text-sm text-left leading-5 px-4 py-2 focus:outline-none focus:ring-0"
              role="link"
              id="{{`opd-page`}}"
              :to="{ name: 'opd' }"
            >
              Политика&nbsp;<abbr title="Обработка персональных данных"
                >ОПД</abbr
              >
            </router-link>
          </div>
          <div class="px-4 py-3 bg-white">
            <p
              class="text-xs leading-5 text-gray-400 truncate cursor-default text-left"
            >
              Прочая информация
            </p>
          </div>
          <div class="py-1">
            <router-link
              class="text-black flex w-full hover:text-white [&.active]:bg-primary [&.active]:text-white hover:bg-primary-light-hover transition-colors text-sm text-left leading-5 px-4 py-2 focus:outline-none focus:ring-0"
              role="link"
              id="{{`foundling-page`}}"
              :to="{ name: 'foundling' }"
            >
              Нашли животное?
            </router-link>

            <router-link
              class="text-black flex w-full hover:text-white [&.active]:bg-primary [&.active]:text-white hover:bg-primary-light-hover transition-colors text-sm text-left leading-5 px-4 py-2 focus:outline-none focus:ring-0"
              role="link"
              id="{{`publication-page`}}"
              :to="{ name: 'publication' }"
            >
              Размещение в каталоге
            </router-link>

            <!-- <span
              role="menuitem"
              tabindex="-1"
              class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
              aria-disabled="true"
              >New feature (soon)</span
            > -->
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- <span class="skeleton-box rounded-full bg-gray-300 h-5"></span> -->
</template>

<style scoped>
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}
</style>