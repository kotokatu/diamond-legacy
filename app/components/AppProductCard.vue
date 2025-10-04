<template>
  <NuxtLink :to="data.link">
    <div class="card">
      <div class="card__content">
        <h3 class="card__title">{{ data.name }}</h3>
        <p class="card__description">{{ data.description }}</p>
        <h3 class="card__price">{{ data.price }}</h3>
      </div>

      <img
        class="card__img"
        :alt="data.name"
        :width="imageSize"
        height="auto"
        :srcset="`/_ipx/w_300/${data.image} 1x, /_ipx/w_600/${data.image} 2x, /_ipx/w_1200/${data.image} 3x`"
      />
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
  imageSize: {
    type: Number,
    default: 300,
  },
});
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f8f8f8;
  border-radius: 12px;
}

.card__img {
  position: absolute;
  bottom: -30%;
  right: -7%;
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
</style>
