<template>
  <div class="wrapper">
    <div class="contained">
      <header class="header">
        <NuxtLink to="/">
          <div class="logo">
            <LogoImg class="logo-img" alt="Legacy logo" filled :font-controlled="false" />
            <LogoText class="logo-text" alt="Legacy" filled :font-controlled="false" />
          </div>
        </NuxtLink>

        <AppNavMenu v-if="$q.screen.gt.lg" @catalog:open="openCatalogMenu" />

        <AppMobileMenu v-else v-model="navMenuOpen">
          <AppNavMenu @catalog:open="openCatalogMenu" />
        </AppMobileMenu>

        <div class="header__right">
          <AppButton color="accent" @click="$emit('modal:open')">
            <span>Написать нам</span>
          </AppButton>

          <div class="header__menu-btn">
            <MenuIcon class="icon" @click="openNavMenu" />
          </div>
        </div>
      </header>

      <component
        :is="CATALOL_MENU_WRAPPERS[$q.screen.gt.lg ? 'lg' : 'sm'].component"
        v-model="catalogMenuOpen"
        v-bind="CATALOL_MENU_WRAPPERS[$q.screen.gt.lg ? 'lg' : 'sm'].props"
        @hide="setActiveMenuCard(data.catalog[0].id)"
        @close="closeAllMenus"
        @back="closeCatalogMenu"
      >
        <AppCatalogMenu
          v-show="catalogMenuOpen"
          ref="catalogMenuRef"
          :data="data"
          :active-card="activeMenuCard"
          @card:set-active="setActiveMenuCard"
        />
      </component>

      <!-- <AppMobileMenu
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
      </AppMobileMenu> -->
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
import { useQuasar } from "quasar";
import { useAutoClose } from "@/composables/useAutoClose";

import MenuIcon from "@/assets/icons/bx-menu.svg";
import LogoImg from "@/assets/img/logo_header_img.svg";
import LogoText from "@/assets/img/logo_text.svg";

import AppMobileMenu from "./AppMobileMenu.vue";
import AppTransition from "./AppTransition.vue";

const CATALOL_MENU_WRAPPERS = {
  lg: { component: AppTransition, props: {} },
  sm: { component: AppMobileMenu, props: { arrowIcon: true, title: "Каталог" } },
};

defineEmits(["modal:open"]);

const $q = useQuasar();
const data = inject("data");
const activeMenuCard = ref(data.catalog[0]);

const { open: catalogMenuOpen } = useAutoClose();
const { open: navMenuOpen } = useAutoClose();

const setActiveMenuCard = (id) => {
  activeMenuCard.value = data.catalog.find((item) => item.id === id);
};

const openNavMenu = () => {
  navMenuOpen.value = true;
};

const openCatalogMenu = () => {
  catalogMenuOpen.value = true;
};

const closeCatalogMenu = () => {
  catalogMenuOpen.value = false;
};

const closeAllMenus = () => {
  catalogMenuOpen.value = false;
  navMenuOpen.value = false;
};

watch(
  () => $q.screen.gt.lg,
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

.logo-text {
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

  @media (max-width: $breakpoint-lg) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    cursor: pointer;
  }
}
</style>
