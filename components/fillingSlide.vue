<template>
  <swiper
    class="swip"
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide><img src="/images/filling/nachinka-muss-chernaya-smorodina.jpg" alt=""
    /></swiper-slide>
    <swiper-slide><img src="/images/filling/nachinka-napoleon.jpg" alt=""
    /></swiper-slide>
    <swiper-slide><img src="/images/filling/nachinka-pancho.jpg" alt=""
    /></swiper-slide>
    <swiper-slide><img src="/images/filling/nachinka-tri-shokolada.jpg" alt=""
    /></swiper-slide>
    <swiper-slide><img src="/images/filling/nachinka-muss-chernaya-smorodina.jpg" alt=""
    /></swiper-slide>
    <swiper-slide><img src="/images/filling/nachinka-napoleon.jpg" alt=""
    /></swiper-slide>
    <swiper-slide><img src="/images/filling/nachinka-pancho.jpg" alt=""
    /></swiper-slide>
    ...
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style scoped>
.swip {
    max-width: 500px;
    width: 100%;
}
</style>
