import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
const url = "https://api.tortam.ru/api/v1/products";

// const res = await fetch(`${url}`);
// const data = await res.json();

export const useProductStore = defineStore("productStore", () => {
  const products = ref([]);
  // const products = ref(data);
  const formActive = ref(0);
  const formFillingName = ref('formFillingName');

  const openForm = () => {
    formActive.value = 1;
    formFillingName.value = document.querySelector(".item.two .flilslide").getAttribute("src");
    console.log(formFillingName.value)
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
    formFillingName,
    openForm,
    closeForm,
  };
});
