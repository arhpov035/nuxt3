import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
import { usePriceWeightStore } from "./PriceWeightStore";

export const useCheckCurrentPreviousStore = defineStore(
  "checkCurrentPreviousStore",
  () => {
    const arrUrl = ref([]);
    const prevUrl = ref("");
    const route = useRoute();

    return {
      arrUrl,
      prevUrl,
    };
  }
);
