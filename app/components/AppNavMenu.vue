<template>
  <nav class="nav" role="navigation" aria-label="Главное меню">
    <button
      class="nav-button"
      type="button"
      aria-haspopup="true"
      aria-expanded="false"
      aria-label="Открыть меню каталога"
      @click="$emit('catalog:open')"
    >
      <div class="nav-item nav-item--catalog">
        <AppNavItem label="Каталог" :class="classes" />
        <ArrowIcon v-if="isMobile" class="icon" aria-hidden="true" />
      </div>
    </button>

    <NuxtLink
      to="/#benefits"
      class="nav-item"
      :aria-label="'Преимущества'"
      :aria-current="isActive('#benefits') ? 'page' : null"
      @click="$emit('close')"
    >
      <AppNavItem label="Преимущества" :class="classes" />
      <ArrowIcon v-if="isMobile" class="icon" aria-hidden="true" />
    </NuxtLink>

    <NuxtLink
      to="/#distributors"
      class="nav-item"
      :aria-label="'Для дистрибьюторов'"
      :aria-current="isActive('#distributors') ? 'page' : null"
      @click="$emit('close')"
    >
      <AppNavItem label="Для дистрибьюторов" :class="classes" />
      <ArrowIcon v-if="isMobile" class="icon" />
    </NuxtLink>
  </nav>
</template>

<script setup>
import AppNavItem from "./AppNavItem.vue";
import ArrowIcon from "@/assets/icons/bx-arrow.svg";

defineEmits(["catalog:open", "close"]);

const { isMobile } = useLayout();
const route = useRoute();
const isActive = (hash) => {
  return route.hash === hash;
};
const classes = computed(() => ({
  "no-hover": isMobile.value,
}));
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
  width: 100%;
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

.nav-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  background: transparent;
  border: none;
  color: inherit;
  text-align: left;
  cursor: pointer;
  font: inherit;
}
</style>
