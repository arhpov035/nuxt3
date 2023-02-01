<template>
  <div class="p-4 item">
    <div class="flex justify-center">
      <div class="rounded-lg shadow-lg bg-white max-w-sm">
        <a
          href="#!"
          class="block"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          <img
            class="rounded-t-lg"
            :src="`https://api.tortam.ru/storage/${product.image}`"
            :alt="product.image"
          />
        </a>
        <div class="p-6" v-if="!isSearch">
          <div class="title text-gray-900 text-xl font-medium mb-2">
            <NuxtLink :to="'product/' + product.slug">{{
              product.name
            }}</NuxtLink>
          </div>
          <button
            type="button"
            class="desctop indexOrder inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            data-bs-toggle="modal"
            data-bs-target="#orderModal"
            :data-name="product.name"
          >
            Заказать
          </button>
          <a
            href="https://chat.whatsapp.com/KhWaxlxvzB22dYnnK9wi47"
            target="_blank"
            style="background-color: #22c55e"
            class="mob inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            Заказать
          </a>
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
  },
});
</script>

<style scoped>
a.block {
  display: block;
  height: 250px;
}
a.block img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.shadow-lg {
  width: 100%;
}
.title {
  min-height: 56px;
}
.mob {
  display: none;
  text-align: center;
}
@media (max-width: 767px) {
  .desctop {
    display: none;
  }
  .mob {
    display: block;
  }
}
</style>
