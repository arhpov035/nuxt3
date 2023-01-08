<template>
  <div class="item first" v-if="index == 0">
    <img
      class="flilslide"
      :src="`/images/filling/${filling.image}`"
      :alt="filling.name"
    />
  </div>
  <div class="item two" v-else-if="index == 1">
    <img
      class="prev"
      src="/images/svg/next_prev_slide.svg"
      alt=""
      @click="fillingStore.prevSlide"
    />
    <img
      class="flilslide"
      :src="`/images/filling/${filling.image}`"
      :alt="filling.name"
    />
    <img
      class="next"
      src="/images/svg/next_prev_slide.svg"
      alt=""
      @click="fillingStore.nextSlide"
    />
    <div class="name">{{ filling.name }}</div>
  </div>
  <div class="item free" v-else-if="index == 2">
    <img
      class="flilslide"
      :src="`/images/filling/${filling.image}`"
      :alt="filling.name"
    />
  </div>
  <div class="item" v-else>
    <img
      class="flilslide"
      :src="`/images/filling/${filling.image}`"
      :alt="filling.name"
    />
  </div>
</template>

<script setup>
const fillingStore = useFillingStore();

// получаем продукт на который нажали
//  @click="searchStore.addBasketProduct(product)"

// const productStore = useProductStore();
const searchStore = useSearchStore();

const props = defineProps({
  filling: {
    type: Object,
    required: true,
    default: () => {},
  },
  index: "",
});
</script>

<style scoped>
/*.prev,
.next {
  width: 30px;
  position: absolute;
  z-index: 1;
}
.prev {
  top: calc(50% - 15px);
  left: -12%;
  transform: rotate(180deg);
}
.next {
  top: calc(50% - 15px);
  right: -9%;
}
.page_filling .items {
  display: flex;
  gap: 10px;
}
.page_filling .item {
  width: 100%;
  display: none;
}
.page_filling .item img {
  border-radius: 5px;
}
.page_filling .item.two {
  position: relative;
}
.page_filling .item:nth-child(-n + 3) {
  display: block;
}

.page_filling .item.first,
.page_filling .item.free {
  width: 80%;
  overflow: hidden;
  display: flex;
  align-items: center;
  opacity: 0.4;
}
.page_filling .item.first img,
.page_filling .item.free img {
  width: 100%;
  height: auto;
  margin: 0 0 0 -5px;
}*/
</style>
