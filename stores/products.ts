import { defineStore } from "pinia";

export const useProductsStore = defineStore({
  id: "post",
  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchPosts() {
      this.products = [];
      this.loading = true;
      try {
        this.products = await fetch(
          "http://api.tortam.ru/api/v1/products"
        ).then((response) => response.json());
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});