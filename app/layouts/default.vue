<template>
  <AppHeader @modal:open="openModal" @nav:open="openNavMenu">
    <template #page-nav>
      <AppNavMenu @catalog:open="openCatalogMenu" />
    </template>

    <template #catalog-nav>
      <AppTransition>
        <AppCatalogMenu
          v-show="catalogMenuOpen"
          :data="data"
          @close="closeCatalogMenu"
        />
      </AppTransition>
    </template>
  </AppHeader>

  <main class="main">
    <slot />
  </main>

  <AppFooter />

  <AppModal v-model="modalOpen" />

  <AppContactButton @click="openModal" />
</template>

<script setup>
import { inject } from "vue";
import { useLayout } from "@/composables/useLayout";

const data = inject("data");

const {
  modalOpen,
  catalogMenuOpen,
  openModal,
  openNavMenu,
  openCatalogMenu,
  closeCatalogMenu,
} = useLayout();
</script>
