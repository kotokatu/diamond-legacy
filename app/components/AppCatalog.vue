<template>
  <div
    class="catalog-grid"
    role="grid"
    aria-label="Каталог косметологических аппаратов"
  >
    <AppProductCard
      v-for="item in items"
      :key="item.id"
      class="catalog__card"
      :data="item"
      size="lg"
      role="gridcell"
      :aria-label="item.name"
    />
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss">
.catalog-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 64px;

  @media (width < $breakpoint-sm) {
    grid-template-columns: 1fr;
  }
}
.catalog__card {
  height: 540px;

  @media (min-width: $breakpoint-lg) {
    height: 600px;
  }
}
</style>
