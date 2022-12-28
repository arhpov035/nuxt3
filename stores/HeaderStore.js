import { defineStore } from "pinia";

export const useHeaderStore = defineStore("headerStore", {
  state: () => ({
    displayBlock: false,
  }),
  getters: {
    getUrl() {
      if (window.location.pathname === '/') {
        return true;
      }
    },
  },
});
