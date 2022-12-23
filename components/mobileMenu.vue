<template>
  <div class="mobile-menu-fixed">
    <nav>
      <ul>
        <li>
          <NuxtLink class="link" :to="'/'">
            <div class="svg">
              <SvgCakeMobMenu />
            </div>
            <span>Главная</span></NuxtLink
          >
        </li>
        <li>
          <NuxtLink class="link" :to="''">
            <div class="svg">
              <SvgCakeMobMenu />
            </div>
            <span>Торты</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" :to="''">
            <div class="svg">
              <SvgCapcakeMobMenu />
            </div>
            <span>Капкейки</span></NuxtLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.mobile-menu-fixed {
  position: fixed;
  bottom: 0;
  max-width: 100%;
  width: 100%;
  display: none;
  z-index: 5;
}
.mobile-menu-fixed nav {
  display: flex;
  background-color: #f9fafb;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 4px;
  border: 1px solid #c3bfbf;
}
.mobile-menu-fixed ul {
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
.mobile-menu-fixed ul {
  font-size: 12px;
}

@media (max-width: 480px) {
  .mobile-menu-fixed {
    display: block;
  }
}
</style>
