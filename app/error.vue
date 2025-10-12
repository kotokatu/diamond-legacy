<template>
  <div class="layout-center">
    <h1 v-if="error.statusCode === 404" class="text-h1 q-mb-lg">
      404 - Страница не найдена
    </h1>
    <h1 v-else class="text-h1 q-mb-lg">Произошла ошибка</h1>
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
