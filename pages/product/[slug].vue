<template>
  <!-- <Head>
    <Title>{{ product.name }}</Title>
    <Meta name="description" :content="product.description" />
  </Head> -->
  <div class="page-product">
    <div class="container-product">
      <div class="product-desc">
        <div class="img">
          <img
            class="img-fluid"
            :src="`../images/${product.image}`"
            :alt="product.image"
          />
        </div>
        <div class="rigth">
          <h1 class="text-3xl font-bold">{{ product.name }}</h1>
          <div class="price_block">
            <div class="before item">
              <div class="currency">₽</div>
              <div class="info">
                <div class="num">1400 руб/кг до 4 кг</div>
                <div class="desc">декор и фигурки не входят в цену</div>
              </div>
            </div>
            <div class="after item">
              <div class="currency">₽</div>
              <div class="info">
                <div class="num">2150 руб/кг от 4 кг</div>
                <div class="desc">декор и фигурки входят в цену</div>
              </div>
            </div>
          </div>
          <div class="select_weight">Выберите вес:</div>
          <CardDetailWeight />
          <div class="select_filling">Выберите начинку:</div>
          <CardDetailFillingSlide />
        </div>
        <div class="sidebar_left">
          <div class="sidebar_left_pr">
            <div class="price_pay_for">
              Цена за торт весом <span class="numWeigth">2</span> кг
            </div>
            <div class="sidebar_left_price">
              <span id="price_order">2800</span> <span class="сurrency">₽</span>
            </div>
          </div>

          <a type="button" class="order btn btn-blue" @click="showModelForm"
            >Заказать</a
          >
        </div>
      </div>
      <div class="container-bottom">
        <CardDetailDescription />
        <CardDetailFormComment />
      </div>
    </div>
    <div
      class="modal-form-order relative z-10"
      :class="{ active: isActive }"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="close" @click="showModelForm">
                <img class="" src="/images/svg/close.svg" alt="" />
              </div>

              <div class="sm:flex sm:items-start">
                <div class="form-container block p-6 rounded-lg bg-white">
                  <form>
                    <div class="form-group mb-6">
                      <input
                        type="text"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput7"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div class="form-group mb-6">
                      <input
                        type="email"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput8"
                        placeholder="Email"
                      />
                    </div>
                    <div class="form-group mb-6">
                      <input
                        type="phone"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput8"
                        placeholder="Телефон"
                      />
                    </div>
                    <div class="form-group form-check text-center mb-6">
                      <input
                        type="checkbox"
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                        id="exampleCheck87"
                        checked
                      />
                      <label
                        class="form-check-label inline-block text-gray-800"
                        for="exampleCheck87"
                        >Send me a copy of this message</label
                      >
                    </div>
                    <button
                      type="submit"
                      class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Заказать
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const { data: product } = await useAsyncData("product", () =>
  $fetch("http://api.tortam.ru/api/v1/product/" + route.params.slug)
);

// const { data: product } = await useFetch(
//   "http://api.tortam.ru/api/v1/product/" + route.params.slug
// );

// console.log(product.value.name)

useHead({
  title: product.value.name,
  meta: [{ name: "description", content: product.value.description }],
  bodyAttrs: { class: "test" },
  script: [{ children: "console.log('Hello world')" }],
});

const isActive = ref(false);

console.log(isActive.value);
function showModelForm() {
  if (isActive.value) {
    isActive.value = false;
  } else {
    isActive.value = true;
  }
  console.log(isActive.value);
}
</script>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
.container-product {
  max-width: 1380px;
  width: 100%;
  margin: 0 auto;
}
.page-product {
  /*background-color: #fff;*/
  /*padding-left: 20px;*/
  /*padding-right: 20px;*/
  /*padding-bottom: 20px;*/
}
.product-desc {
  background-color: #f2f2f2;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  box-shadow: 0 2px 7px 0 rgb(0 0 0 / 4%);
  border-radius: 2px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
}
.product-desc .img {
  max-width: 330px;
  min-width: 150px;
  width: 100%;
}
.product-desc img {
  width: 100%;
}
.product-desc .rigth {
  width: 100%;
  max-width: 675px;
}

h1 {
  color: #414141;
}

.price_block {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.price_block .item {
  display: flex;
  align-items: center;
}

.currency {
  font-size: 45px;
  padding-right: 10px;
}
.before .currency {
  color: #f33;
}
.after .currency {
  color: #009ce6;
}
.num {
  font-size: 14px;
  font-weight: bold;
}
.desc {
  font-size: 12.5px;
  color: #414141;
}

.select_weight,
.select_filling {
  margin-bottom: 12px;
  font-weight: bold;
}
.select_filling {
  margin-top: 15px;
}
.modal-form-order {
  display: none;
}
.form-container {
  width: 100%;
}

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

.modal-form-order.active {
  display: block;
}
.close {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
}
@media (max-width: 900px) {
  .product-desc {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .product-desc .rigth {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .product-desc .img {
    order: 2;
  }
  .product-desc .rigth {
    order: 3;
  }
  .sidebar_left {
    max-width: 330px;
    padding-bottom: 25px;
  }
}
@media (max-width: 480px) {
  .container-top {
    display: none;
  }
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
    width: 50%;
  }
  .price_block {
    justify-content: center;
  }
  .price_pay_for {
    font-size: 0.85rem;
    margin-top: 0;
  }
  .numWeigth {
    font-size: 0.85rem;
  }
  #price_order {
    font-size: 1rem;
  }
  .сurrency {
    font-size: 1rem;
  }
  .order {
    font-size: 0.85rem;
    height: 30px;
    margin-top: 0;
  }
}
</style>
