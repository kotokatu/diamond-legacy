<template>
  <div class="wrapper">
    <div class="contained">
      <div class="header">
        <NuxtLink to="/" class="header__logo">
          <q-img class="header__logo-img" src="/img/logo_img.svg" no-native-menu no-spinner no-transition />
          <q-img class="header__logo-text" src="/img/logo_text.svg" no-native-menu no-spinner no-transition />
        </NuxtLink>

        <ul class="header__nav" dense>
          <li ref="targetRef" class="header__nav-item" @click="toggleMenu">
            <span role="button" tabindex="0">Каталог</span>
          </li>
          <li class="header__nav-item">
            <NuxtLink to="/#benefits">Преимущества</NuxtLink>
          </li>
          <li class="header__nav-item">
            <NuxtLink to="/#distributors">Для дистрибьюторов</NuxtLink>
          </li>
        </ul>

        <div class="header__contact">
          <AppButton color="accent" @click="openModal">
            <span>Написать нам</span>
          </AppButton>
        </div>
      </div>

      <Transition name="fade">
        <div v-show="menuOpen" class="menu">
          <q-list dense>
            <q-item to="/product/royal" clickable> Royal </q-item>
            <q-item to="/product/spectre" clickable> Spectre </q-item>
          </q-list>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, useTemplateRef } from "vue";
import { onClickOutside } from "@vueuse/core";

const openModal = inject("openModal");

const targetRef = useTemplateRef("targetRef");

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

onClickOutside(targetRef, () => {
  menuOpen.value = false;
});
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  z-index: 1000;
  top: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.header,
.menu {
  width: 100%;
  padding: 0 4px 0 16px;
  background-color: var(--q-base);
  border-radius: 12px;
  border: 4px solid #f8f8f8;
}

.header__logo-img {
  width: 30px;
  height: 28px;
  margin-right: 10px;
}

.header__logo-text {
  width: 134px;
  height: 17px;
}

.header__nav {
  display: flex;
  gap: 8px;
}

.header__nav-item {
  padding: 4px 16px;
  cursor: pointer;

  a,
  span {
    color: #7a7a7a;
    text-decoration: none;
    font-size: 16px;
    line-height: 100%;
    font-weight: 600;
    text-wrap: nowrap;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
