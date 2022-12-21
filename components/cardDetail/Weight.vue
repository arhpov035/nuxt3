<template>
  <div class="weight">
    <div class="items">
      <div class="item active" @click="addClass(0)">
        <div class="num">2</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass(1)">
        <div class="num">2.5</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass(2)">
        <div class="num">3</div>
        <div class="kg">кг</div>
      </div>
      <div class="item four" @click="addClass(3)">
        <div class="num">4</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass(4)">
        <div class="num">5</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass(5)">
        <div class="num">6</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass(6)">
        <div class="num">7</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass(7)">
        <div class="num">8</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass(8)">
        <div class="num">9</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass(9)">
        <div class="num">10</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass(10)">
        <div class="num">11</div>
        <div class="kg">кг</div>
      </div>
    </div>
    <div class="next_back" @click="showHideWeight">
      <img src="/images/expand.svg" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addClass(i) {
      let elems = document.querySelectorAll(".weight .item");
      let price_order = document.querySelector("#price_order");
      let price_kg_before = 1400;
      let price_kg_after = 2150;

      [].forEach.call(elems, function (el, index) {
        el.classList.remove("active");
        if (i == index) {
          el.classList.add("active");
        }

        switch (i) {
          case 0:
            price_order.innerHTML = price_kg_before * 2;
            break;
          case 1:
            price_order.innerHTML = price_kg_before * 2.5;
            break;
          case 2:
            price_order.innerHTML = price_kg_before * 3;
            break;
          case 3:
            price_order.innerHTML = price_kg_before * 4;
            break;
          case 4:
            price_order.innerHTML = price_kg_before * 5;
            break;
          case 5:
            price_order.innerHTML = price_kg_after * 6;
            break;
          case 6:
            price_order.innerHTML = price_kg_after * 7;
            break;
          case 7:
            price_order.innerHTML = price_kg_after * 8;
            break;
          case 8:
            price_order.innerHTML = price_kg_after * 9;
            break;
          case 9:
            price_order.innerHTML = price_kg_after * 10;
            break;
          case 10:
            price_order.innerHTML = price_kg_after * 11;
            break;
          default:
            price_order.innerHTML = price_kg_before * 2;
        }
      });
    },
    showHideWeight() {
      let elems = document.querySelectorAll(".weight .item");
      let next_back_img = document.querySelector(".weight .next_back img");

      if (next_back_img.classList.contains("rotate") == false) {
        [].forEach.call(elems, function (el, index) {
          if (index >= 5) {
            el.style.display = "flex";
            next_back_img.style.transform = `rotate(-${90}deg)`;
          } else {
            el.style.display = "none";
          }
        });
        next_back_img.classList.add("rotate");
      } else {
        [].forEach.call(elems, function (el, index) {
          if (index <= 4) {
            el.style.display = "flex";
            next_back_img.style.transform = `rotate(-${90}deg)`;
          } else {
            el.style.display = "none";
          }
        });
        next_back_img.classList.remove("rotate");
      }
    },
  },
};
</script>

<style scoped>
.weight {
  display: flex;
}
.kg::before {
  /* content: "кг"; */
}
.items {
  display: flex;
  gap: 5px;
}
.item {
  background-color: #fff;
  width: 55px;
  height: 55px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  display: none;
  line-height: 0.9;
  cursor: pointer;
  border: 2px solid #f2f2f2;
}

.item.four {
  width: 119px;
}

.item:nth-child(-n + 5) {
  display: flex;
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
