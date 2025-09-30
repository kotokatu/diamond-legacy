<template>
  <div id="app" class="app">
    <AppHeader @modal:open="modalOpen = true" />

    <main class="main">
      <NuxtPage />
    </main>

    <AppFooter />

    <AppModal v-model="modalOpen" />
  </div>
</template>

<script setup>
const modalOpen = ref(false);
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
