<template>
  <div class="page-description">
    <div class="title">Описание</div>
    <!-- {{ description }} -->
    <div v-if="description" class="desription">{{ description }}</div>

    <ol v-else class="params">
      <li>
        <div>Категория</div>
        <div></div>
        <div>Девочке</div>
      </li>
      <li>
        <div>Вид продукции</div>
        <div></div>
        <div>Торт</div>
      </li>
      <li>
        <div>Вес на фотографии</div>
        <div></div>
        <div>4 кг</div>
      </li>
      <li>
        <div>Количество ярусов</div>
        <div></div>
        <div>1</div>
      </li>
      <li>
        <div>Тип торта</div>
        <div></div>
        <div>круглый</div>
      </li>
      <li>
        <div>Покрытие</div>
        <div></div>
        <div>мастика</div>
      </li>
      <li>
        <div>Декор 1</div>
        <div></div>
        <div>с фигурками</div>
      </li>
      <li>
        <div>Декор 2</div>
        <div></div>
        <div>аппликация</div>
      </li>
    </ol>
  </div>
</template>

<script setup>
const props = defineProps({
  description: {
    type: String,
    default: false,
  }
});
</script>

<style scoped>
.desription {
  max-width: 500px;
  width: 100%;
}
.page-description {
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
margin-bottom: 20px;
}
.page-description .params {
  max-width: 435px;
  width: 100%;
}
.title {
  font-size: 21px;
  color: #000;
}
ul li,
ol li {
  list-style: none;
}

ol li {
  display: flex;
  justify-content: space-between;
}

li div:nth-child(2) {
  flex: 1 0;
  border-bottom: 1px dotted #000;
  height: 1em;
  margin: 0 0.4em;
}
</style>
