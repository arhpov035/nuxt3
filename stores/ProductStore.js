import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
const url = "http://api.tortam.ru/api/v1/products";

const res = await fetch(`${url}`);
const data = await res.json();

export const useProductStore = defineStore("productStore", () => {
  const products = ref(data);
  const formActive = ref(0);

  const openForm = () => {
    formActive.value = 1;
  };

  const closeForm = () => {
    formActive.value = 0;
  };

  // watch(counter, (newValue, oldValue) => {
  //   console.log("Новое значение counter: " + counter.value);
  //   console.log("localStorage: " + localStorage.counter);
  //   counter.value = +localStorage.counter;
  // });


  return {
    products,
    formActive,
    openForm,
    closeForm,
  };
});
