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

const route = useRoute()
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://legacy-russia.ru' + route.path, // TODO: Проверить! Не обновляется при смене страницы только при обновлении но поисковик получит правильную вроде
    }, 
  ],      
  title: 'Legacy — косметологические аппараты премиум качества',
  meta: [
    { name: 'description', content: 'Legacy — косметологические аппараты премиум качества.' },
  ],
  htmlAttrs: {
    lang: 'ru',
  },  
})
</script>