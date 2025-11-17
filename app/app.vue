<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { provide } from "vue";
import { useLayout } from "#imports";
import data from "@/assets/data/data.json";

const { currentLayout: layout } = useLayout();

provide("data", data);

useHead({
  title: 'Legacy — косметологические аппараты премиум качества',
  meta: [
    { name: 'description', content: 'Legacy — косметологические аппараты премиум качества.' }
  ],
})
</script>