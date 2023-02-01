import { defineStore } from "pinia";
import { ref } from "vue";

const url = "https://api.tortam.ru/api/v1/products?";


export const useSearchStore = defineStore("searchStore", () => {
  const loader = ref(false);
  const products = ref([]);

  const getProducts = async (search) => {
    loader.value = true;
    const res = await fetch(`${url}${search}`);
    const data = await res.json();
    products.value = data;
    loader.value = false;
  };

  const addBasketProduct = (object) => {
    const productStore = useProductStore();
    productStore.products.push({ ...object });
    console.log(productStore.products)
  };

  return {
    loader,
    products,
    getProducts,
    addBasketProduct,
  };
});
