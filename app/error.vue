<template>
  <div class="page-wrapper">
    <h1 v-if="error.statusCode === 404">404 - Page Not Found</h1>
    <h1 v-else>An Error Occurred</h1>
    <NuxtLink to="/">На главную страницу</NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
}

a {
  text-decoration: underline;
}
</style>
