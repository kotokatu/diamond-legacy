<template>
  <q-dialog v-model="modalOpen">
    <div
      class="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      tabindex="-1"
    >
      <h2 id="modal-title" class="sr-only">Форма обратной связи</h2>
      <p id="modal-desc" class="sr-only">
        Форма для запроса информации и связи с представителем компании.
      </p>

      <AppContactCard type="modal" />
      <button
        class="modal__btn"
        aria-label="Закрыть"
        type="button"
        @click="closeModal"
      >
        <IconClose
          class="icon icon--close"
          aria-hidden="true"
          focusable="false"
        />
      </button>
    </div>
  </q-dialog>
</template>

<script setup>
import IconClose from "@/assets/icons/bx-x.svg";
import { useLayout } from "@/composables/useLayout";

const { modalOpen, closeModal } = useLayout();
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

  @media (width <= $breakpoint-xs) {
    max-width: calc(100vw - 8px * 2);
  }
}

.modal__btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
}

.icon--close {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;

  :deep(path) {
    fill: $base;
  }
}
</style>
