<template>
  <q-layout>
    <AppHeader @modal:open="openModal" @nav:open="openNavMenu">
      <template #page-nav>
        <AppMobileMenu v-model="navMenuOpen">
          <AppNavMenu @catalog:open="openCatalogMenu" @close="closeNavMenu" />
        </AppMobileMenu>
      </template>

      <template #catalog-nav>
        <AppMobileMenu
          v-model="catalogMenuOpen"
          :arrow-icon="true"
          title="Каталог"
          @close="closeAllMenus"
          @back="closeCatalogMenu"
        >
          <AppCatalogMenu :data="data" @close="closeAllMenus" />
        </AppMobileMenu>
      </template>
    </AppHeader>

    <main class="main">
      <slot />
    </main>

    <AppFooter />

    <AppModal v-model="modalOpen" />

    <AppContactButton @click="openModal" />
  </q-layout>
</template>

<script setup>
import { inject } from "vue";
import { useLayout } from "@/composables/useLayout";

const data = inject("data");

const {
  modalOpen,
  catalogMenuOpen,
  navMenuOpen,
  openModal,
  openNavMenu,
  closeNavMenu,
  openCatalogMenu,
  closeCatalogMenu,
  closeAllMenus,
} = useLayout();
</script>
