<template>
  <div class="weight">
    <div :class="['items tab_1', { active: priceWeightStore.tab_1 === 1 }]">
      <div
        :class="['item', { active: priceWeightStore.activeWeight === 2 }]"
        @click="setActive(2)"
      >
        <div class="num">2</div>
        <div class="kg">кг</div>
      </div>
      <div
        :class="['item', { active: priceWeightStore.activeWeight === 2.5 }]"
        @click="setActive(2.5)"
      >
        <div class="num">2.5</div>
        <div class="kg">кг</div>
      </div>
      <div
        :class="['item', { active: priceWeightStore.activeWeight === 3 }]"
        @click="setActive(3)"
      >
        <div class="num">3</div>
        <div class="kg">кг</div>
      </div>
      <div
        :class="['item four', { active: priceWeightStore.activeWeight === 4 }]"
        @click="setActive(4)"
      >
        <div class="num">4</div>
        <div class="kg">кг</div>
      </div>
      <div
        :class="['item', { active: priceWeightStore.activeWeight === 5 }]"
        @click="setActive(5)"
      >
        <div class="num">5</div>
        <div class="kg">кг</div>
      </div>
    </div>
    <div :class="['items tab_2', { active: priceWeightStore.tab_2 === 1 }]">
      <div
        :class="['item', { active: priceWeightStore.activeWeight === 6 }]"
        @click="setActive(6)"
      >
        <div class="num">6</div>
        <div class="kg">кг</div>
      </div>
      <div
        :class="['item', { active: priceWeightStore.activeWeight === 7 }]"
        @click="setActive(7)"
      >
        <div class="num">7</div>
        <div class="kg">кг</div>
      </div>
      <div
        :class="['item', { active: priceWeightStore.activeWeight === 8 }]"
        @click="setActive(8)"
      >
        <div class="num">8</div>
        <div class="kg">кг</div>
      </div>
      <div
        :class="['item', { active: priceWeightStore.activeWeight === 9 }]"
        @click="setActive(9)"
      >
        <div class="num">9</div>
        <div class="kg">кг</div>
      </div>
      <div
        :class="['item', { active: priceWeightStore.activeWeight === 10 }]"
        @click="setActive(10)"
      >
        <div class="num">10</div>
        <div class="kg">кг</div>
      </div>
      <div
        :class="['item', { active: priceWeightStore.activeWeight === 11 }]"
        @click="setActive(11)"
      >
        <div class="num">11</div>
        <div class="kg">кг</div>
      </div>
    </div>
    <div :class="['next_back', { prev: priceWeightStore.nextBack === 1 }]" @click="priceWeightStore.prev()">
      <img src="/images/expand.svg" />
    </div>
  </div>
</template>

<script setup>
const setActive = (id) => {
  priceWeightStore.setActiveWeight(id);
};

const priceWeightStore = usePriceWeightStore();
</script>

<style scoped>
.weight {
  display: flex;
}

.items {
  display: flex;
  gap: 5px;
  display: none;
}
.items.active {
  display: flex;
}
.item {
  display: flex;
  background-color: #fff;
  width: 55px;
  height: 55px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  line-height: 0.9;
  cursor: pointer;
  border: 2px solid #f2f2f2;
}

.item.four {
  width: 119px;
}


.item.active {
  border: 2px solid #009ce6;
  background-color: #fff;
  position: relative;
  z-index: 5;
}
.item.active::before {
  content: url("/images/checkbox.svg");
  position: absolute;
  left: -7px;
  top: -10px;
  z-index: 10;
}

.next_back {
  background-color: #f2f2f2;
  border: 2px solid #f2f2f2;
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  margin-left: 5px;
  cursor: pointer;
}
.next_back img {
  transform: rotate(90deg);
  width: 20px;
}

.next_back.prev img {
  transform: rotate(-90deg);
  width: 20px;
}

@media (max-width: 480px) {
  .item,
  .next_back {
    width: 45px;
    height: 45px;
  }
  .item.four {
    width: 100px;
  }
}
@media (max-width: 365px) {
  .item,
  .next_back {
    width: 40px;
    height: 40px;
  }
  .item.four {
    width: 90px;
  }
}
</style>
