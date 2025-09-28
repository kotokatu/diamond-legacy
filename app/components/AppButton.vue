<template>
  <q-btn class="btn" no-caps unelevated :ripple="false">
    <slot />
  </q-btn>
</template>

<style lang="scss" scoped>
.btn {
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
  text-wrap: nowrap;
  color: var(--color-base);
  outline: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn--accent {
  background-color: var(--color-accent);

  @media (hover: hover) {
    &:hover {
      background-color: var(--color-accent-hover);
    }
  }
}
</style>
