<template>
  <div id="app" class="app">
    <AppHeader />

    <main class="main">
      <NuxtPage />
    </main>

    <AppFooter />

    <AppModal v-model="modalOpen" />

    <AppContactButton @click="openModal" />
  </div>
</template>

<script setup>
import { provide } from "vue";

const modalOpen = ref(false);

const openModal = () => {
  modalOpen.value = true;
};

provide("openModal", openModal);
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
