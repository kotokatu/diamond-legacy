<template>
  <NuxtLink
    :to="data.link"
    :aria-labelledby="`product-${data.id}-title`"
    :aria-describedby="`product-${data.id}-desc product-${data.id}-price`"
  >
    <div class="card" :class="classes">
      <div class="card__content">
        <h3 :id="`product-${data.id}-title`" class="card__title text-h3">
          {{ data.name }}
        </h3>
        <p :id="`product-${data.id}-desc`" class="card__description">
          {{ data.description }}
        </p>
        <p :id="`product-${data.id}-price`" class="card__price text-h3">
          {{ data.price }}
        </p>
      </div>

      <div class="card__img-container">
        <NuxtImg class="card__img" :alt="data.name" :src="data.image" sizes="700px" loading="lazy" />
      </div>

      <ArrowIcon class="card__arrow" aria-hidden="true" role="presentation" />
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
      return ["sm", "lg"].includes(value);
    },
  },
});

const classes = computed(() => {
  return {
    [`card--${props.size}`]: true,
  };
});
</script>

<style lang="scss" scoped>
$transition: all 0.2s ease-in-out;

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
    .card__img-container {
      display: flex;
      justify-content: flex-end;
    }

    .card__img {
      object-position: 35px 70px;
    }

    .card__price {
      @container (inline-size < 400px) {
        margin-top: auto;
      }
    }
  }

  &--lg {
    .card__img {
      width: 100%;
      height: 100%;
      object-position: 110px 70px;
      transform-origin: bottom right;
      transition: $transition;

      @container (width < 600px) {
        object-position: 110px 100px;
      }

      @container (width < 500px) {
        object-position: 110px 120px;
      }

      @container (width < 400px) {
        object-position: 90px 130px;
      }

      @container (width < 350px) {
        object-position: 40px 130px;
      }

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
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  z-index: 200;

  @media (min-width: $breakpoint-sm) {
    padding: 24px;
  }
}

.card__title,
.card__price {
  font-family: var(--font-secondary);
}

.card__description {
  max-width: 17.5rem;
  color: #7a7a7a;
}

.card__price {
  text-wrap: nowrap;
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
