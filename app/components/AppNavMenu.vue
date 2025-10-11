<template>
  <div class="nav">
    <div class="nav-item nav-item--catalog" @click="$emit('catalog:open')">
      <AppNavItem label="Каталог" role="button" tabindex="0" :class="classes" />
      <ArrowIcon v-if="isMobile" class="icon" />
    </div>
    <NuxtLink to="/#benefits" class="nav-item" @click="$emit('close')">
      <AppNavItem label="Преимущества" :class="classes" />
      <ArrowIcon v-if="isMobile" class="icon" />
    </NuxtLink>
    <NuxtLink to="/#distributors" class="nav-item" @click="$emit('close')">
      <AppNavItem label="Для дистрибьюторов" :class="classes" />
      <ArrowIcon v-if="isMobile" class="icon" />
    </NuxtLink>
  </div>
</template>

<script setup>
import AppNavItem from "./AppNavItem.vue";
import ArrowIcon from "@/assets/icons/bx-arrow.svg";

const { isMobile } = useLayout();
const classes = computed(() => ({
  "no-hover": isMobile.value,
}));

defineEmits(["catalog:open", "close"]);
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  gap: 8px;

  @media (max-width: $breakpoint-md) {
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
  padding: 4px 8px;
  font-size: 16px;
  line-height: 100%;
  font-weight: 600;
  color: #7a7a7a;
  text-decoration: none;
  text-wrap: nowrap;
  cursor: pointer;

  :deep(.nav-link:not(.no-hover)) {
    @media (hover: hover) {
      &:hover {
        color: $dark;
      }
    }
  }

  @media (max-width: $breakpoint-md) {
    color: $base;
    padding: 24px 0;
    border-bottom: 1px solid $base-semi;
    font-family: var(--font-secondary);
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: $base;
  }
}
</style>
