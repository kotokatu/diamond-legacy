<template>
  <div class="wrapper flex-center">
    <div class="contained">
      <header class="header" role="banner">
        <NuxtLink
          to="/"
          class="header__logo"
          aria-label="Перейти на главную — Legacy"
        >
          <div class="logo" aria-hidden="false">
            <LogoImg
              class="logo__img"
              alt="Legacy logo"
              filled
              :font-controlled="false"
            />
            <LogoText
              class="logo__text"
              alt="Legacy"
              filled
              :font-controlled="false"
            />
          </div>
        </NuxtLink>

        <nav class="header__nav" aria-label="Основная навигация">
          <slot name="page-nav" />
        </nav>

        <div class="header__right">
          <AppButton
            color="accent"
            aria-label="Написать нам — открыть форму связи"
            @click="$emit('modal:open')"
          >
            <span>Написать нам</span>
          </AppButton>

          <button
            class="header__menu-btn"
            type="button"
            aria-label="Открыть меню"
            aria-haspopup="true"
            @click="$emit('nav:open')"
          >
            <MenuIcon class="icon" aria-hidden="true" focusable="false" />
          </button>
        </div>
      </header>

      <nav class="header__catalog" aria-label="Каталог">
        <slot name="catalog-nav" />
      </nav>
    </div>
  </div>
</template>

<script setup>
import MenuIcon from "@/assets/icons/bx-menu.svg";
import LogoImg from "@/assets/svg/logo_header_img.svg";
import LogoText from "@/assets/svg/logo_text.svg";

defineEmits(["modal:open", "nav:open"]);
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  z-index: 1000;
  top: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  height: 64px;
  width: 100%;
  padding: 0 4px 0 16px;
  background-color: $base;
  border-radius: 12px;
  border: 4px solid #f8f8f8;
}

.header__logo {
  display: inline-flex;
  align-items: center;
}

.logo__text {
  @media (width < $breakpoint-xs) {
    display: none;
  }
}

.header__nav,
.header__catalog {
  display: flex;
  align-items: center;
}

.header__right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header__menu-btn {
  display: none;
  background: transparent;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: $breakpoint-md) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
