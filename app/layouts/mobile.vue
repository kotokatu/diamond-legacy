<template>
  <q-layout>
    <AppHeader @modal:open="openModal" @nav:open="openNavMenu">
      <template #page-nav>
        <AppMobileMenu v-model="navMenuOpen">
          <AppNavMenu
            @catalog:open="openCatalogMenu"
            @nav:close="closeNavMenu"
          />
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
          <AppCatalogMenu :data="data" @catalog:close="closeAllMenus" />
        </AppMobileMenu>
      </template>
    </AppHeader>

    <main class="main">
      <slot />
    </main>

    <AppFooter />

    <AppCookieConsent />

    <AppModal />

    <AppContactButton @click="openModal" />
  </q-layout>
</template>

<script setup>
import { inject } from "vue";
import { useLayout } from "@/composables/useLayout";

const data = inject("data");

const {
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
