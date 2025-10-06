<template>
  <div class="nav">
    <div class="nav-item nav-item--catalog" @click="$emit('catalog:toggle')">
      <span role="button" tabindex="0" class="text-nav">Каталог</span>
      <ArrowIcon class="icon" />
    </div>
    <NuxtLink to="/#benefits" class="nav-item" @click="$emit('nav:toggle')">
      <span class="text-nav">Преимущества</span>
      <ArrowIcon class="icon" />
    </NuxtLink>
    <NuxtLink to="/#distributors" class="nav-item" @click="$emit('nav:toggle')">
      <span class="text-nav">Для дистрибьюторов</span>
      <ArrowIcon class="icon" />
    </NuxtLink>
  </div>
</template>

<script setup>
import ArrowIcon from "@/assets/icons/bx-arrow.svg";
defineEmits(["catalog:toggle", "nav:toggle"]);
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  gap: 8px;

  @media (max-width: $breakpoint-lg) {
    gap: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding: 104px 40px 40px;
    color: $base;
    z-index: 1001;
    background-color: $dark !important;
  }
}

.nav-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: $breakpoint-lg) {
    color: $base;
    padding: 24px 0;
    border-bottom: 1px solid $base-semi;
  }

  .icon {
    display: none;

    @media (max-width: $breakpoint-lg) {
      display: block;
    }
  }

  span {
    color: #7a7a7a;
    font-size: 16px;
    line-height: 100%;
    font-weight: 600;
    text-wrap: nowrap;

    @media (max-width: $breakpoint-lg) {
      font-family: var(--font-secondary);
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      color: $base;
    }
  }
}
</style>
