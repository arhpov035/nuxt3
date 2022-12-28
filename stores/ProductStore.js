import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
const url = "http://api.tortam.ru/api/v1/products";

// const res = await fetch(`${url}`);
// const data = await res.json();

export const useProductStore = defineStore("productStore", () => {
  const products = ref([]);
  // const products = ref(data);
  const formActive = ref(0);

  const openForm = () => {
    formActive.value = 1;
  };

  const closeForm = async () => {
    formActive.value = 0;
  };

  onMounted(async () => {
    const res = await fetch(`${url}`);
    products.value = await res.json();
  });

  return {
    products,
    formActive,
    openForm,
    closeForm,
  };
});
