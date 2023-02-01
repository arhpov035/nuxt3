<template>
  <form @submit.prevent="submit">
    <div>
      <label>Enter Company Name</label>

      <label>Select Header Image</label>
      <input type="file" multiple @change="handleFileSelection($event)" />
      <button
        type="submit"
        class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Оформить
      </button>
    </div>
  </form>
</template>

<script setup>
const files = ref([]);

const handleFileSelection = (event) => {
  let uploadedFiles = event.target.files;

  for (let i = 0; i < uploadedFiles.length; i++) {
    files.value.push(uploadedFiles[i]);
  }
};

async function submit() {
  // let formData = new FormData();

  // for (let i = 0; i < files.value.length; i++) {
  //   formData.append("images[" + i + "]", files.value[i]);
  // }

  // загрузка одного файла
  let formData = new FormData();

formData.append("file", files.value[0]);

  console.log(formData);

  await $fetch("https://api.tortam.ru/api/v1/companies", {
    method: "POST",
    body: formData,
  });
}
</script>
