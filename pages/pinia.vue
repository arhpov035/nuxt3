<template>
  <div>
    <ul v-for="product in products">
    <li>
      {{product.name}}
    </li>
  </ul>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useProductsStore } from "~~/stores/products";

const postStore = useProductsStore();
const { products } = storeToRefs(postStore);

postStore.fetchPosts();
console.log(products);

</script>

<style scoped>
button {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
