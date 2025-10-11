<template>
  <div class="contact-card" :class="classes">
    <div class="contact-card__text">
      <div
        class="contact-card__title"
        :class="[type === 'modal' ? 'text-h3' : 'text-h2']"
      >
        Поможем подобрать аппарат для вашего бизнеса
      </div>
      <div class="contact-card__description">
        Наш менеджер свяжется с вами и подскажет какие аппараты наилучшим
        образом подходят под ваши задачи
      </div>
      <div class="contact-card__caption text-min">
        Заполняя форму, вы подтверждаете согласие на обработку персональных
        данных лиц из формы в соответствии с
        <NuxtLink to="/privacy-policy" @click="closeModal"
          >Политикой конфиденциальности</NuxtLink
        >
      </div>
    </div>

    <div class="contact-card__form form">
      <q-form class="column items-center" @submit.prevent="sendForm">
        <q-input
          v-model="name"
          class="form__input"
          outlined
          placeholder="Фамилия Имя"
          :rules="[(val) => !!val]"
          lazy-rules="ondemand"
          error-message="Обязательное поле"
        />

        <q-input
          v-model="email"
          class="form__input"
          outlined
          placeholder="Электронная почта, example@mail.ru"
          :rules="['email']"
          lazy-rules="ondemand"
          error-message="Некорректный email"
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
          <AppButton
            class="full-width"
            type="submit"
            :color="type === 'modal' ? 'dark' : 'accent'"
          >
            Отправить заявку
          </AppButton>
        </div>
      </q-form>

      <div v-show="!!message" class="form__msg">
        <q-icon
          :name="error ? 'close' : 'check'"
          size="22px"
          :color="error ? 'negative' : 'positive'"
        />
        <div class="text-nav">{{ message }}</div>
        <AppButton :color="type === 'modal' ? 'dark' : 'accent'" @click="clear">
          Закрыть
        </AppButton>
      </div>

      <q-inner-loading :showing="loading">
        <q-spinner size="50px" :color="type === 'modal' ? 'dark' : 'accent'" />
      </q-inner-loading>
    </div>

    <div class="contact-card__caption text-min mobile-show">
      Заполняя форму, вы подтверждаете согласие на обработку персональных данных
      лиц из формы в соответствии с
      <NuxtLink to="/privacy-policy" @click="closeModal"
        >Политикой конфиденциальности</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useLayout } from "@/composables/useLayout";

const props = defineProps({
  type: {
    type: String,
    default: "page",
  },
});

const emit = defineEmits(["submit"]);
const { modalOpen, closeModal } = useLayout();

const classes = computed(() => ["contact-card--" + props.type]);

const name = ref("");
const email = ref("");
const phone = ref("");
const loading = ref(false);
const error = ref(false);
const message = ref("");
const sendForm = async () => {
  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("email", email.value);
  formData.append("phone", phone.value);
  message.value = "";

  try {
    loading.value = true;
    await new Promise((resolve) => setTimeout(resolve, 2000));
    message.value = "Спасибо! Ваша заявка отправлена";
  } catch {
    error.value = true;
    message.value = "Произошла ошибка при отправке";
  } finally {
    loading.value = false;
  }
};

const clear = () => {
  name.value = "";
  email.value = "";
  phone.value = "";
  message.value = "";
  error.value = false;
};
</script>

<style lang="scss" scoped>
.contact-card {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 64px;
  width: 100%;
  height: 100%;
  padding: 64px;
  background-color: transparent;
  border-radius: 18px;

  @media (width <= $breakpoint-md) {
    flex-direction: column;
  }

  &--page {
    position: relative;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url("/img/contact_form_bg.png");
    background-size: cover;
    background-position: center;

    @media (width <= $breakpoint-sm) {
      padding: 24px;
      gap: 32px;
    }
  }

  &--modal {
    background-color: $dark;

    @media (width <= $breakpoint-md) {
      padding: 32px;
      gap: 32px;
    }
  }
}

.contact-card__text {
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-card__title {
  max-width: calc(100% - 24px * 2);
  font-family: var(--font-secondary);
  letter-spacing: 0px;
  color: $base;

  @media (width <= $breakpoint-sm) {
    max-width: 100%;
  }
}

.contact-card__description {
  flex-grow: 1;
  letter-spacing: 0px;
  color: $base-semi;
}

.contact-card__caption {
  letter-spacing: 0px;
  color: $base-semi;

  a {
    color: $base;
    text-decoration: underline;
  }

  &.mobile-show {
    display: none;
  }

  @media (width <= $breakpoint-md) {
    display: none;

    &.mobile-show {
      display: block;
    }
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

  @media (width <= $breakpoint-xs) {
    padding: 16px;
  }
}

.form__input {
  margin-bottom: 8px;
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

.form__msg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex-wrap: nowrap;
  border-radius: 12px;
  background-color: $base;
  border-radius: 12px;
}
</style>
