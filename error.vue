<template>
  <main>
    <Header />
    <div class="container">
      <div class="main-container">
        {{ error.statusCode }}
        {{ error.message }}
        <button @click="handleClearError">Go Home</button>
      </div>
    </div>
  </main>
</template>

<script setup>
defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });
</script>
