<template>
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <form @submit.prevent="searchStore.getProducts(searchProduct)">
      <div class="form-group mb-6">
        <label
          for="exampleInputEmail1"
          class="form-label inline-block mb-2 text-gray-700"
          >Email address</label
        >
        <input
          type="text"
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="product"
          aria-describedby="product"
          placeholder="Поиск"
          v-model="searchProduct"
        />
        <small id="emailHelp" class="block mt-1 text-xs text-gray-600"
          >We'll never share your email with anyone else.</small
        >
      </div>

      <button
        type="submit"
        class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Submit
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
