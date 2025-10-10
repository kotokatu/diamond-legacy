<template>
  <div class="nav-link" :class="{ active: active }" role="link">
    <span class="nav-link__text">{{ label }}</span>
    <ArrowIcon class="nav-link__icon" />
  </div>
</template>

<script setup>
import ArrowIcon from "@/assets/icons/bx-arrow.svg";
defineProps({
  label: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.nav-link {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: nowrap;
  width: fit-content;
  height: 30px;
  padding: 4px 8px;
  text-decoration: none;
  transition: all 0.2s ease;

  .nav-link__text {
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }

  .nav-link__icon {
    opacity: 0;
    width: 22px;
    height: 22px;
    transition: all 0.2s ease;

    :deep(path) {
      fill: $accent;
    }
  }

  &.active:not(.no-hover) {
    .nav-link__text {
      font-weight: 600;
    }

    .nav-link__icon {
      opacity: 1;
    }
  }

  @media (hover: hover) {
    &:hover:not(.no-hover) {
      .nav-link__text {
        font-weight: 600;
      }

      .nav-link__icon {
        opacity: 1;
      }
    }
  }
}
</style>
