<template>
  <NuxtLink :to="data.link">
    <div class="card" :class="classes">
      <div class="card__content">
        <h3 class="card__title text-h3">{{ data.name }}</h3>
        <p class="card__description">{{ data.description }}</p>
        <h3 class="card__price text-h3">{{ data.price }}</h3>
      </div>

      <div class="card__img-container">
        <img
          class="card__img"
          :alt="data.name"
          :srcset="`_ipx/w_${width}${data.image} 1x, _ipx/w_${width * 2}${
            data.image
          } 2x`"
          :src="`_ipx/w_${width}${data.image}`"
          :width="width"
        />
      </div>

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
  size: {
    type: String,
    default: "lg",
    validator: (value) => {
      return ["sm", "md", "lg"].includes(value);
    },
  },
});

const IMAGE_WIDTHS = {
  lg: 500,
  md: 300,
  sm: 200,
};

const width = computed(() => IMAGE_WIDTHS[props.size]);

const classes = computed(() => {
  return {
    [`card--${props.size}`]: true,
  };
});
</script>

<style lang="scss" scoped>
$transition: all 0.3s ease-in-out;

.card {
  container-type: inline-size;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f8f8f8;
  border-radius: 12px;
  transition: $transition;

  &--sm {
    .card__price {
      margin-top: auto;
    }
  }

  &--md,
  &--sm {
    .card__img-container {
      display: flex;
      justify-content: flex-end;
    }

    .card__img {
      object-position: 35px 60px;
    }
  }

  &--lg {
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

    .card__img {
      width: 100%;
      height: 100%;
      object-position: 110px 70px;
      transform-origin: bottom right;
      transition: $transition;

      @container (inline-size < 00px) {
        object-position: 110px 100px;
      }

      @container (inline-size < 500px) {
        object-position: 110px 120px;
      }

      @container (inline-size < 400px) {
        object-position: 90px 130px;
      }

      @container (inline-size < 350px) {
        object-position: 40px 130px;
      }
    }
  }
}

.card__img-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card__img {
  object-fit: cover;
  z-index: 1;
  overflow: hidden;
}

.card__content {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 16px;
  padding: 24px;
  z-index: 200;

  @media (max-width: $breakpoint-sm) {
    padding: 16px;
  }
}

.card__title,
.card__price {
  font-family: var(--font-secondary);
}

.card__description,
.card__price {
  max-width: 60%;
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
