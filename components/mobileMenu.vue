<template>
  <div class="mobile-menu">
    <nav>
      <ul>
        <li><a href="">Торты</a></li>
        <li><a href="">Капкейки</a></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.mobile-menu {
  position: fixed;
  bottom: 0;
  max-width: 100%;
  width: 100%;
  display: none;
}
.mobile-menu nav {
  display: flex;
  background-color: #f2f2f2;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 15px;
  border: 1px solid #c3bfbf;
}
.mobile-menu ul {
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

@media(max-width: 480px){
    .mobile-menu {
        display: block;
    }
}
</style>
