<template>
  <q-dialog v-model="modalOpen">
    <div class="modal">
      <AppContactCard type="modal" />
      <IconClose class="modal__close icon" @click="modalOpen = false" />
    </div>
  </q-dialog>
</template>

<script setup>
import IconClose from "@/assets/icons/bx-x.svg";

const modalOpen = defineModel({
  type: Boolean,
  default: false,
});
</script>

<style lang="scss">
@media (max-width: $breakpoint-sm) {
  .q-dialog__inner--minimized {
    padding: 8px !important;
  }
}
</style>

<style lang="scss" scoped>
.modal {
  position: relative;
  width: 864px;
  max-width: calc(100vw - 40px * 2);
  background-color: $dark;
  border-radius: 18px;

  @media (width < $breakpoint-xs) {
    max-width: calc(100vw - 8px * 2);
  }
}

.modal__close {
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;

  :deep(path) {
    fill: $base;
  }
}
</style>
