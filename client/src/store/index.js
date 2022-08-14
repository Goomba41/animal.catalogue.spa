import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import lodash from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    navigation: [],
    animalsCategory: [],
    animalData: {
      current: {},
      next: [],
      previous: [],
    },
    loadingComplete: false,
  },
  mutations: {
    setNavigation(state, payload) {
      state.navigation = payload;
    },
    setCategories(state, payload) {
      state.categories = payload;
    },
    setAnimalsCategory(state, payload) {
      state.animalsCategory = payload;
    },
    setAnimalData(state, payload) {
      state.animalData = payload;
    },
    updateAnimalsCategory(state, payload) {
      state.animalsCategory = state.animalsCategory.concat(payload);
    },
  },
  actions: {
    // Загрузить категории для навигации
    getNavigation(context) {
      return axios
        .get("/api/categories/")
        .then((response) => {
          context.commit("setNavigation", response.data);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    // Загрузить категории
    getCategories(context) {
      return axios
        .get("/api/categories/")
        .then((response) => {
          let myArray = response.data;
          let parts = Math.floor(myArray.length / 2);
          const rm = myArray.length % parts;

          context.commit(
            "setCategories",
            rm
              ? [myArray.slice(0, 3), ...lodash.chunk(myArray.slice(3), 2)]
              : lodash.chunk(myArray, parts)
          );
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    // Загрузить первую страницу животных по категории
    getAnimalsCategory(context, payload) {
      // console.log(payload.offset);
      return axios
        .get(`/api/categories/${payload.category}/animals`, {
          params: {
            limit: payload.limit || 11,
            offset: payload.offset || 0,
          },
        })
        .then((response) => {
          let myArray = response.data;
          let parts = Math.floor(myArray.length / 2);
          const rm = myArray.length % parts;
          context.commit(
            "setAnimalsCategory",
            rm
              ? [myArray.slice(0, 3), ...lodash.chunk(myArray.slice(3), 2)]
              : lodash.chunk(myArray, parts)
          );
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    // Загрузить новую страницу животных по категории
    getNewAnimalsCategory(context, payload) {
      return axios
        .get(`/api/categories/${payload.category}/animals`, {
          params: {
            limit: payload.limit || 11,
            offset: payload.offset || 0,
          },
        })
        .then((response) => {
          if (response.data.length) {
            let myArray = response.data;
            let parts = Math.floor(myArray.length / 2);
            const rm = myArray.length % parts;
            context.commit(
              "updateAnimalsCategory",
              rm
                ? [myArray.slice(0, 3), ...lodash.chunk(myArray.slice(3), 2)]
                : lodash.chunk(myArray, parts)
            );
            this.state.loadingComplete = false;
          } else {
            this.state.loadingComplete = true;
          }
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    // Загрузить данные животного
    getAnimalData(context, payload) {
      return axios
        .get(`/api/animals/${payload.animal}`)
        .then((response) => {
          context.commit("setAnimalData", response.data);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
});
