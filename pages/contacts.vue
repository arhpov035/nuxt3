<template>
  <h1 class="text-gray-700 text-2xl">Контакты</h1>
  <div id="wrapMap" @click="activeCart" @mousemove="mouseHover">
    <div class="contayner-info">
      <div class="item adress">
        <div class="title">Адресс</div>
        <div class="desc">
          <div class="cyti">г. Тамбов,</div>
          <div>ул. Студенецкая набережная, д.8.</div>
        </div>
      </div>
      <div class="item svaz">
        <div class="title">Как связаться</div>
        <div class="desc">
          <div class="email">
            <a href="emailto:shop@tortam.ru"></a> shop@tortam.ru
          </div>
          <div class="phone">
            <a href="tel:+79004972740">+7 (900) 497-27-40</a>
          </div>
        </div>
      </div>
      <div class="item grafic">
        <div class="title">График</div>
        <div class="desc">
          <div>Понедельник - воскресенье</div>
          <div>с 10:30 до 19:00 часов (МСК)</div>
        </div>
      </div>
      <div class="item ya_taxi">
        <div
          class="ya-taxi-widget"
          data-use-location="true"
          data-app="3"
          data-redirect="1178268795219780156"
          data-tariff="econom"
          data-lang="ru"
          data-size="xs"
          data-theme="normal"
          data-title="Вызвать такси"
          data-point-a=""
          data-point-b="41.452822,52.729302"
          data-ref="tortam.ru"
          data-proxy-url="https://{app}.redirect.appmetrica.yandex.com/route?start-lat={start-lat}&amp;start-lon={start-lon}&amp;end-lat={end-lat}&amp;end-lon={end-lon}&amp;ref={ref}&amp;appmetrica_tracking_id={redirect}&amp;tariffClass={tariff}&amp;lang={lang}"
        ></div>
      </div>
    </div>
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A96621f601bacef6be2e4f239f43dcf045eeb7efe65b6e7b5a95a0eaddf02d7b4&amp;source=constructor"
      :class="{ pE: pE }"
      width="100%"
      height="541"
      frameborder="0"
    ></iframe>
  </div>
  <div
    class="font-medium leading-tight text-2xl mb-2 text-blue-600 mt-4 text-center"
  >
    Напишите нам
  </div>
  <div class="flex justify-center mt-6">
    <form @submit.prevent="handleSubmit">
      <div class="flex items-center justify-center">
        <div class="datepicker relative form-floating mb-3 w-full">
          <input
            v-model="name"
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput90"
            placeholder="Имя"
          />
          <label for="floatingInput" class="text-gray-700">Имя</label>
          <div class="datepicker-toggle-button">
            <i class="fa fa-user-circle" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <div class="datepicker relative form-floating mb-3 w-full">
          <input
            id="emailOrder"
            v-model="email"
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Ваш e-mail"
          />
          <div class="emailErr"></div>
          <label for="floatingInput" class="text-gray-700">Ваш e-mail</label>
          <div class="datepicker-toggle-button">
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <div class="datepicker relative form-floating mb-3 w-full">
          <input
            id="online_phone"
            v-model="phone"
            name="phone"
            class="mask-phone form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="text"
            maxlength="50"
            autofocus="autofocus"
            placeholder="+7(___)___-__-__"
          />
          <div :class="['error', { active: active === true }]">
            Телефон обязательное поле
          </div>
          <label for="floatingInput" class="text-gray-700">Телефон</label>
          <div class="datepicker-toggle-button">
            <i class="fa fa-phone" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <div class="datepicker relative form-floating mb-3 w-full">
          <textarea
            v-model="message"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlTextarea13"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>
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
</template>

<script setup>
import { ref, computed, watch } from "vue";
definePageMeta({ layout: "contacts" });

const name = ref();
const email = ref();
const phone = ref();
const message = ref();

const pE = ref(true);
const mapTitle = ref();

const activeCart = () => {
  pE.value = false;
  mapTitle.value.parentElement.removeChild(mapTitle.value);
};
const handleSubmit = async () => {
  const formData = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
  };

  // const getParamForm =
  //   "&name=" +
  //   name.value +
  //   "&email=" +
  //   email.value +
  //   "&phone=" +
  //   phone.value +
  //   "&message=" +
  //   message.message;

  console.log(objectToGetParams(formData));

  const res = await useAsyncData("res", () =>
    $fetch("https://api.tortam.ru/api/v1/mail/contacts" + objectToGetParams(formData))
  );
  console.log(res);
};

const objectToGetParams = (obj) => {
  return Object.keys(obj).reduce((str, key, i) => {
    const delimiter = i === 0 ? "?" : "&";
    return `${str}${delimiter}${key}=${obj[key]}`;
  }, "");
};


const mouseHover = (event) => {
  mapTitle.value.style.display = "block";
  // двигаем подсказку по области карты вместе с мышкой пользователя
  if (event.offsetY > 10) mapTitle.value.style.top = event.offsetY + 20 + "px";
  if (event.offsetX > 10) mapTitle.value.style.left = event.offsetX + 20 + "px";
  console.log(mapTitle.value);
};

onMounted(() => {
  mapTitle.value = document.createElement("div");
  mapTitle.value.className = "mapTitle";
  // вписываем нужный нам текст внутрь элемента
  mapTitle.value.textContent = "Для активации карты нажмите по ней";
  // добавляем элемент с подсказкой последним элементов внутрь нашего <div> с id wrapMap
  wrapMap.appendChild(mapTitle.value);
});

useHead({
  title: "Контакты ",
  meta: [{ name: "description", content: "Контакты " }],
  bodyAttrs: { class: "test" },
  script: [
    {
      src: "//yastatic.net/taxi-widget/ya-taxi-widget.js",
    },
  ],
});
</script>

<style>
.contayner-info {
  display: flex;
  gap: 20px;
  padding-top: 15px;
  padding-bottom: 40px;
}
.contayner-info .item {
  width: 25%;
}
.contayner-info .item .title {
  color: #232e43;
  font-size: 16px;
  font-weight: 400;
}
.contayner-info .item .desc {
  color: #232e43;
  font-size: 13px;
}
iframe.pE {
  pointer-events: none;
}

.contayner-info {
  max-width: 1380px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 52px;
  left: 0;
  right: 0;
  text-align: center;
  background-color: #fff;
}

#wrapMap {
  position: relative;
  cursor: help;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(204, 204, 204);
  border-image: initial;
}
.mapTitle {
  position: absolute;
  z-index: 1000;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 5px;
  display: none;
  padding: 5px 20px;
  border-radius: 5px;
  background: rgb(255, 255, 255);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(204, 204, 204);
  border-image: initial;
}
@media (max-width: 768px) {
  .contayner-info {
    position: static;
    flex-wrap: wrap;
    justify-content: center;
  }
  .contayner-info .item {
    width: 50%;
  }
}
@media (max-width: 480px) {
  .contayner-info .item {
    width: 100%;
  }
}
</style>
