import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const usePriceWeightStore = defineStore("priceWeightStore", () => {
  // const previousPrice = localStorage.price || 2800
  // const price = ref(previousPrice);
  const price = ref(2800);

  const weight = ref(2);
  const activeWeight = ref(2);
  const nextBack = ref(0);
  const tab_1 = ref(1);
  const tab_2 = ref(0);
  const activeAnimation = ref(0);
  const isWatched = ref(true);

  // getter
  const priceKg = computed(() => (price.value = 1400));



  const prev = () => {
    if (nextBack.value === 0) {
      nextBack.value = 1;
      localStorage.nextBack = nextBack.value;

      tab_1.value = 0;
      localStorage.tab_1 = tab_1.value;

      tab_2.value = 1;
      localStorage.tab_2 = tab_2.value;
    } else {
      nextBack.value = 0;
      localStorage.nextBack = nextBack.value;

      tab_1.value = 1;
      localStorage.tab_1 = tab_1.value;

      tab_2.value = 0;
      localStorage.tab_2 = tab_2.value;
    }
  };

  // action
  // function
  const setActiveWeight = (id) => {
    activeWeight.value = id;
    localStorage.activeWeight = activeWeight.value;

    price.value = priceKg.value * id;
    localStorage.price = price.value;

    weight.value = id;
    localStorage.weight = weight.value;

  };


  onMounted(() => {

    if (localStorage.price) {
      price.value = +localStorage.price;
    }
    if (localStorage.weight) {
      weight.value = +localStorage.weight;
    }
    if (localStorage.activeWeight) {
      activeWeight.value = +localStorage.activeWeight;
    }
    if (localStorage.nextBack) {
      nextBack.value = +localStorage.nextBack;
    }
    if (localStorage.tab_1) {
      tab_1.value = +localStorage.tab_1;
    }
    if (localStorage.tab_2) {
      tab_2.value = +localStorage.tab_2;
    }
  });

  return {
    price,
    weight,
    activeWeight,
    // activeTabWeight,
    nextBack,
    tab_1,
    tab_2,
    priceKg,
    setActiveWeight,
    // setActiveTabWeight,
    prev,
  };
});
