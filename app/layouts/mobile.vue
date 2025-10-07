<template>
  <AppHeader @modal:open="openModal" @nav:open="openNavMenu">
    <template #page-nav>
      <AppMobileMenu v-model="navMenuOpen">
        <AppNavMenu @catalog:open="openCatalogMenu" />
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
        <AppCatalogMenu :data="data" />
      </AppMobileMenu>
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
import { inject, watch } from "vue";
import { useQuasar } from "quasar";
import { useAutoClose } from "@/composables/useAutoClose";

import AppHeader from "@/components/AppHeader.vue";
import AppNavMenu from "@/components/AppNavMenu.vue";
import AppMobileMenu from "@/components/AppMobileMenu.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppModal from "@/components/AppModal.vue";
import AppContactButton from "@/components/AppContactButton.vue";

const $q = useQuasar();
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
