import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
const url = "https://api.tortam.ru/api/v1/products";

// const res = await fetch(`${url}`);
// const data = await res.json();

export const useProductStore = defineStore("productStore", () => {
  const products = ref([]);
  const skip = ref(0);
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

  const addBasketProduct = async() => {
    skip.value += 12;
    const res = await fetch("https://api.tortam.ru/api/v1/products/" + skip.value);
    const r = await res.json();
    if  (skip.value == 12){
      products.value = r;
    }else {
      products.value.push(r);
    }
    

    console.log(products.value.object)
    console.log(444)
  };

  onMounted(async () => {
    // const res = await fetch(`${url}`);
    // products.value = await res.json();
  });

  return {
    products,
    formActive,
    formFillingName,
    skip,
    openForm,
    closeForm,
    addBasketProduct,
  };
});
