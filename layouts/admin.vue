<template>
  <div class="flex">
    <div class="sidebar bg-gray-100 w-64 lg:max-w-xs px-20 py-0">
      <nav class="py-4">
        <ul class="parent space-y-2">
          <li
            class="text-lg font-semibold text-gray-900"
            v-for="(category, index) in categories"
            :key="category.id"
          >
            <NuxtLink :to="'admin/' + category.slug">{{
              category.name
            }}</NuxtLink>
            <span @click.prevent="toggleItem(index)">+</span>
            <ul
              :class="[
                'child space-y-2',
                {
                  active: activeMenu === index,
                },
              ]"
            >
              <li
                class="text-lg font-semibold text-gray-900"
                v-for="product of category.products"
                :key="product.id"
              >
                <NuxtLink :to="'products/' + product.slug">{{
                  product.name
                }}</NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex-1 bg-white">
      <div class="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const activeMenu = ref(1);

const { data: categories } = await useAsyncData("categories", () =>
  $fetch("https://api.tortam.ru/api/v1/categories")
);
const toggleItem = (index) => {
  if (index == activeMenu.value) {
    activeMenu.value = null;
  } else {
    activeMenu.value = index;
  }
};
</script>

<style scoped>
.h-screen {
  min-height: 100vh;
}
.sidebar {
  max-width: 250px;
  width: 100%;
  padding-left: 20px;
}
.child {
  padding-left: 20px;
  display: none;
}
.child.active {
  display: block;
}
.child li {
  padding-left: 10px;
}
.child li a {
  font-size: 14px;
}
</style>
