import { defineStore } from "pinia";

export const usePriceWeightStore = defineStore("priceWeightStore", {
  state: () => ({
    price: 2800,
    weight: 2,
    activeWeight: 2,
    activeTabWeight: 1,
    nextBack: 0,
    tab_1: 1,
    tab_2: 0,
  }),
  getters: {
    priceKg() {
      return (this.price = 1400);
    },
  },
  actions: {
    setActiveWeight(id) {
      this.activeWeight = id;
      this.price = this.priceKg * id
    },
    setActiveTabWeight(id) {
      this.activeTabWeight = id;
      
    },
    prev() {
      if (this.nextBack === 0) {
        this.nextBack = 1;
        this.tab_1 = 0;
        this.tab_2 = 1;
      } else {
        this.nextBack = 0;
        this.tab_1 = 1;
        this.tab_2 = 0;
      }
    },
  },
});
