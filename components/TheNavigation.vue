<template>
  <nav class="nav">
    <li><NuxtLink to="/product">Product</NuxtLink></li>
    <li><NuxtLink to="/">Main</NuxtLink></li>
    <li><NuxtLink to="/product/kkkk">kkkk</NuxtLink></li>
    <li><NuxtLink to="/pinia">pinia</NuxtLink></li>
  </nav>
</template>

<style>
.nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  background-color: darkblue;
  color: #fff;
}

.nav li {
  margin: 0 20px;
}
</style>
