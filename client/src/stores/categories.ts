import type { AxiosResponse } from "axios";
import { defineStore } from "pinia";
import { inject } from "vue";

export const useCategoriesStore = defineStore({
  id: "categories",
  state: () => ({
    categories: [],
  }),
  getters: {},
  actions: {
    fetchCategories() {
      const axios: any = inject("axios");
      return axios
        .get("/api/categories/")
        .then((response: AxiosResponse) => {
          this.categories = response.data;
        })
        .catch((error: AxiosResponse) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
});
