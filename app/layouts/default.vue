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
import { useAutoClose } from "@/composables/useAutoClose";

const data = inject("data");

const { open: modalOpen } = useAutoClose();
const { open: catalogMenuOpen } = useAutoClose();
const { open: navMenuOpen } = useAutoClose();

const openModal = () => {
  modalOpen.value = true;
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
</script>
