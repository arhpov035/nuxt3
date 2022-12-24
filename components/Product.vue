<template>
  <div class="p-4">
    <div class="flex justify-center">
      <div class="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img
            class="rounded-t-lg"
            :src="`/images/${product.image}`"
            :alt="product.image"
          />
        </a>
        <div class="p-6" v-if="!isSearch">
          <h5 class="text-gray-900 text-xl font-medium mb-2">
            <NuxtLink :to="'product/' + product.slug">{{
              product.name
            }}</NuxtLink>
          </h5>
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
            Button
          </button>
        </div>
        <div class="p-6" v-else>
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            @click="searchStore.addBasketProduct(product)"
            >
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// получаем продукт на который нажали
//  @click="searchStore.addBasketProduct(product)"


// const productStore = useProductStore();
const searchStore = useSearchStore();

const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => {},
  },
  isSearch: {
    type: Boolean,
    required: true,
    default: false,
  }
});
</script>
