<template>
  <div class="dots">
    <div
      v-for="i in 3"
      :key="i"
      class="dot"
      :class="{ 'dot--active': i <= count }"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  count: {
    type: Number,
    default: 3,
  },
});
</script>

<style lang="scss" scoped>
.dots {
  display: inline-flex;
  justify-content: center;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: $base-semi;
}

.dot--active {
  background-color: $base;
}
</style>
