<template>
  <div class="menu">
    <template v-if="$q.screen.gt.md">
      <ul class="menu__links">
        <NuxtLink
          v-for="item in data.catalog"
          :key="item.id"
          :to="item.link"
          :class="activeCard.id === item.id ? 'active' : ''"
          class="menu__link"
          @mouseenter="$emit('menu:active', item.id)"
          @click="$emit('menu:close')"
        >
          <span class="menu__link-text">{{ item.name }}</span>

          <ArrowIcon class="menu__link-icon" />
        </NuxtLink>
      </ul>

      <div class="menu__cards">
        <AppProductCard class="menu__card" :data="activeCard" type="nav" @click="$emit('menu:close')" />
      </div>
    </template>

    <template v-else>
      <div class="menu__cards">
        <AppProductCard
          v-for="item in data.catalog"
          :key="item.id"
          class="menu__card"
          :data="item"
          type="nav"
          @click="$emit('menu:close')"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
import ArrowIcon from "@/assets/icons/bx-arrow.svg";

defineEmits(["menu:close", "menu:active"]);
defineProps({
  data: {
    type: Object,
    required: true,
  },
  activeCard: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  width: 100%;
  padding: 4px;
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
  @media (max-width: $breakpoint-md) {
    height: 260px;
  }
}

.menu__links {
  display: flex;
  gap: 8px;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 24px;
}

.menu__link {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: nowrap;
  width: fit-content;
  height: 30px;
  padding: 4px 8px;
  text-decoration: none;
  color: $dark;
  font-size: 16px;
  line-height: 22px;
  transition: all 0.2s ease;

  .menu__link-text {
    font-size: 16px;
  }

  .menu__link-icon {
    opacity: 0;
    width: 22px;
    height: 22px;
    transition: all 0.2s ease;

    :deep(path) {
      fill: $accent;
    }
  }

  &.active {
    .menu__link-text {
      font-weight: 600;
    }

    .menu__link-icon {
      opacity: 1;
    }
  }
}
</style>
