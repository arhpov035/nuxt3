import { defineStore } from "pinia";

const url = "http://api.tortam.ru/api/v1/products";
const res = await fetch(`${url}`);
const data = await res.json();

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: data,
  }),
});
