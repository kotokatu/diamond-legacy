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

<style lang="scss" scoped>
.modal {
  position: relative;
  width: 864px;
  max-width: 80vw;
  background-color: $dark;
  border-radius: 18px;
}

.modal__close {
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;

  :deep(path) {
    fill: $base;
  }
}
</style>
