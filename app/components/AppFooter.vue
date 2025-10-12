<template>
  <div class="wrapper flex-center">
    <div class="contained">
      <footer class="footer">
        <div class="footer__block footer__block--logo">
          <div class="logo">
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
        </div>

        <div class="footer__block footer__block--info list">
          <NuxtLink to="/privacy-policy" class="text-min">
            Политика конфиденциальности
          </NuxtLink>
          <div class="text-min">
            {{ new Date().getFullYear() }} © Продажа профессиональных аппаратов
            для косметологии
          </div>
        </div>

        <div class="footer__block footer__block--contacts">
          <div class="contact-info">
            <ul class="list">
              <li class="phone text-h3">
                <NuxtLink href="tel:+79770904449"> +7 977 090 44 49 </NuxtLink>
              </li>

              <li class="address">г. Москва, ул. Тимирязевская, д. 2/3</li>
            </ul>

            <ul class="list">
              <li>
                <NuxtLink href="mailto:legacy-info@mail.ru" class="email">
                  legacy-info@mail.ru
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="socials">
            <ul class="list">
              <li>
                <NuxtLink to="/#about" class="text-nav">
                  <AppNavItem label="О компании" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/#catalog" class="text-nav">
                  <AppNavItem label="Каталог" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/#benefits" class="text-nav">
                  <AppNavItem label="Преимущества" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/#distributors" class="text-nav">
                  <AppNavItem label="Для дистрибьюторов" />
                </NuxtLink>
              </li>
            </ul>

            <ul class="list">
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
import LogoImg from "@/assets/svg/logo_footer_img.svg";
import LogoText from "@/assets/svg/logo_text.svg";
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: $dark;
  border-top: 1px solid $base-semi;
  padding: 40px 0 140px;

  @media (width < $breakpoint-sm) {
    padding: 0;
  }
}

.footer {
  display: grid;
  grid-template-areas:
    "logo contacts"
    "info contacts";
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  padding: 24px;

  @media (width < $breakpoint-sm) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "logo"
      "contacts"
      "info";
    padding: 24px 0;
  }
}

.footer__block {
  display: flex;
  flex-direction: column;
}

.footer__block--logo {
  grid-area: logo;
}

.footer__block--info {
  justify-content: flex-end;
  grid-area: info;

  * {
    color: $base-semi;
  }

  a {
    transition: all 0.2s ease-in-out;
  }

  @media (hover: hover) {
    a:hover {
      color: $base;
    }
  }
}

.footer__block--contacts {
  grid-area: contacts;
  gap: 64px;

  @media (max-width: $breakpoint-sm) {
    gap: 32px;
  }
}

.contact-info,
.socials {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
  flex-wrap: wrap;

  @media (max-width: $breakpoint-sm) {
    gap: 8px;
  }

  * {
    color: $base;
  }
}

.list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.logo__text {
  :deep(g) {
    fill: $base-semi;
  }
}

.phone {
  font-family: var(--font-secondary);
}
</style>
