<template>
  <div class="sidebar_left">
    <div class="price_pay_for">
      Цена за торт весом <span class="numWeigth">2</span> кг
    </div>
    <div class="sidebar_left_price">
      <span id="price_order">2800</span> <span class="сurrency">₽</span>
    </div>
    <a class="order btn btn-blue" href="#">Заказать</a>
  </div>
</template>

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
}
@media (max-width: 900px) {
  .sidebar_left {
    max-width: 100%;
    order: 1;
    position: fixed;
    top: 0;
  }
}
@media (max-width: 480px) {

}
</style>
