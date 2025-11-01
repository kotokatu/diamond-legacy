<template>
    <div
      class="cookie"
      :class="['cookie__floating', 'cookie__floating--bottom-left']"
      v-if="isOpen"
      :id="elementId"
    >
      <div class="cookie__floating__wrap">
        <div
          @click="postpone"
          class="cookie__floating__postpone-button"
          title="Close"
        >
          <slot name="postponeContent">&times;</slot>
        </div>

        <div class="cookie__floating__content">
          <slot name="message">
            Мы обрабатываем cookies чтобы пользоваться веб-сайтом было удобнее. Вы можете запретить обработку сookies в настройках браузера. Пожалуйста, ознакомитесь с 
            <a
              href="/privacy-policy"
              target="_blank"
            >политикой конфиденциальности</a>
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

          <AppButton
            class="form__btn"
            type="submit"
            @click="accept"
            color="accent"
          >
            Принять
          </AppButton>
        </div>
      </div>
    </div>
</template>

<script>
//import * as tinyCookie from 'tiny-cookie';

export default {
  name: 'cookie-consent',
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
  data () {
    return {
      status: null,
      supportsLocalStorage: true,
      isOpen: false,
    };
  },
  mounted () {
    this.checkLocalStorageFunctionality();
    this.init();
  },
  methods: {
    init () {
      let visitedType = this.getCookieStatus();

      if (
        visitedType &&
        (visitedType === 'accept' || visitedType === 'decline' || visitedType === 'postpone')
      ) {
        this.isOpen = false;
      }

      if (!visitedType) {
        this.isOpen = true;
      }

      this.status = visitedType;
      this.$emit('status', visitedType);
    },
    checkLocalStorageFunctionality () {
      if (this.forceCookies) {
        this.supportsLocalStorage = false;
        return;
      }

      // Check for availability of localStorage
      try {
        const test = '__cookie-consent-check-localStorage';
        window.localStorage.setItem(test, test);
        window.localStorage.removeItem(test);
      } catch (e) {
        console.error('Local storage is not supported, falling back to cookie use');
        this.supportsLocalStorage = false;
      }
    },
    setCookieStatus (type) {
      if (this.supportsLocalStorage) {
        if (type === 'accept') {
          localStorage.setItem(`cookie-consent`, 'accept');
        }
        if (type === 'decline') {
          localStorage.setItem(`cookie-consent`, 'decline');
        }
        if (type === 'postpone') {
          localStorage.setItem(`cookie-consent`, 'postpone');
        }
      } else {
        if (type === 'accept') {
          tinyCookie.set(`cookie-consent`, 'accept');
        }
        if (type === 'decline') {
          tinyCookie.set(`cookie-consent`, 'decline');
        }
        if (type === 'postpone') {
          tinyCookie.set(`cookie-consent`, 'postpone');
        }
      }
    },
    getCookieStatus () {
      if (this.supportsLocalStorage) {
        return localStorage.getItem(`cookie-consent`);
      } else {
        return tinyCookie.get(`cookie-consent`);
      }
    },
    accept () {
      if (!this.debug) {
        this.setCookieStatus('accept');
      }

      this.status = 'accept';
      this.isOpen = false;
      this.$emit('clicked-accept');
    },
    decline () {
      if (!this.debug) {
        this.setCookieStatus('decline');
      }

      this.status = 'decline';
      this.isOpen = false;
      this.$emit('clicked-decline');
    },
    postpone () {
      if (!this.debug) {
        this.setCookieStatus('postpone');
      }

      this.status = 'postpone';
      this.isOpen = false;
      this.$emit('clicked-postpone');
    },
    removeCookie () {
      localStorage.removeItem(`cookie-consent`);
      this.status = null;
      this.$emit('removed-cookie');
    },
  },
};
</script>

<style lang="scss">
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
    box-sizing: border-box;
    z-index: 9999;
    width: 70%;
    background: $dark;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 18px;

    @media (min-width: 768px) {
      max-width: 90%;
    }

    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;

    @media (min-width: 768px) {
      &--bottom-left {
        bottom: 20px;
        left: 20px;
        right: auto;
        margin: 0 0;
      }
    }

    &__postpone-button {
      display: inline-flex;
      padding: 5px 0 0 20px;
      margin-bottom: -10px;
      margin-right: auto;

      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }
    }

    &__content {
      color: $base-semi;
      margin-bottom: 5px;
      padding: 15px 20px;
      max-height: 105px;
      overflow: auto;

      @media (min-width: 768px) {
        margin-bottom: 10px;
      }
    }
  }
}

</style>