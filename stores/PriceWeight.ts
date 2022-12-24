import { defineStore } from "pinia";

export const usePriceStore = defineStore('priceStore', {
    state: () => ({
        price: 2800,
        weight: 2
    })
});