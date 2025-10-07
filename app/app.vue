<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { provide } from "vue";
import { useLayout } from "#imports";
import data from "@/assets/data/data.json";

const layout = useLayout();

provide("data", data);
</script>
