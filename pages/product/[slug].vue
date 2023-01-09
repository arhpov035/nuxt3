<template>
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
          <div class="page_filling">
            <div class="items">
              <CardDetailFillingSlide
                v-for="(filling, index) of fillings"
                :key="filling.id"
                :filling="filling"
                :index="index"
              />
            </div>
          </div>
        </div>
        <CardDetailSidebarLeft />
      </div>
      <div class="container-bottom">
        <CardDetailDescription />
        <CardDetailFormComment />
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="orderModal"
      tabindex="-1"
      aria-labelledby="orderModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog relative w-auto pointer-events-none">
        <div
          class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
        >
          <div
            class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
          >
            <h5
              class="text-xl font-medium leading-normal text-gray-800"
              id="orderModalLabel"
            >
              Оформление заказа
            </h5>
            <button
              type="button"
              class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body relative p-4">
            <div class="block p-6 rounded-lg bg-white max-w-md">
              <form>
                <div class="form-group mb-4">
                  <input
                    type="text"
                    class="mask-email form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Ваш e-mail"
                  />
                </div>
                <div class="form-group mb-4">
                  <input
                    type="text"
                    class="mask-phone form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="+7 (999) 999-99-99"
                  />
                </div>
                <div class="form-group mb-4">
                  <input
                    id="start"
                    type="date"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    min=""
                  />
                </div>
                <div class="form-group form-check text-center mb-2">
                  <label
                    class="form-check-label inline-block text-gray-800 text-sm"
                    for="exampleCheck25"
                    >Нажимая на кнопку "Отправить", я даю согласие на обработку
                    персональных данных</label
                  >
                </div>

                <button
                  type="submit"
                  class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Оформить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const priceWeightStore = usePriceWeightStore();
const productStore = useProductStore();
const route = useRoute();

const email = ref();
const emailErr = ref(false);

const { data: product } = await useAsyncData("product", () =>
  $fetch("https://api.tortam.ru/api/v1/product/" + route.params.slug)
);

const { data: fillings } = await useAsyncData("fillings", () =>
  $fetch("https://api.tortam.ru/api/v1/fillings")
);

useHead({
  title: product.value.name,
  meta: [{ name: "description", content: product.value.description }],
  bodyAttrs: { class: "test" },
  script: [
    {
      // src: "/js/tailwind.js",
    },
  ],
});

const handleSubmit = () => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(email.value)) {
    emailErr.value = true;
    return;
  } else {
    emailErr.value = false;
  }
};

onMounted(() => {
  if (localStorage.prevUrl != route.fullPath) {
    localStorage.prevUrl = route.fullPath;
    localStorage.activeWeight = 2;
    priceWeightStore.activeWeight = 2;
    priceWeightStore.weight = 2;
    priceWeightStore.price = 2800;
  } else {
    localStorage.prevUrl = route.fullPath;
  }
});
</script>

<style scoped>
.error {
  display: none;
}
.error.active {
  display: block;
  border: 1px solid red;
  color: red;
}
header {
  display: none;
}
.container-product {
  max-width: 1380px;
  width: 100%;
  margin: 0 auto;
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

.modal-form-order.active {
  display: block;
}
.close {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
}








.page_filling .items {
  display: flex;
  gap: 10px;
}
.page_filling .item {
  width: 100%;
  display: none;
}
.page_filling .item img {
  border-radius: 5px;
}
.page_filling .item {
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
