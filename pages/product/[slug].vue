<template>
  <div class="page-product">
    <div class="container-product">
      <div class="product-desc">
        <div class="img">
          <img
            class="img-fluid"
            :src="`https://api.tortam.ru/storage/${product.image}`"
            :alt="product.image"
          />
        </div>

        <CardDetailRigthCake
          :product="product"
          :fillings="fillings"
          v-if="product.category.id === 1"
        />

        <CardDetailRigthCupcake
          :product="product"
          v-if="product.category.id === 2"
        />

        <CardDetailSidebarLeft v-if="product.category.id === 1" />

        <CardDetailSidebarLeftCupcake v-if="product.category.id === 2" />
      </div>
      <div class="container-bottom">
        <CardDetailDescription :description="product.description" />
        <CardDetailFormComment />
      </div>
    </div>
    <!-- Modal -->
    <ModalFormOrder
      :handleSubmit="handleSubmit"
      :errPhone="errPhone"
      :active="active"
      v-model:nameProduct="nameProduct"
      v-model:weightProduct="weightProduct"
      v-model:priceProduct="priceProduct"
      v-model:name="name"
      v-model:email="email"
      v-model:phone="phone"
      v-model:date="date"
    />
    <ModalSuccessFormOrder />
  </div>
</template>

<script setup>
import { ref } from "vue";
const priceWeightStore = usePriceWeightStore();
const productStore = useProductStore();
const route = useRoute();


const { data: product } = await useAsyncData("product", () =>
  $fetch("https://api.tortam.ru/api/v1/product/" + route.params.slug)
);

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found" });
}

const { data: fillings } = await useAsyncData("fillings", () =>
  $fetch("https://api.tortam.ru/api/v1/fillings")
);

const nameProduct = ref("");
const weightProduct = ref("");
const priceProduct = ref("");
const name = ref("");
const email = ref("");
const phone = ref("");
const date = ref("");
const errPhone = ref(false);

const active = ref(false);

// const isStripeLoaded = ref(false);

useHead({
  title: product.value.name + ' : купить в Тамбове за 1400 рублей за кг.',
  meta: [{ name: "description", content:  'Купите ' + product.value.description + ' в Тамбове по цене 1400 рублей за килограмм. Насладитесь неповторимым вкусом и удивительным дизайном своих гостей! Заказывайте сейчас на нашем интернет-магазине.' }],
  bodyAttrs: { class: "test" },
  script: [
    {
      // hid: "stripe",
      // src: "/js/tailwind.js",
      // defer: true,
      // body: true,
      // callback: () => {
      //   isStripeLoaded.value = true;
      // },
    },
  ],
});

const handleSubmit = async () => {
  // const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  // if (!regex.test(email.value)) {
  //   emailErr.value = true;
  //   // let emailErrText =
  //   document.querySelector('.emailErr').innerHTML  = 'Введите корректный emial';
  //   return;
  // } else {
  //   emailErr.value = false;
  // }

  nameProduct.value = document.querySelector("h1").innerHTML;
  weightProduct.value = document.querySelector("#numWeigth").innerHTML;
  priceProduct.value = document.querySelector("#price_order").innerHTML;

  const getParamForm =
    "&nameProduct=" +
    nameProduct.value +
    "&weightProduct=" +
    weightProduct.value +
    "&priceProduct=" +
    priceProduct.value +
    "&name=" +
    name.value +
    "&email=" +
    email.value +
    "&phone=" +
    phone.value +
    "&date=" +
    date.value;

  console.log(getParamForm);

  if (phone.value.replace(/[^\d.-]/g, "").length >= 11) {
    active.value = false;
    document.querySelector(".btn-close").click();
    document.querySelector("#openSuccessFormOrder").click();

    const res = await useAsyncData("res", () =>
      $fetch("https://api.tortam.ru/api/v1/mail?" + getParamForm)
    );
    console.log(phone.value.replace(/[^\d.-]/g, "").length);
    console.log(getParamForm);
  } else {
    active.value = true;
  }
};

onMounted(() => {
  maskPhone();

  if (localStorage.prevUrl != route.fullPath) {
    localStorage.prevUrl = route.fullPath;
    localStorage.activeWeight = 2;
    priceWeightStore.activeWeight = 2;
    priceWeightStore.weight = 2;
    priceWeightStore.price = 2800;
  } else {
    localStorage.prevUrl = route.fullPath;
  }

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;
  document.querySelector("#start").setAttribute("min", today);
});
</script>

<style>
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
