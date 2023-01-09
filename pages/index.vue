<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
    <Product
        v-for="product of products"
        :key="product.id"
        :product="product" />
  </div>
</template>

<script setup>
// import { useProductStore } from "@/stores/ProductStore";

// const productStore = useProductStore();

const { data: products } = await useAsyncData("product", () =>
  $fetch("https://api.tortam.ru/api/v1/products")
);

const route = useRoute();

// console.log(route.fullPath);

</script>

<style scoped>
header {
    display: block;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.header-logo {
  max-width: 50px;
  margin-right: 10px;
}
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}
.btn:hover {
  opacity: 0.7;
}
.btn_green {
  background: #37df5c;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
