<template>
  <main>
    <Header/>
    <div class="main-container">
      <!-- <TheNavigation /> -->
      <div class="container">
        <NuxtPage />
      </div>
      <Footer />
      <MobileMenu />
    </div>
  </main>
</template>

<style scoped>
.main-container {
  margin-bottom: 50px;
}
.container {
  max-width: 1380px;
  width: 100%;
  margin: 0 auto;
  margin-top: 60px;
}
</style>
