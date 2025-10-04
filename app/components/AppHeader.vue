<template>
  <div class="wrapper">
    <div class="contained">
      <header class="header">
        <NuxtLink to="/">
          <div class="header__logo">
            <q-img class="header__logo-img" :src="LogoImg" no-native-menu no-spinner no-transition alt="Logo" />
            <q-img class="header__logo-text" :src="LogoText" no-native-menu no-spinner no-transition alt="Logo" />
          </div>
        </NuxtLink>

        <AppNavMenu v-if="$q.screen.gt.md" @catalog:toggle="toggleCatalogMenu" />

        <AppMobileMenu v-else v-model="navMenuOpen">
          <AppNavMenu @catalog:toggle="toggleCatalogMenu" @nav:toggle="toggleNavMenu" />
        </AppMobileMenu>

        <div class="header__right">
          <AppButton color="accent" @click="openModal">
            <span>Написать нам</span>
          </AppButton>

          <div class="header__menu-btn">
            <MenuIcon class="icon" @click="toggleNavMenu" />
          </div>
        </div>
      </header>

      <ClientOnly>
        <Transition v-if="$q.screen.gt.md" name="fade" @after-leave="setActiveMenuCard(data.catalog[0].id)">
          <AppCatalogMenu
            v-show="catalogMenuOpen"
            ref="catalogMenuRef"
            :data="data"
            :active-card="activeMenuCard"
            @menu:close="closeAllMenus"
            @menu:active="setActiveMenuCard"
          />
        </Transition>

        <AppMobileMenu
          v-else
          v-model="catalogMenuOpen"
          :arrow-icon="true"
          :title="'Каталог'"
          @close="closeAllMenus"
          @back="closeCatalogMenu"
        >
          <AppCatalogMenu
            :data="data"
            :active-card="activeMenuCard"
            @menu:close="closeAllMenus"
            @menu:active="setActiveMenuCard"
          />
        </AppMobileMenu>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useQuasar } from "quasar";

import MenuIcon from "@/assets/icons/bx-menu.svg";
import LogoImg from "@/assets/img/logo_img.svg?url_encode";
import LogoText from "@/assets/img/logo_text.svg?url_encode";

import AppMobileMenu from "./AppMobileMenu.vue";

const $q = useQuasar();
const data = inject("data");
const activeMenuCard = ref(data.catalog[0]);
const openModal = inject("openModal");
const catalogMenuRef = useTemplateRef("catalogMenuRef");

const catalogMenuOpen = ref(false);
const navMenuOpen = ref(false);

const setActiveMenuCard = (id) => {
  activeMenuCard.value = data.catalog.find((item) => item.id === id);
};

const toggleCatalogMenu = () => {
  catalogMenuOpen.value = !catalogMenuOpen.value;
};

const closeCatalogMenu = () => {
  catalogMenuOpen.value = false;
};

const toggleNavMenu = () => {
  navMenuOpen.value = !navMenuOpen.value;
};

const closeAllMenus = () => {
  catalogMenuOpen.value = false;
  navMenuOpen.value = false;
};

onClickOutside(
  catalogMenuRef,
  () => {
    closeCatalogMenu();
  },
  { ignore: [".nav-item--catalog"] }
);

watch(
  () => $q.screen.gt.md,
  (val) => {
    navMenuOpen.value = navMenuOpen.value && !!val;
  }
);
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
  height: 64px;
  width: 100%;
  padding: 0 4px 0 16px;
  background-color: $base;
  border-radius: 12px;
  border: 4px solid #f8f8f8;
}

.header__logo {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.header__logo-img {
  width: 30px;
  height: 28px;
  margin-right: 10px;
}

.header__logo-text {
  width: 134px;
  height: 17px;

  @media (max-width: $breakpoint-sm) {
    display: none;
  }
}

.header__right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header__menu-btn {
  display: none;

  @media (max-width: $breakpoint-md) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    cursor: pointer;
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

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
