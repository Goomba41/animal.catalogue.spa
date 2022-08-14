<template>
  <b-row
    tag="nav"
    id="nav"
    class="pb-5"
    align-h="center"
    align-v="center"
    role="navigation"
  >
    <b-nav pills align="center">
      <!-- Категории -->
      <b-nav-item
        v-for="(category, index) in categories"
        v-bind:key="index"
        :to="{ name: 'animals', params: { category: category.route } }"
      >
        {{ category.title }}
      </b-nav-item>
      <!-- Страница с нашедшими дом -->
      <b-nav-item :to="{ name: 'chosen' }">Все дома!</b-nav-item>
      <!-- Страница для поддержки -->
      <b-nav-item :to="{ name: 'support' }">Поддержать</b-nav-item>

      <!-- Информационные страницы -->
      <b-nav-item-dropdown text="Информация" right>
        <b-dropdown-group header="Правовая информация">
          <b-dropdown-item :to="{ name: 'cookie' }">
            Политика cookie
          </b-dropdown-item>
          <b-dropdown-item :to="{ name: 'opd' }">
            Политика <abbr title="Обработка персональных данных">ОПД</abbr>
          </b-dropdown-item>
        </b-dropdown-group>
        <b-dropdown-group header="Прочая информация">
          <b-dropdown-item :to="{ name: 'foundling' }">
            Нашли животное?
          </b-dropdown-item>
          <b-dropdown-item :to="{ name: 'publication' }">
            Размещение в каталоге
          </b-dropdown-item>
        </b-dropdown-group>
      </b-nav-item-dropdown>

      <!-- Для поиска -->
      <!-- <b-nav-form @submit.stop.prevent="alert('Form Submitted')" class="pl-3">
        <b-input-group>
            <b-form-input aria-label="Input"></b-form-input>
            <b-input-group-append>
              <b-button type="submit">Search</b-button>
            </b-input-group-append>
          </b-input-group>
      </b-nav-form> -->
    </b-nav>
  </b-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Navigation",
  computed: mapState({
    categories: (state) => state.navigation,
  }),
  beforeMount() {
    this.$store.dispatch("getNavigation");
  },
};
</script>
