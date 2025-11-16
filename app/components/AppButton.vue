<template>
  <q-btn class="btn" :color="color" no-caps unelevated :ripple="false">
    <slot />
  </q-btn>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: "dark",
  },
});
</script>

<style lang="scss" scoped>
.btn {
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
  text-wrap: nowrap;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

body.desktop .q-hoverable:hover :deep(.q-focus-helper) {
  background: #000000 !important;
  opacity: 0.4 !important;
}

:deep(.q-focus-helper:after),
:deep(.q-focus-helper:before) {
  background: none !important;
}
</style>
