<template>
  <div class="block p-1 rounded-lg shadow-lg bg-white max-w-sm">
    <form @submit.prevent="searchStore.getProducts(searchProduct)">
      <div class="form-group">
        <input
          type="text"
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="product"
          aria-describedby="product"
          placeholder="Поиск"
          v-model="searchProduct"
        />
      </div>
      <button
        type="submit"
        class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Найти
      </button>
    </form>
    <Loader v-if="searchStore.loader"/>
    <div v-else>
        <Product
        v-for="product of searchStore.products"
        :key="product.id"
        :product="product"
        :is-search="true"
        />
    </div>
  </div>
</template>

<script setup>
// реактивная переменная для связки с v-modal
import { ref } from "vue";

const searchStore = useSearchStore();
const productStore = useProductStore();

const searchProduct = ref("");
</script>

<style scoped>
form{
  display: flex;
}
  
</style>
