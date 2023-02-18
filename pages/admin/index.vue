<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-900 mb-6">Page Title</h1>

    <p class="text-lg text-gray-500 mb-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
      tincidunt urna, quis tincidunt tortor venenatis nec. Aliquam blandit, quam
      ac dapibus fringilla, nisi nulla interdum est, non vehicula tortor libero
      a lorem. Sed condimentum, urna vel rhoncus vehicula, nisi eros molestie
      risus, sit amet elementum nulla mi a sapien.
    </p>
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div class="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div class="px-4 py-5 sm:p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">
            Section Title 1
          </h2>
          <p class="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod tincidunt urna, quis tincidunt tortor venenatis nec.
          </p>
        </div>
      </div>
      <div class="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div class="px-4 py-5 sm:p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">
            Section Title 2
          </h2>
          <p class="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod tincidunt urna, quis tincidunt tortor venenatis nec.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
definePageMeta({ layout: "admin" });
</script>
