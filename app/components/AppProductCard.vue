<template>
  <NuxtLink :to="data.link">
    <div class="card" :class="classes">
      <div class="card__content">
        <h3 class="card__title text-h3">{{ data.name }}</h3>
        <p class="card__description">{{ data.description }}</p>
        <h3 class="card__price text-h3">{{ data.price }}</h3>
      </div>

      <img class="card__img" :alt="data.name" :width="IMAGE_WIDTHS[size]" height="auto" :src="src" />

      <ArrowIcon class="card__arrow" />
    </div>
  </NuxtLink>
</template>

<script setup>
import ArrowIcon from "@/assets/icons/bx-arrow.svg";
const img = useImage();

const src = computed(() => img(props.data.image, { width: IMAGE_WIDTHS[props.size] }));

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  size: {
    type: String,
    default: "sm",
    validator: (value) => {
      return ["xs", "sm", "md"].includes(value);
    },
  },
  hover: {
    type: Boolean,
    default: false,
  },
});

const IMAGE_WIDTHS = {
  md: 500,
  sm: 300,
  xs: 200,
};

const classes = computed(() => {
  return {
    hoverable: props.hover,
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
  right: -6%;
  transition: $transition;
  z-index: 1;
  overflow: hidden;
}

.card__content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  z-index: 200;
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
