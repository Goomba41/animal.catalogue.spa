import nProgress from "nprogress";
import { defineStore } from "pinia";

export const useLoadingStore = defineStore({
  id: "loading",
  state: () => ({
    axios: true,
    route: true,
    loadersCounter: 0,
  }),
  getters: {
    loadingState(state): boolean {
      return (
        state.axios ||
        state.route ||
        state.loadersCounter > 0 ||
        nProgress.status !== null
      );
    },
  },
  actions: {
    loading(isLoading: boolean, type: "axios" | "route") {
      if (isLoading) {
        this.loadersCounter++;
        this[type] = true;
      } else if (this.loadersCounter > 0) {
        this.loadersCounter--;
        this[type] = this.loadersCounter > 0;
      }
    },
  },
});
