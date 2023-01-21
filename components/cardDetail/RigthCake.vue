<template>
  <div class="rigth">
    <h1 class="text-3xl font-bold">{{ product.name }}</h1>
    <div class="price_block">
      <div class="before item">
        <div class="currency">₽</div>
        <div class="info">
          <div class="num">1400 руб/кг до 4 кг</div>
          <div class="desc">декор и фигурки не входят в цену</div>
        </div>
      </div>
      <div class="after item">
        <div class="currency">₽</div>
        <div class="info">
          <div class="num">2150 руб/кг от 4 кг</div>
          <div class="desc">декор и фигурки входят в цену</div>
        </div>
      </div>
    </div>
    <div class="select_weight">Выберите вес:</div>
    <CardDetailWeight />
    <div class="select_filling">Выберите начинку:</div>
    <div class="page_filling">
      <div class="items">
        <CardDetailFillingSlide
          v-for="(filling, index) of fillings"
          :key="filling.id"
          :filling="filling"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
  },
  fillings: {
    type: Object,
  },
});
</script>
