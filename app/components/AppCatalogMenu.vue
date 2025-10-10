<template>
  <div ref="catalogMenuRef" class="menu">
    <ul class="menu__links">
      <NuxtLink
        v-for="item in data.catalog"
        :key="item.id"
        :to="item.link"
        class="menu__link"
        @mouseenter="setActiveCard(item)"
        @click="close"
      >
        <AppNavItem
          :label="item.name"
          :show-icon="activeCard?.id === item.id"
        />
      </NuxtLink>
    </ul>

    <div ref="catalogCardsRef" class="menu__cards">
      <AppProductCard
        v-for="item in data.catalog"
        :key="item.id"
        class="menu__card"
        :data="item"
        :class="activeCard?.id === item.id ? 'active' : ''"
        size="sm"
        @click="close"
      />
    </div>
  </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";
import AppNavItem from "./AppNavItem.vue";

const emit = defineEmits(["close", "card:set-active"]);

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const catalogMenuRef = useTemplateRef("catalogMenuRef");
const catalogCardsRef = useTemplateRef("catalogCardsRef");

const activeCard = ref(props.data.catalog[0]);
const close = () => {
  emit("close");
  catalogCardsRef.value.scrollTop = 0;
  setTimeout(() => {
    activeCard.value = props.data.catalog[0];
  }, 300);
};

const setActiveCard = (card) => {
  activeCard.value = card;
};

onClickOutside(
  catalogMenuRef,
  () => {
    close();
  },
  { ignore: [".mobile-menu"] }
);
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  width: 100%;
  background-color: $base;
  border-radius: 12px;
  border: 4px solid #f8f8f8;
  height: 350px;

  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    flex-grow: 1;
    border-radius: 0;
    border: none;
    padding: 0;
    background-color: $dark;
  }
}

.menu__links,
.menu__cards {
  flex-basis: 50%;
}

.menu__cards {
  @media (max-width: $breakpoint-md) {
    padding: 0 24px 24px 24px;
    flex-basis: 100%;
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    overflow-y: auto;
  }

  @media (max-width: $breakpoint-sm) {
    grid-template-columns: 1fr;
  }
}

.menu__card {
  &:not(.active) {
    display: none;
  }

  @media (max-width: $breakpoint-md) {
    height: 260px;

    &:not(.active) {
      display: block;
    }
  }
}

.menu__links {
  display: flex;
  gap: 8px;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 24px;

  @media (max-width: $breakpoint-md) {
    display: none;
  }
}

.menu__link {
  color: $dark;
}
</style>
