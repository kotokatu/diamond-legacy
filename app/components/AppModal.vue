<template>
  <q-dialog v-model="modalOpen">
    <div class="modal">
      <div class="modal__text">
        <h3 class="modal__title">Поможем подобрать аппарат для вашего <wbr /> бизнеса</h3>
        <p class="modal__body">
          Наш менеджер свяжется с вами <wbr /> и подскажет какие аппараты наилучшим образом подходят под ваши задачи
        </p>
        <p class="modal__subtitle">
          Заполняя форму, вы подтверждаете <a href="#">согласие</a> на обработку персональных данных лиц из формы
        </p>
      </div>

      <AppContactForm color="dark" />

      <IconClose class="modal__close" @click="modalOpen = false" />
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
  display: flex;
  justify-content: center;
  gap: 64px;
  width: 864px;
  max-width: 80vw;
  padding: 64px;
  background-color: var(--q-dark);
  border-radius: 18px;
}

.modal__text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.modal__title {
  font-family: var(--font-secondary);
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0px;
  color: var(--q-base);
}

.modal__body {
  flex-grow: 1;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  color: var(--q-base-semi);
}

.modal__subtitle {
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0px;
  color: var(--q-base-semi);

  a {
    color: var(--q-base);
  }
}

.modal__close {
  position: absolute;
  width: 24px;
  height: 24px;
  top: 24px;
  right: 24px;
  cursor: pointer;

  :deep(path) {
    fill: var(--q-base);
    transition: all 0.2s ease;
  }

  @media (hover: hover) {
    &:hover {
      :deep(path) {
        fill: var(--q-base-semi);
      }
    }
  }
}
</style>
