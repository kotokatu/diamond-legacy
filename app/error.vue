<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
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
