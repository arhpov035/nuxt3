import { defineStore } from "pinia";

export const useHeaderStore = defineStore("header", {
  state: () => ({
    displayBlock: 0,
  }),
  getters: {
    getUrl() {
      if (window.location.pathname === "/") {
        this.displayBlock = 1;
      }
      console.log(this.displayBlock);
    },
  },
});
