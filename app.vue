<template>
  <main>
    <Header />
    <div class="main-container">
      <!-- <TheNavigation /> -->

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <Footer />
      <MobileMenu />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
// const isStripeLoaded = ref(false);

useHead({
  script: [
    {
      // hid: "stripe",
      // src: "/js/tailwind.js",
      // defer: true,
      // body: true,
      // callback: () => {
      //   isStripeLoaded.value = true;
      // },
    },
  ],
});
</script>

<style scoped>
.main-container {
  margin-bottom: 50px;
}
</style>
