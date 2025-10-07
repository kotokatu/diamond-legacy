<template>
  <AppHeader @modal:open="openModal" @nav:open="openNavMenu">
    <template #page-nav>
      <AppNavMenu @catalog:open="openCatalogMenu" />
    </template>

    <template #catalog-nav>
      <AppTransition @hide="setActiveMenuCard(data.catalog[0])">
        <AppCatalogMenu
          v-show="catalogMenuOpen"
          :data="data"
          :active-card="activeMenuCard"
          @card:set-active="setActiveMenuCard"
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
import { ref, inject, watch } from "vue";
import { useQuasar } from "quasar";
import { useAutoClose } from "@/composables/useAutoClose";

const $q = useQuasar();
const data = inject("data");

const activeMenuCard = ref(data.catalog[0]);

const { open: modalOpen } = useAutoClose();

const openModal = () => {
  modalOpen.value = true;
};

const { open: catalogMenuOpen } = useAutoClose();
const { open: navMenuOpen } = useAutoClose();

const setActiveMenuCard = (cardData) => {
  activeMenuCard.value = cardData;
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

watch(
  () => $q.screen.gt.lg,
  (val) => {
    navMenuOpen.value = navMenuOpen.value && !!val;
  }
);
</script>
