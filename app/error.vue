<template>
  <div class="page-wrapper">
    <h1 v-if="error.statusCode === 404">404 - Страница не найдена</h1>
    <h1 v-else>Произошла ошибка</h1>
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
a {
  text-decoration: underline;
}
</style>
