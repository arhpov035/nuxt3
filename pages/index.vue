<template>
  <ul v-for="product in products">
    <li>
      <!-- {{product.name}} -->
    </li>
  </ul>
</template>

<script setup>
const { data: products } = await useAsyncData('count', () => $fetch('http://api.tortam.ru/api/v1/products'))
</script>

