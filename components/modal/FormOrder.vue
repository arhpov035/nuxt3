<template>
  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="orderModal"
    tabindex="-1"
    aria-labelledby="orderModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none"
    >
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
            <form @submit.prevent="handleSubmit">
              <input :value="nameProduct" type="hidden" />
              <input :value="weightProduct" type="hidden" />
              <input :value="priceProduct" type="hidden" />
              <div class="form-group mb-4">
                <input
                  :value="name"
                  @input="$emit('update:name', $event.target.value)"
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput90"
                  placeholder="Имя"
                />
              </div>
              <div class="form-group mb-4">
                <input
                  id="emailOrder"
                  :value="email"
                  @input="$emit('update:email', $event.target.value)"
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Ваш e-mail"
                />
                <div class="emailErr"></div>
              </div>
              <div class="form-group mb-4">
                <input
                  id="online_phone"
                  :value="phone"
                  @input="$emit('update:phone', $event.target.value)"
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
              </div>
              <div class="form-group mb-4">
                <input
                  :value="date"
                  @input="$emit('update:date', $event.target.value)"
                  id="start"
                  type="date"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  min=""
                />
              </div>

              <div class="flex items-center justify-center">
                <div class="datepicker relative form-floating mb-3 xl:w-96">
                  <input
                    type="date"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Select a date"
                  />
                  <label for="floatingInput" class="text-gray-700"
                    >Select a date</label
                  >
                  <div class="datepicker-toggle-button">
                    <i class="fas fa-calendar datepicker-toggle-icon"></i>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-center">
                <div class="datepicker relative form-floating mb-3 xl:w-96">
                  <input
                    type="text"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Select a date"
                  />
                  <label for="floatingInput" class="text-gray-700"
                    >Select a date</label
                  >
                  <div class="datepicker-toggle-button">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-center">
                <div class="datepicker relative form-floating mb-3 xl:w-96">
                  <input
                    type="text"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Select a date"
                  />
                  <label for="floatingInput" class="text-gray-700"
                    >Select a date</label
                  >
                  <div class="datepicker-toggle-button">
                    <i class="fa fa-phone" aria-hidden="true"></i>

                  </div>
                </div>
              </div>
              <div class="flex items-center justify-center">
                <div class="datepicker relative form-floating mb-3 xl:w-96">
                  <input
                    type="text"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Select a date"
                  />
                  <label for="floatingInput" class="text-gray-700"
                    >Select a date</label
                  >
                  <div class="datepicker-toggle-button">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>


                  </div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  handleSubmit: {
    type: Function,
  },
  nameProduct: {
    type: String,
  },
  weightProduct: {
    type: String,
  },
  priceProduct: {
    type: String,
  },
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  date: {
    type: String,
  },
  active: {
    type: Boolean,
  },
});
emits: ["update:name", "update:phone", "update:email", "update:date"];
</script>

<style scoped>
.error {
  display: none;
  border: 1px solid red;
  color: red;
  font-size: 0.75rem;
}
.errPhone {
}
.error.active {
  display: block;
}
</style>
