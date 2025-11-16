<template>
  <div class="page page--error">
    <section class="flex-center">
      <div class="error-block contained">
        <h1 v-if="error.statusCode === 404" class="text-h1">
          404 - Страница не найдена
        </h1>
        <h1 v-else class="text-h1">Произошла ошибка</h1>
        <NuxtLink to="/" class="link link--underline"
          >На главную страницу</NuxtLink
        >
      </div>
    </section>

    <section class="flex-center">
      <div class="contained">
        <h2 class="text-h3">Косметологическое оборудование для салонов</h2>
        <AppCatalog :items="data.items" />
      </div>
    </section>
  </div>
</template>

<script setup>
import data from "@/assets/data/data.json";
defineProps({
  error: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.error-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50dvh;
}
</style>
