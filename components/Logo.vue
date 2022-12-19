<template>
  <div class="cotainer_logo">
    <img src="/images/conditer.png" />
    <NuxtLink to="/" class="logo">
      <span class="t">T</span>
      <span class="o">O</span>
      <span class="r">R</span>
      <span class="t">T</span>
      <span class="a">A</span>
      <span class="m">M</span>
    </NuxtLink>
  </div>
</template>

<script>
export default {};
</script>

<style>
.logo {
  font-size: 26px;
  font-weight: bold;
  text-decoration: none;
}
.t {
  color: #000;
}
.o {
  color: #000;
}
.r {
  color: #000;
}
.a {
  color: #000;
}
.m {
  color: #000;
}

.cotainer_logo{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cotainer_logo img{
  width: 18px;
}
</style>
