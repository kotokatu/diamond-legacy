<template>
  <NuxtLink :to="data.link">
    <div class="card" :class="classes">
      <div class="card__content">
        <h3 class="card__title">{{ data.name }}</h3>
        <p class="card__description">{{ data.description }}</p>
        <h3 class="card__price">{{ data.price }}</h3>
      </div>

      <NuxtImg class="card__img" :alt="data.name" :width="IMAGE_WIDTHS[type]" height="auto" :src="data.image" />

      <ArrowIcon class="card__arrow" />
    </div>
  </NuxtLink>
</template>

<script setup>
import ArrowIcon from "@/assets/icons/bx-arrow.svg";
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    default: "catalog",
    validator: (value) => {
      return ["catalog", "nav"].includes(value);
    },
  },
});

const IMAGE_WIDTHS = {
  catalog: 500,
  nav: 300,
};

const classes = computed(() => {
  return {
    hoverable: props.type === "catalog",
  };
});
</script>

<style lang="scss" scoped>
$transition: all 0.3s ease-in-out;

.card {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f8f8f8;
  border-radius: 12px;
  transition: $transition;
}

.card.hoverable {
  @media (hover: hover) {
    &:hover {
      background-color: #eaeaea;

      .card__arrow {
        opacity: 1;
      }

      .card__img {
        transform: scale(1.1);
      }
    }
  }
}

.card__img {
  position: absolute;
  bottom: -30%;
  right: -7%;
  transition: $transition;
}

.card__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
}

.card__title,
.card__price {
  font-family: var(--font-secondary);
}

.card__description,
.card__price {
  max-width: 50%;
}

.card__price {
  text-wrap: nowrap;
}

.card__description {
  color: #7a7a7a;
}

.card__arrow {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 32px;
  height: 32px;
  opacity: 0;
  transition: $transition;

  :deep(path) {
    fill: $accent;
  }
}
</style>
