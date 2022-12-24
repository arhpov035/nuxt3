<template>
  <div class="sidebar_left">
    <div class="sidebar_left_pr">
      <div class="price_pay_for">
        Цена за торт весом <span id="numWeigth">{{ priceWeightStore.weight }}</span> кг
      </div>
      <div class="sidebar_left_price">
        <div class="price_order">
          <span id="price_order">{{ priceWeightStore.price }}</span>
          <span class="сurrency">₽</span>
        </div>
      </div>
    </div>

    <a type="button" class="order btn btn-blue" @click="showModelForm"
      >Заказать</a
    >
  </div>
</template>

<script setup>
const priceWeightStore = usePriceWeightStore();
</script>

<style scoped>
.sidebar_left {
  background-color: #fff;
  max-width: 285px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
}
.price_pay_for {
  margin-top: 15px;
}
.sidebar_left_pr {
  text-align: center;
}
#price_order {
  font-size: 44px;
  font-weight: 500;
}
.сurrency {
  font-size: 38px;
  color: #198754;
}
.order {
  background-color: #ffcc01;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 201px;
  width: 100%;
  height: 50px;
  border-radius: 4px;
  margin-top: 15px;
  cursor: pointer;
}
.order:hover {
  opacity: 0.8;
}
.price_order.active {
  position: relative;
  display: flex;
}

.price_order.active::before,
.price_order.active::after {
  content: " ";
  display: block;
  position: absolute;
  border: 1px solid #25d366;
  left: -20px;
  right: -20px;
  top: -20px;
  bottom: -20px;
  border-radius: 50%;
  animation: whatsapp 1.5s linear infinite;
  opacity: 0;
  backface-visibility: hidden;
}
.price_order.active span {
  display: block;
  width: 100%;
  height: 100%;
  background-position: 0px -1px;
  background-repeat: no-repeat;
  background-size: 55px;
}
.price_order.active::after {
  animation-delay: 0.5s;
}

@keyframes whatsapp {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

@media (max-width: 900px) {
  .sidebar_left {
    max-width: 330px;
    padding-bottom: 25px;
  }
}
@media (max-width: 480px) {
  .sidebar_left {
    max-width: 100%;
    order: 1;
    position: fixed;
    top: 0;
    z-index: 6;
    flex-direction: row;
    gap: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #c3bfbf;
  }
  .sidebar_left_pr {
    line-height: 1.2;
  }
  .sidebar_left > div {
    width: 60%;
  }
  .price_block {
    justify-content: center;
  }
  .price_pay_for {
    font-size: 0.85rem;
    margin-top: 0;
  }
  #numWeigth {
    font-size: 1rem;
  }
  #price_order {
    font-size: 1.3rem;
    font-weight: 600;
  }
  .сurrency {
    font-size: 1rem;
    font-weight: 600;
  }
  .order {
    font-size: 0.85rem;
    height: 30px;
    margin-top: 0;
    width: 40%;
    max-width: 40%;
  }
}
</style>
