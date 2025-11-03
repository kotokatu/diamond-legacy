<template>
  <div v-if="isOpen" class="cookie" :class="['cookie__floating', 'cookie__floating--bottom-left']">
    <div class="cookie__floating__wrap">
      <!-- <div
        class="cookie__floating__postpone-button"
        title="Close"
        @click="postpone"
      >
        <slot name="postponeContent">&times;</slot>
      </div> -->

      <button class="cookie__floating__postpone-button" aria-label="Закрыть" type="button" @click="postpone">
        <slot name="postponeContent">
          <IconClose class="icon icon--close" aria-hidden="true" focusable="false" />
        </slot>
      </button>

      <div class="cookie__floating__content">
        <slot name="message">
          Мы обрабатываем cookies, чтобы пользоваться веб-сайтом было удобнее. Вы можете запретить обработку сookies в
          настройках браузера. Пожалуйста, ознакомьтесь с
          <NuxtLink to="/privacy-policy" target="_blank" class="cookie__floating__link"
            >Политикой конфиденциальности</NuxtLink
          >
        </slot>
      </div>

      <div class="form__submit">
        <!--AppButton
            class="form__btn"
            type="submit"
            @click="decline"
            color="type === 'modal' ? 'dark' : 'accent'"
          >
            Отклонить
          </AppButton-->

        <AppButton class="form__btn" type="submit" color="accent" @click="accept"> Принять </AppButton>
      </div>
    </div>
  </div>
</template>

<script>
//import * as tinyCookie from 'tiny-cookie';
import IconClose from "@/assets/icons/bx-x.svg";

export default {
  name: "CookieConsent",
  components: {
    IconClose,
  },
  props: {
    debug: {
      type: Boolean,
      default: false,
    },

    disableDecline: {
      type: Boolean,
      default: false,
    },

    forceCookies: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      status: null,
      supportsLocalStorage: true,
      isOpen: false,
    };
  },
  mounted() {
    this.checkLocalStorageFunctionality();
    this.init();
  },
  methods: {
    init() {
      const visitedType = this.getCookieStatus();

      if (visitedType && (visitedType === "accept" || visitedType === "decline" || visitedType === "postpone")) {
        this.isOpen = false;
      }

      if (!visitedType) {
        this.isOpen = true;
      }

      this.status = visitedType;
      this.$emit("status", visitedType);
    },
    checkLocalStorageFunctionality() {
      if (this.forceCookies) {
        this.supportsLocalStorage = false;
        return;
      }

      // Check for availability of localStorage
      try {
        const test = "__cookie-consent-check-localStorage";
        window.localStorage.setItem(test, test);
        window.localStorage.removeItem(test);
      } catch {
        console.error("Local storage is not supported, falling back to cookie use");
        this.supportsLocalStorage = false;
      }
    },
    setCookieStatus(type) {
      if (this.supportsLocalStorage) {
        if (type === "accept") {
          localStorage.setItem(`cookie-consent`, "accept");
        }
        if (type === "decline") {
          localStorage.setItem(`cookie-consent`, "decline");
        }
        if (type === "postpone") {
          localStorage.setItem(`cookie-consent`, "postpone");
        }
      } else {
        if (type === "accept") {
          tinyCookie.set(`cookie-consent`, "accept");
        }
        if (type === "decline") {
          tinyCookie.set(`cookie-consent`, "decline");
        }
        if (type === "postpone") {
          tinyCookie.set(`cookie-consent`, "postpone");
        }
      }
    },
    getCookieStatus() {
      if (this.supportsLocalStorage) {
        return localStorage.getItem(`cookie-consent`);
      } else {
        return tinyCookie.get(`cookie-consent`);
      }
    },
    accept() {
      if (!this.debug) {
        this.setCookieStatus("accept");
      }

      this.status = "accept";
      this.isOpen = false;
      this.$emit("clicked-accept");
    },
    decline() {
      if (!this.debug) {
        this.setCookieStatus("decline");
      }

      this.status = "decline";
      this.isOpen = false;
      this.$emit("clicked-decline");
    },
    postpone() {
      if (!this.debug) {
        this.setCookieStatus("postpone");
      }

      this.status = "postpone";
      this.isOpen = false;
      this.$emit("clicked-postpone");
    },
    removeCookie() {
      localStorage.removeItem(`cookie-consent`);
      this.status = null;
      this.$emit("removed-cookie");
    },
  },
};
</script>

<style lang="scss" scoped>
.form__submit {
  position: relative;
  width: 100%;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cookie {
  &__floating {
    -ms-overflow-style: none;
    position: fixed;
    overflow: hidden;
    z-index: 9999;
    left: 0;
    bottom: 0;
    width: 100%;
    background: $dark;
    border-top: 2px solid $base-semi;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    &__postpone-button {
      position: absolute;
      top: 4px;
      right: 4px;
      display: flex;
      place-items: center;
      background: transparent;
      border: none;
      padding: 0;
      cursor: pointer;

      .icon--close {
        :deep(path) {
          fill: $base;
        }
      }
    }

    &__content {
      color: $base-semi;
      margin-bottom: 5px;
      padding: 12px 32px 12px 20px;

      @media (min-width: 768px) {
        margin-bottom: 10px;
      }
    }

    &__link {
      color: $base;
      text-decoration: underline;
    }
  }
}
</style>
