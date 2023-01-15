<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
    <Product v-for="product of products" :key="product.id" :product="product" />
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
// import { useProductStore } from "@/stores/ProductStore";

// const productStore = useProductStore();

const { data: products } = await useAsyncData("products", () =>
  $fetch("https://api.tortam.ru/api/v1/products")
);

const route = useRoute();

// console.log(route.fullPath);

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
  Array.from(document.getElementsByClassName('indexOrder')).forEach((button) => {
     button.addEventListener('click', (e)=>{
           e.preventDefault();
           nameProduct.value = e.target.getAttribute('data-name')
           console.log(e.target.getAttribute('data-name'));
     })
});

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
