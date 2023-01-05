<template>
  <div class="page_filling">
    <div class="items">
      <div class="item first">
        <img
          class="flilslide"
          src="/images/filling/nachinka-muss-chernaya-smorodina.jpg"
          alt="smorodina"
        />
      </div>
      <div class="item two">
        <img
          class="prev"
          src="/images/svg/next_prev_slide.svg"
          alt=""
          @click="fillingStore.prevSlide"
        />
        <img
          class="flilslide"
          src="/images/filling/nachinka-pancho.jpg"
          alt=""
        />
        <img
          class="next"
          src="/images/svg/next_prev_slide.svg"
          alt=""
          @click="fillingStore.nextSlide"
        />
      </div>
      <div class="item free">
        <img
          class="flilslide"
          src="/images/filling/nachinka-tri-shokolada.jpg"
          alt=""
        />
      </div>
      <div class="item">
        <img
          class="flilslide"
          src="/images/filling/nachinka-napoleon.jpg"
          alt="smorodina"
        />
      </div>
      <div class="item">
        <img
          class="flilslide"
          src="/images/filling/nachinka-krasnyj-barhat.jpg"
          alt=""
        />
      </div>
      <div class="item">
        <img
          class="flilslide"
          src="/images/filling/nachinka-malinovyj-krem-chiz.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const fillingStore = useFillingStore();
</script>

<style scoped>
.prev,
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
.page_filling .item img{
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
}
@media (max-width: 480px) {
  .page_filling .items .item {
    display: none;
  }
  .page_filling .item.two {
    display: block;
  }
  .next {
    right: 0;
  }
  .prev {
    left: 0;
  }
}
</style>
