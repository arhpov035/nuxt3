<template>
  <div class="rigth">
    <h1 class="text-3xl font-bold">{{ product.name }}</h1>
    <div class="price_block">
      <div class="before item">
        <div class="currency">₽</div>
        <div class="info">
          <div class="num">240руб/шт</div>
        </div>
      </div>
    </div>
    <div class="select_weight">Выберите количество:</div>
    <div class="pieces">
      <div class="items">
        <div class="prev" :class="{ opacity: isOpacityPrev }">
          <SvgArrowCircleLeft @click="prev(activePiece)" />
        </div>
        <div :class="['piece', { active: activePiece === 1 }]">
          <div class="items">
            <div
              :class="['item', { active: activeItem === 6 }]"
              @click="setActive(6)"
            >
              6
            </div>
            <div
              :class="['item', { active: activeItem === 7 }]"
              @click="setActive(7)"
            >
              7
            </div>
            <div
              :class="['item', { active: activeItem === 8 }]"
              @click="setActive(8)"
            >
              8
            </div>
            <div
              :class="['item', { active: activeItem === 9 }]"
              @click="setActive(9)"
            >
              9
            </div>
            <div
              :class="['item', { active: activeItem === 10 }]"
              @click="setActive(10)"
            >
              10
            </div>
          </div>
        </div>
        <div :class="['piece', { active: activePiece === 2 }]">
          <div class="items">
            <div
              :class="['item', { active: activeItem === 11 }]"
              @click="setActive(11)"
            >
              11
            </div>
            <div
              :class="['item', { active: activeItem === 12 }]"
              @click="setActive(12)"
            >
              12
            </div>
            <div
              :class="['item', { active: activeItem === 13 }]"
              @click="setActive(13)"
            >
              13
            </div>
            <div
              :class="['item', { active: activeItem === 14 }]"
              @click="setActive(14)"
            >
              14
            </div>
            <div
              :class="['item', { active: activeItem === 15 }]"
              @click="setActive(15)"
            >
              15
            </div>
          </div>
        </div>
        <div :class="['piece', { active: activePiece === 3 }]">
          <div class="items">
            <div
              :class="['item', { active: activeItem === 16 }]"
              @click="setActive(16)"
            >
              16
            </div>
            <div
              :class="['item', { active: activeItem === 17 }]"
              @click="setActive(17)"
            >
              17
            </div>
            <div
              :class="['item', { active: activeItem === 18 }]"
              @click="setActive(18)"
            >
              18
            </div>
            <div
              :class="['item', { active: activeItem === 19 }]"
              @click="setActive(19)"
            >
              19
            </div>
            <div
              :class="['item', { active: activeItem === 20 }]"
              @click="setActive(20)"
            >
              20
            </div>
          </div>
        </div>
        <div class="next" :class="{ opacity: isOpacityNext }">
          <SvgArrowCircleRight @click="next(activePiece)" />
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
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  product: {
    type: Object,
  },
});

const isOpacityPrev = ref(true);
const isOpacityNext = ref(false);
const activePiece = ref(1);
const activeItem = ref(6);

const setActive = (id) => {
  activeItem.value = id;
};

const prev = (id) => {
  if (id == 3) {
    activePiece.value = 2;
    isOpacityNext.value = false;
  } else if (id == 2) {
    activePiece.value = 1;
    isOpacityPrev.value = true;
  }
};
const next = (id) => {
  if (id == 1) {
    activePiece.value = 2;
    isOpacityPrev.value = false;
  } else if (id == 2) {
    activePiece.value = 3;
    isOpacityNext.value = true;
  }
};
</script>

<style scoped>
.page_filling {
    display: flex;
    justify-content: center;
}
.page_filling img{
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
.select_weight {
  text-align: center;
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
.piece {
  display: none;
}
.piece .item {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.piece.active {
  display: block;
}
.piece .item.active {
  border: 2px solid #009ce6;
}
</style>
