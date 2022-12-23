<template>
  <div class="container-top">
    <div class="item">
      <nav class="menu">
        <ul>
          <li><a href="">Торты</a></li>
          <li><a href="">Капкейк</a></li>
        </ul>
      </nav>
    </div>
    <div class="item">
      <Logo />
    </div>
    <div class="info item">
      <div class="left">
        <a href="">Вам перезвонить?</a>
        <div class="icon">
          <img src="/images/phone.svg" />
        </div>
      </div>
      <div class="right">
        <div class="schedule">с 10.00 до 20.00 без выходных</div>
        <a class="phone" href="tel:+79004972740">+7 (900) 497-27-40</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  components: {
    Logo,
  },
};
</script>

<style scoped>
.container-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
padding-bottom: 10px;
}
nav {
  padding-left: 0;
  padding-right: 0;
}
ul {
  display: flex;
  padding: 0;
  gap: 10px;
}

ul li {
  list-style: none;
  text-transform: uppercase;
}

ul li a {
  list-style: none;
  text-transform: uppercase;
  text-decoration: none;
  color: #424242;
}
.icon img {
  width: 30px;
}
.info {
  display: flex;
  gap: 10px;
}
.info .left {
  display: flex;
  gap: 10px;
  align-items: center;
}
.info .left a {
  font-size: 13px;
  color: #039be6;
  text-decoration: none;
}

.schedule {
  color: #a6a6a6;
  font-size: 13px;
}
.phone {
  font-size: 20px;
  color: #343434;
  text-decoration: none;
  font-weight: 600;
}

@media(max-width: 768px) {
  .container-top {
    flex-wrap: wrap;
  }
  .container-top .item {
    width: 50%;
  }
  .container-top .info {
    width: 100%;
  }

  .info .left {
    /* width: 50%; */
  }
}

@media(max-width: 480px){
  .container-top {
    display: none;
  }
}
</style>
