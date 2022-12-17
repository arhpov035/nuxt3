<template>
<div class="page-product">
    {{ product.name }}
    <img
              class="rounded-t-lg"
              :src="`/images/${product.image}`" 
              :alt="product.image"
            />
    <!--  -->
  </div>
</template>

<script setup>
const route = useRoute()

const { data: product } = await useAsyncData("count", () =>
  $fetch("http://api.tortam.ru/api/v1/product/"+route.params.slug)
);

</script>


<style scoped>

</style>
