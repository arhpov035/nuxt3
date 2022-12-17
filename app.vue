<template>
  <div>
    <TheNavigation />
    <div class="container">
      <NuxtPage />
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </div>
  </div>
</template>
<!-- <script setup>
const { data: users } = await useAsyncData('users', () =>
  $fetch(`http://api.tortam.ru/api/v1/products`)
);
</script> -->

<style scoped>
.container {
  max-width: 1380px;
  width: 100%;
  margin: 0 auto;
  margin-top: 60px;
}
</style>
