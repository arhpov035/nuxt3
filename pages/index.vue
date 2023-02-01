<template>
  <div class="text">
    <div class="flex items-center h-full justify-center mb-4">
      <h1 class="text-3xl font-bold leading-tight text-gray-800">
        Tortam.ru: Изготовление тортов на высшем уровне
      </h1>
    </div>
    <p>
      Наш сайт Tortam.ru предлагает вам заказать самые вкусные и красивые торты
      на любое мероприятие. Мы используем только свежие и качественные
      ингредиенты для приготовления наших тортов. Наш профессиональный кондитер
      с удовольствием создаст для вас уникальный дизайн торта, соответствующий
      вашим пожеланиям.
    </p>
    <p>
      Не ждите, закажите торт уже сейчас и получите гарантированный взрыв вкуса
      на вашем мероприятии. Доверьте приготовление своего торта профессионалу и
      насладитесь самыми высококачественными тортами!
    </p>
  </div>
  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
    <Product v-for="product of products" :key="product.id" :product="product" />
    <Product
      v-for="product of productStore.showProducts"
      :key="product.id"
      :product="product"
    />

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
  <div class="flex justify-center">
    <button
      @click="showMore"
      type="button"
      class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
    >
      Показать ещё
    </button>
  </div>
  <div class="flex">
    <div class="conditer">
      <img
        src="/images/278126077_1685986688420697_5297067698427785428_n.jpg"
        alt="Confectioner's photo"
        class="h-48 rounded-lg"
      />
    </div>
    <div class="conditer-description">
      <h2 class="text-2xl font-bold">Кондитер Анна</h2>
      <p class="text-gray-600">
        Наш кондитер - профессионал своего дела с многолетним опытом работы. Она
        создает великолепные торты и капкейки исключительно из
        высококачественных ингредиентов, придерживаясь традиционных рецептов.
        Её творения всегда получают высокие оценки и одобрение клиентов,
        которые ценят высочайшее качество и исключительный вкус. Заказывайте
        торты и капкейки у нашего кондитера и получайте незабываемые
        восторженные впечатления от каждой десертной начинки.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isStripeLoadedIndex = ref(false);

useHead({
  script: [
    {
      hid: "stripe",
      src: "/js/tailwind.js",
      defer: true,
      body: true,
      callback: () => {
        isStripeLoadedIndex.value = true;
      },
    },
  ],
});

const productStore = useProductStore();

const showProducts = ref();
const skip = ref(0);

const { data: products } = await useAsyncData("product", () =>
  $fetch("https://api.tortam.ru/api/v1/products")
);

const route = useRoute();

const showMore = async () => {
  productStore.skip += 8;
  const res = await fetch(
    "https://api.tortam.ru/api/v1/products/" + productStore.skip
  );
  const r = await res.json();
  if (productStore.showProducts === undefined) {
    productStore.showProducts = r;
  } else {
    r.forEach(function (element, key) {
      productStore.showProducts.push(element);
      console.log(key + ": " + element);
    });
  }
  console.log(productStore.showProducts);
  console.log(444);
};
const nameProduct = ref("");
const weightProduct = ref("");
const priceProduct = ref("");
const name = ref("");
const email = ref("");
const phone = ref("");
const date = ref("");
const errPhone = ref(false);
const active = ref(false);
const handleSubmit = async () => {
  console.log(nameProduct.value);
  weightProduct.value = 2;
  priceProduct.value = 2800;
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
  Array.from(document.getElementsByClassName("indexOrder")).forEach(
    (button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        nameProduct.value = e.target.getAttribute("data-name");
        console.log(e.target.getAttribute("data-name"));
      });
    }
  );
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

<style scoped>
.conditer {
  max-width: 125px;
  width: 100%;
  padding-right: 20px;
}
header {
  display: block;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.header-logo {
  max-width: 50px;
  margin-right: 10px;
}
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}
.btn:hover {
  opacity: 0.7;
}
.btn_green {
  background: #37df5c;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
