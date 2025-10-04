<template>
  <q-dialog v-model="modalOpen">
    <div class="modal">
      <div class="modal__text">
        <h3 class="modal__title">Поможем подобрать аппарат для вашего <wbr /> бизнеса</h3>
        <p class="modal__body">
          Наш менеджер свяжется с вами <wbr /> и подскажет какие аппараты наилучшим образом подходят под ваши задачи
        </p>
        <p class="modal__subtitle text-min">
          Заполняя форму, вы подтверждаете <a href="#">согласие</a> на обработку персональных данных лиц из формы
        </p>
      </div>

      <AppContactForm color="dark" />

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
  display: flex;
  justify-content: center;
  gap: 64px;
  width: 864px;
  max-width: 80vw;
  padding: 64px;
  background-color: $dark;
  border-radius: 18px;
}

.modal__text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.modal__title {
  font-family: var(--font-secondary);
  letter-spacing: 0px;
  color: $base;
}

.modal__body {
  flex-grow: 1;
  letter-spacing: 0px;
  color: $base-semi;
}

.modal__subtitle {
  letter-spacing: 0px;
  color: $base-semi;

  a {
    color: $base;
    text-decoration: underline;
  }
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
