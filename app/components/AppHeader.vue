<template>
  <div class="wrapper">
    <div class="contained">
      <header class="header">
        <NuxtLink to="/">
          <div class="logo">
            <LogoImg
              class="logo-img"
              alt="Legacy logo"
              filled
              :font-controlled="false"
            />
            <LogoText
              class="logo-text"
              alt="Legacy"
              filled
              :font-controlled="false"
            />
          </div>
        </NuxtLink>

        <slot name="page-nav" />

        <div class="header__right">
          <AppButton color="accent" @click="$emit('modal:open')">
            <span>Написать нам</span>
          </AppButton>

          <div class="header__menu-btn">
            <MenuIcon class="icon" @click="$emit('nav:open')" />
          </div>
        </div>
      </header>

      <slot name="catalog-nav" />
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

.logo-text {
  @media (max-width: $breakpoint-sm) {
    display: none;
  }
}

.header__right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header__menu-btn {
  display: none;

  @media (max-width: $breakpoint-lg) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    cursor: pointer;
  }
}
</style>
