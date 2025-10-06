<template>
  <div class="wrapper">
    <div class="contained">
      <footer class="footer">
        <div class="footer__block footer__block--left">
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

          <div class="info">
            <NuxtLink to="/" class="text-min">
              Политика конфиденциальности
            </NuxtLink>
            <NuxtLink to="/" class="text-min">
              Согласие на обработку персональных данных
            </NuxtLink>
            <div class="text-min">
              {{ new Date().getFullYear() }} © Продажа профессиональных
              аппаратов для косметологии
            </div>
          </div>
        </div>

        <div class="footer__block footer__block--right">
          <div class="contacts">
            <ul class="contacts__block links">
              <li class="phone text-h3">
                <NuxtLink href="tel:+79770904449"> +7 977 090 44 49 </NuxtLink>
              </li>

              <li class="address">г. Москва, ул. Тимирязевская, д. 2/3</li>
            </ul>

            <ul class="contacts__block links">
              <li>
                <NuxtLink href="mailto:legacy-info@mail.ru" class="email">
                  legacy-info@mail.ru
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="contacts">
            <ul class="contacts__block links">
              <li>
                <NuxtLink to="/#about" class="text-nav">О компании</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/#catalog" class="text-nav">Каталог</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/#benefits" class="text-nav">
                  Преимущества
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/#distributors" class="text-nav">
                  Для дистрибьюторов
                </NuxtLink>
              </li>
            </ul>

            <ul class="contacts__block links">
              <li>
                <NuxtLink to="/" class="text-nav">Telegram</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/" class="text-nav">Вконтакте</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/" class="text-nav">WhatsApp</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import LogoImg from "@/assets/img/logo_footer_img.svg";
import LogoText from "@/assets/img/logo_text.svg";
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: $dark;
  border-top: 1px solid $base-semi;
  padding-bottom: 140px;

  @media (max-width: $breakpoint-sm) {
    padding-bottom: 24px;
  }
}

.footer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: $breakpoint-sm) {
    grid-template-columns: 1fr;
  }
}

.footer__left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  gap: 16px;
}

.logo-text {
  :deep(g) {
    fill: $base-semi;
  }
}

.footer__block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
}

.footer__block--left {
  gap: 16px;

  .info {
    display: flex;
    flex-direction: column;
    gap: 8px;

    * {
      color: $base-semi;
    }
  }
}

.footer__block--right {
  gap: 64px;

  * {
    color: $base;
  }
}

.contacts {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 32px;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.phone {
  font-family: var(--font-secondary);
  margin-bottom: 8px;
}
</style>
