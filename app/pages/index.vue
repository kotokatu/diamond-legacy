<template>
  <div class="page-wrapper">
    <section class="wrapper section hero">
      <div class="section__video-container">
        <video class="section__video" type="video/mp4" autoplay loop muted>
          <source src="@/assets/video/hero_video.webm" type="video/mp4" />
          <source src="@/assets/video/hero_video.mp4" type="video/mp4" />
        </video>
      </div>

      <div class="section__content contained">
        <h1 class="section__text">Legacy — косметологические аппараты премиум качества</h1>
        <h3 class="section__subtext">
          Уникальный симбиоз многолетнего опыта <br />
          и передовых корейских технологий
        </h3>
      </div>
    </section>

    <section class="wrapper section about">
      <div class="section__top contained">
        <div class="section__header text-nav">
          <span class="section__header-index">1.0</span>
          <div class="section__header-text">
            <span class="section__header-title">{ О компании }</span>
            <span class="section__header-subtitle">Legacy</span>
          </div>
        </div>
        <div class="section__content">
          <h2 class="section__text">
            Legacy — это результат реальной практики, экспертизы, стремления дать специалистам лучшее оборудование,
            которое станет эталоном надёжности и качества
          </h2>
        </div>
      </div>

      <div class="section__bottom">
        <div class="section__video-container">
          <video class="section__video" type="video/mp4" autoplay loop muted>
            <source src="@/assets/video/about_video.webm" type="video/mp4" />
            <source src="@/assets/video/about_video.mp4" type="video/mp4" />
          </video>
        </div>

        <div class="section__content contained">
          <div class="section-item">
            <div class="section-item__title">
              <AppDots :count="1" />
              <span class="text-nav">{ Бренд }</span>
            </div>
            <div class="section-item__text">
              Legacy создан Diamond Technology — лидером на рынке косметологического оборудования с 5000 клиник и
              салонов в России и за её пределами
            </div>
          </div>
          <div class="section-item section-item--last">
            <div class="section-item__title">
              <AppDots :count="3" />
              <span class="text-nav">{ Подход }</span>
            </div>
            <div class="section-item__text">
              В аппаратах Legacy нет случайных решений: используются только проверенные комплектующие, удобный интерфейс
              и передовые технологии
            </div>
          </div>
          <div class="section-item">
            <div class="section-item__title">
              <AppDots :count="2" />
              <span class="text-nav">{ Опыт }</span>
            </div>
            <div class="section-item__text">
              Мы объединили многолетний опыт работы с ведущими заводами Китая, знания собственного сервисного центра и
              обратную связь клиентов
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="wrapper section catalog">
      <div class="section__content contained">
        <div class="section__header text-nav">
          <span class="section__header-index">2.0</span>
          <div class="section__header-text">
            <span class="section__header-title">{ Каталог }</span>
            <span class="section__header-subtitle">Legacy</span>
          </div>
        </div>

        <h2 class="section__text">
          Производим устройства мирового уровня с фокусом на надежность, удобство и технологичность
        </h2>

        <div class="section__catalog">
          <AppProductCard
            v-for="item in data.catalog"
            :key="item.id"
            class="catalog__card"
            :data="item"
            type="catalog"
          />
        </div>
      </div>
    </section>

    <section class="wrapper section contact">Contact</section>

    <section id="benefits" class="wrapper section benefits">Benefits</section>

    <section id="distributors" class="wrapper section distributors">Distributors</section>
  </div>
</template>

<script setup>
import { inject } from "vue";

import AppDots from "@/components/AppDots.vue";
import AppProductCard from "@/components/AppProductCard.vue";

const data = inject("data");
</script>

<style lang="scss" scoped>
.page-wrapper {
  background-color: $base;
}

.section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section__video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: $dark;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
  }
}

.section__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.section__content {
  position: relative;
  width: 100%;
}

.section__text {
  font-family: var(--font-secondary);
  font-weight: 400;
  letter-spacing: 0px;
}

.section__subtext {
  font-family: var(--font-secondary);
  font-weight: 400;
  letter-spacing: 0px;
}

.section__header {
  display: flex;
  width: 100%;
  padding: 16px 0;
  font-family: var(--font-secondary);
  font-style: italic;
  border-top: 1px solid $border;
}

.section__header-index,
.section__header-text {
  flex-basis: 50%;

  @media (max-width: $breakpoint-sm) {
    flex-basis: unset;
  }
}

.section__header-index {
  margin-right: 16px;
}

.section__header-text {
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
}

.section__header-title {
  text-wrap: nowrap;
}

.section.hero {
  padding: 270px 0px;

  .section__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }

  .section__text,
  .section__subtext {
    color: $base;
  }

  @media (max-width: $breakpoint-sm) {
    padding: 157px 0px 93px 0px;
  }
}

.section.about {
  .section__top {
    width: 100%;
    padding-top: 128px;
    padding-bottom: 128px;

    @media (max-width: $breakpoint-sm) {
      padding-top: 64px;
      padding-bottom: 64px;
    }

    .section__content {
      padding-top: 48px;
      display: grid;
      grid-template-columns: 1fr 1fr;

      @media (max-width: $breakpoint-sm) {
        grid-template-columns: 1fr;
      }
    }
  }

  .section__text {
    grid-column-start: 2;

    @media (max-width: $breakpoint-sm) {
      grid-column-start: 1;
    }
  }

  .section__bottom {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 760px;

    @media (max-width: $breakpoint-sm) {
      align-items: center;
    }

    .section__content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
      padding-top: 160px;
      padding-bottom: 160px;

      @media (max-width: $breakpoint-sm) {
        display: flex;
        flex-direction: column;
      }
    }

    .section-item {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 32px 0;

      &--last {
        margin-top: auto;
        transform: translateY(60px);

        @media (max-width: $breakpoint-sm) {
          margin-top: 0;
          order: 3;
          transform: translateY(0);
        }
      }
    }

    .section-item__title {
      display: flex;
      align-items: center;
      gap: 16px;
      color: $base-semi;
      font-family: var(--font-secondary);
      font-style: italic;
    }

    .section-item__text {
      color: $base;
    }
  }
}

.section.catalog {
  .section__content {
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding-top: 128px;
    padding-bottom: 128px;
  }

  .section__text {
    width: 50%;
    margin-left: auto;
  }

  .section__catalog {
    padding-top: 64px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .catalog__card {
    height: 600px;
  }
}
</style>
