<template>
  <div class="">
    {{ error.statusCode }}
    {{ error.message }}
    <button @click="handleClearError">Go Home</button>
  </div>
</template>

<script setup>
defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });


</script>

