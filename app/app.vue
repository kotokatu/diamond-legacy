<template>
  <AppHeader />

  <main class="main">
    <NuxtPage />
  </main>

  <AppFooter />

  <AppModal v-model="modalOpen" />

  <AppContactButton @click="openModal" />
</template>

<script setup>
import { provide } from "vue";
import data from "@/assets/data/data.json";

const modalOpen = ref(false);

const openModal = () => {
  modalOpen.value = true;
};

provide("openModal", openModal);
provide("data", data);
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
