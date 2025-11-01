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
  script: [ { 
    src: '/js/yandex_metrics.js',
    tagPosition: 'head',
  },
  /*
  {
    src: 'https://www.googletagmanager.com/gtag/js?id=G-YQNXXY3EBS',
    tagPosition: 'head',
  },
  {
    innerHTML:'window.dataLayer = window.dataLayer || [];'+
              'function gtag(){dataLayer.push(arguments);}'+
              'gtag(\'js\', new Date());'+
              'gtag(\'config\', \'G-YQNXXY3EBS\');',
    tagPosition: 'head',
  }
  */
  ],

  noscript: [{
    innerHTML: '<div><img src="https://mc.yandex.ru/watch/104765634" style="position:absolute; left:-9999px;" alt="" /></div>',
    tagPosition: 'head',
  }]

  
})
</script>