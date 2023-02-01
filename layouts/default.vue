<template>
  <div id="default-layout">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1380px;
  width: 100%;
  margin: 0 auto;
  margin-top: 60px;
}
</style>
