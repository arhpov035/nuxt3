<template>
  <button
    type="button"
    id="openSuccessFormOrder"
    data-bs-toggle="modal"
    data-bs-target="#SuccessFormOrder"
  ></button>
  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="SuccessFormOrder"
    tabindex="-1"
    aria-labelledby="exampleModalCenterTitle"
    aria-modal="true"
    role="dialog"
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
          <button
            type="button"
            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body relative p-4">
          <p class="text-green-700 text-center font-medium">
            Спасибо Ваш заказ оформлен, ожидайте звонка!
          </p>
        </div>
        <div
          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
        ></div>
      </div>
    </div>
  </div>
</template>
