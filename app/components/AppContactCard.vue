<template>
  <div class="contact-card">
    <div class="contact-card__text">
      <h3 class="contact-card__title" :class="[type === 'modal' ? 'text-h3' : 'text-h2']">
        Поможем подобрать аппарат для вашего <wbr /> бизнеса
      </h3>
      <p class="contact-card__body">
        Наш менеджер свяжется с вами <wbr /> и подскажет какие аппараты наилучшим образом подходят под ваши задачи
      </p>
      <p class="contact-card__subtitle text-min">
        Заполняя форму, вы подтверждаете <a href="#">согласие</a> на обработку персональных данных лиц из формы
      </p>
    </div>

    <div class="form">
      <q-form class="column items-center" @submit.prevent="sendForm">
        <q-input v-model="name" class="form__input" outlined placeholder="Фамилия Имя" />

        <q-input
          v-model="email"
          type="email"
          class="form__input"
          outlined
          placeholder="Электронная почта, example@mail.ru"
        />

        <q-input
          v-model="phone"
          class="form__input"
          outlined
          mask="(###) ###-##-##"
          placeholder="(000) 000-00-00"
          prefix="+7"
        />

        <div class="form__submit">
          <div v-if="error" class="form__message error">
            {{ error }}
          </div>

          <div v-else-if="msg" class="form__message success">
            {{ msg }}
          </div>

          <AppButton class="full-width" type="submit" :color="type === 'modal' ? 'dark' : 'accent'">
            Отправить заявку
          </AppButton>
        </div>
      </q-form>

      <q-inner-loading :showing="loading">
        <q-spinner size="50px" color="accent" />
      </q-inner-loading>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  type: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["submit"]);

const name = ref("");
const email = ref("");
const phone = ref("");
const loading = ref(false);
const msg = ref("");
const error = ref("");

const sendForm = () => {
  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("email", email.value);
  formData.append("phone", phone.value);
  loading.value = true;
  setTimeout(() => {
    formData.entries().forEach((entry) => console.log(entry));
    loading.value = false;
    msg.value = "Заявка отправлена";
    emit("submit");
  }, 5000);
};
</script>

<style lang="scss" scoped>
.contact-card {
  padding: 64px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 64px;
  background-color: transparent;
  border-radius: 18px;
}

.contact-card__text {
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-card__title {
  font-family: var(--font-secondary);
  letter-spacing: 0px;
  color: $base;
}

.contact-card__body {
  flex-grow: 1;
  letter-spacing: 0px;
  color: $base-semi;
}

.contact-card__subtitle {
  letter-spacing: 0px;
  color: $base-semi;

  a {
    color: $base;
    text-decoration: underline;
  }
}

:deep(.q-field--outlined .q-field__control) {
  border-radius: 8px;
  color: $accent;
}

.form {
  flex: 1 0 0;
  position: relative;
  background-color: $base;
  border-radius: 12px;
  padding: 32px;
}

.form__input {
  margin-bottom: 16px;
  width: 100%;

  :deep(.q-field__native::placeholder) {
    color: $border;
  }
}

.form__submit {
  position: relative;
  width: 100%;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form__message {
  position: absolute;
  top: -8px;
}

.error {
  color: $negative;
}

.success {
  color: $accent;
}
</style>
