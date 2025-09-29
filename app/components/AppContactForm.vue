<template>
  <div class="form">
    <q-form class="column items-center" @submit.prevent="sendForm">
      <q-input
        v-model="name"
        class="form__input"
        outlined
        placeholder="Фамилия Имя"
      />

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

        <AppButton color="dark" class="full-width" type="submit">
          Отправить заявку
        </AppButton>
      </div>
    </q-form>

    <q-inner-loading :showing="loading">
      <q-spinner size="50px" color="accent" />
    </q-inner-loading>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
.form {
  position: relative;
  background-color: var(--color-base);
  border-radius: 12px;
  padding: 32px;
}

:deep(.q-field--outlined .q-field__control) {
  border-radius: 8px;
  color: var(--q-accent);
}

.form__input {
  margin-bottom: 16px;
  width: 304px;
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
  color: var(--q-negative);
}

.success {
  color: var(--q-accent);
}
</style>
