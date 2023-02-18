<template>
  <div>
    <h1>AliExpress Product List</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get("https://cors-anywhere.herokuapp.com/https://aliexpress.ru/?gatewayAdapt=glo2rus");
      const html = response.data;
      console.log(html)
    } catch (error) {
      console.error(error);
    }
  },
};
</script>