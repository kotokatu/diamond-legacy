<template>
  <h1>Royal</h1>
  <q-form>
    <q-input v-model="name" />
    <q-btn unelevated :loading="isLoading" color="accent" @click="getData">Отправить заявку</q-btn>
    <q-expansion-item expand-icon="add" expanded-icon="remove" />
  </q-form>
</template>

<script setup>
import { ref } from "vue";

const isLoading = ref(false);
const name = ref("");
const getData = async () => {
  isLoading.value = true;
  await $fetch("https://api.restful-api.dev/objects");
  isLoading.value = false;
};
</script>
