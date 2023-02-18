<template>

</template>


<script setup>
const { data: product } = await useAsyncData("product", () =>
  $fetch("https://api.tortam.ru/api/v1/product/" + route.params.slug)
);
console.log(product);
</script>