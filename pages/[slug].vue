<template>
<div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
    <Product
        v-for="product of category.products"
        :key="product.id"
        :product="product" />
  </div>
</template>

<script setup>
const route = useRoute();

const { data: category } = await useAsyncData("category", () =>
  $fetch("https://api.tortam.ru/api/v1/category/" + route.params.slug)
);

useHead({
  title: product.value.name,
  meta: [{ name: "description", content: product.value.description }],
  bodyAttrs: { class: "test" },
  script: [
    {
      // src: "/js/tailwind.js",
    },
  ],
});

</script>