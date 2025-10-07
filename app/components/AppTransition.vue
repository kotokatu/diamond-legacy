<template>
  <Transition name="fade" :duration="300" @after-leave="$emit('hide')">
    <slot />
  </Transition>
</template>

<script setup>
defineEmits(["hide"]);
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
