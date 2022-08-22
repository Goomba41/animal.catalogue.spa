import type VueAxios from "vue-axios";

import { inject } from "vue";
import { defineStore } from "pinia";
import type { AxiosResponse } from "axios";

export const useCategoriesStore = defineStore({
  id: "categories",
  state: () => ({
    categories: [],
  }),
  getters: {},
  actions: {
    fetchCategories() {
      const axios: any = inject<typeof VueAxios>("axios");
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
