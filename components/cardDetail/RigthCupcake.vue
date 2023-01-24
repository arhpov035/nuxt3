<template>
  <div class="rigth">
    <h1 class="text-3xl font-bold">{{ product.name }}</h1>
    <div class="flex">
      <div class="left">
        <div class="price_block">
          <div class="before item">
            <div class="currency">₽</div>
            <div class="info">
              <div class="num">240руб/шт</div>
            </div>
          </div>
        </div>
      </div>
      <div class="rigth">
        <div class="select_weight">Выберите количество:</div>
        <div class="pieces">
          <div class="items">
            <div
              class="prev"
              :class="{ opacity: priceSetPieceStore.isOpacityPrev }"
            >
              <SvgArrowCircleLeft
                @click="priceSetPieceStore.prev()"
              />
            </div>

            <div class="piece-slide">
              <div
                class="piece-slide-line"
                :style="{ left: -priceSetPieceStore.offset + 'px' }"
              >
                <div
                  :class="[
                    'item',
                    {
                      active:
                        priceSetPieceStore.activeItem === indexItem + index,
                    },
                  ]"
                  @click="priceSetPieceStore.setActive(indexItem + index)"
                  v-for="index in 15"
                  :key="index"
                >
                  {{ indexItem + index }}
                </div>
              </div>
            </div>

            <div
              class="next"
              :class="{ opacity: priceSetPieceStore.isOpacityNext }"
            >
              <SvgArrowCircleRight @click="priceSetPieceStore.next()" />
            </div>
          </div>
        </div>
        <div class="select_filling">Выберите начинку:</div>
        <div class="page_filling">
          <div>
            <ul
              class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
              id="tabs-tab3"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <a
                  href="#tabs-home3"
                  class="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
                  id="tabs-home-tab3"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-home3"
                  role="tab"
                  aria-controls="tabs-home3"
                  aria-selected="true"
                  >Без начинки</a
                >
              </li>
              <li class="nav-item" role="presentation">
                <a
                  href="#tabs-profile3"
                  class="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                  id="tabs-profile-tab3"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-profile3"
                  role="tab"
                  aria-controls="tabs-profile3"
                  aria-selected="false"
                  >Клубника</a
                >
              </li>
              <li class="nav-item" role="presentation">
                <a
                  href="#tabs-messages3"
                  class="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                  id="tabs-messages-tab3"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-messages3"
                  role="tab"
                  aria-controls="tabs-messages3"
                  aria-selected="false"
                  >Сгущенка</a
                >
              </li>
            </ul>
            <div class="tab-content" id="tabs-tabContent3">
              <div
                class="tab-pane fade show active"
                id="tabs-home3"
                role="tabpanel"
                aria-labelledby="tabs-home-tab3"
              >
                <img
                  class="img-fluid"
                  src="/images/filling/cupkace/without-inner.jpg"
                  alt=""
                />
              </div>
              <div
                class="tab-pane fade"
                id="tabs-profile3"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab3"
              >
                <img
                  class="img-fluid"
                  src="/images/filling/cupkace/strawberry.jpg"
                  alt="клубничная"
                />
              </div>
              <div
                class="tab-pane fade"
                id="tabs-messages3"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab3"
              >
                <img
                  class="img-fluid"
                  src="/images/filling/cupkace/with_condensed_milk.jpg"
                  alt="сгущенка"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const priceSetPieceStore = usePriceSetPieceStore();
const props = defineProps({
  product: {
    type: Object,
  },
});


const indexItem = ref(5);

</script>

<style scoped>
.piece-slide {
  width: 275px;
  overflow: hidden;
}
.piece-slide-line {
  display: flex;
  transition: all ease 1s;
  gap: 5px;
  position: relative;
}
.piece-slide-line .item {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  min-width: 50px;
  height: 50px;
  cursor: pointer;
}

.piece-slide-line .item.active {
  border: 2px solid #009ce6;
}

.py-3 {
  padding-top: 0;
}
.flex .rigth {
  margin-top: 25px;
}
#tabs-tab3 {
  margin-bottom: 0;
}

.page_filling {
  display: flex;
  justify-content: center;
}
.page_filling img {
  max-width: 350px;
  width: 100%;
  border-radius: 10px;
}
.tab-pane.fade.show.active {
  display: flex;
  justify-content: center;
}
.prev,
.next {
  cursor: pointer;
  border-radius: 50%;
  background-color: #fff;
}
.opacity {
  opacity: 0;
  cursor: inherit;
}
.select_weight,
.select_filling {
  text-align: center;
  margin-bottom: 5px;
}
.pieces svg {
  width: 40px;
  height: 40px;
}

.pieces .items {
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
}
</style>
