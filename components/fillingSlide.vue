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
        <img class="prev" src="/images/svg/next_prev_slide.svg" alt="" />
        <img
          class="flilslide"
          src="/images/filling/nachinka-pancho.jpg"
          alt=""
        />
        <img class="next" src="/images/svg/next_prev_slide.svg" alt="" />
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
          src="/images/filling/nachinka-muss-chernaya-smorodina.jpg"
          alt="smorodina"
        />
      </div>
      <div class="item">
        <img
          class="flilslide"
          src="/images/filling/nachinka-pancho.jpg"
          alt=""
        />
      </div>
      <div class="item">
        <img
          class="flilslide"
          src="/images/filling/nachinka-tri-shokolada.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    imgSlideWeightIndex() {
      let cont = document.getElementById("swip");
      cont.onclick = function (element) {
        var e = element.target.id;
        var e = element.target.alt;
        console.log(e);
      };
    },
  },
};
</script>

<style scoped>
.prev,
.next {
  width: 30px;
  position: absolute;
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
  display: none;
}
.page_filling .item.two {
  position: relative;
}
.page_filling .item:nth-child(-n + 3) {
  display: block;
}
@media (max-width: 480px) {
  .page_filling .items .item {
    display: none;
  }
  .page_filling .item.two {
    display: block;
  }
}
</style>
