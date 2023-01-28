<template>
  <h1 class="text-gray-700 text-2xl">{{ category.name }}</h1>
  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
    <Product
      v-for="product of category.products"
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
</template>

<script setup>
import { ref } from "vue";
const route = useRoute();

const { data: category } = await useAsyncData("category", () =>
  $fetch("https://api.tortam.ru/api/v1/category/" + route.params.slug)
);

if (!category.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found", fatal: true });
}

const isStripeLoadedCategory = ref(false);

useHead({
  title: "Категория " + category.value.name,
  meta: [{ name: "description", content: "Категория " + category.value.name }],
  bodyAttrs: { class: "test" },
  script: [
    {
      hid: "stripe",
      src: "/js/tailwind.js",
      defer: true,
      body: true,
      callback: () => {
        isStripeLoadedCategory.value = true;
      },
    },
  ],
});

const nameProduct = ref("");
const weightProduct = ref("");
const priceProduct = ref("");
const name = ref("");
const nameH1 = ref("");
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
