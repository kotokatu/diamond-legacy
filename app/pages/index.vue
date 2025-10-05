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
        <h1 class="section__text text-h1">Legacy — косметологические аппараты премиум качества</h1>
        <h3 class="section__subtext text-h3">
          Уникальный симбиоз многолетнего опыта <br />
          и передовых корейских технологий
        </h3>
      </div>
    </section>

    <section class="wrapper section about">
      <div class="lead contained">
        <div class="lead__header text-nav text-sub">
          <span class="lead__header-index">1.0</span>
          <div class="lead__header-text">
            <span class="lead__header-title">{ О компании }</span>
            <span class="lead__header-subtitle">Legacy</span>
          </div>
        </div>
        <h2 class="lead__text text-h2">
          Legacy — это результат реальной практики, экспертизы, стремления дать специалистам лучшее оборудование,
          которое станет эталоном надёжности и качества
        </h2>
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
              <span class="text-nav text-sub">{ Бренд }</span>
            </div>
            <div class="section-item__text">
              Legacy создан Diamond Technology — лидером на рынке косметологического оборудования с 5000 клиник и
              салонов в России и за её пределами
            </div>
          </div>
          <div class="section-item section-item--last">
            <div class="section-item__title">
              <AppDots :count="3" />
              <span class="text-nav text-sub">{ Подход }</span>
            </div>
            <div class="section-item__text">
              В аппаратах Legacy нет случайных решений: используются только проверенные комплектующие, удобный интерфейс
              и передовые технологии
            </div>
          </div>
          <div class="section-item">
            <div class="section-item__title">
              <AppDots :count="2" />
              <span class="text-nav text-sub">{ Опыт }</span>
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
      <div class="contained">
        <div class="lead">
          <div class="lead__header text-nav text-sub">
            <span class="lead__header-index">2.0</span>
            <div class="lead__header-text">
              <span class="lead__header-title">{ Каталог }</span>
              <span class="lead__header-subtitle">Legacy</span>
            </div>
          </div>

          <h2 class="lead__text text-h2">
            Производим устройства мирового уровня с фокусом на надежность, удобство и технологичность
          </h2>
        </div>

        <div class="section__catalog">
          <AppProductCard
            v-for="item in data.catalog"
            :key="item.id"
            class="catalog__card"
            :data="item"
            size="md"
            hover
          />
        </div>

        <div class="section__contact">
          <AppContactCard class="section__contact-card" />
        </div>
      </div>
    </section>

    <section id="benefits" class="wrapper section benefits">
      <div class="contained">
        <div class="lead">
          <div class="lead__header text-nav text-sub">
            <span class="lead__header-index">3.0</span>
            <div class="lead__header-text">
              <span class="lead__header-title">{ Преимущества }</span>
              <span class="lead__header-subtitle">Legacy</span>
            </div>
          </div>
        </div>

        <div class="lead__text text-h2">
          Берем на себя все этапы — от логистики до настройки оборудования, а также обеспечиваем последующее техническое
          сопровождение по всей России
        </div>

        <div class="section__benefits-list">
          <div class="section__benefits-item delivery">
            <div class="item-header text-nav text-sub">{ Доставка }</div>
            <div class="item-body">
              <div class="item-title text-h3">Бесплатная доставка</div>
              <div class="item-text">
                Доставка оборудования надёжными транспортными компаниями по России, СНГ и Европе. Аппараты упакованы в
                алюминиевые кейсы. Сохранность и своевременная доставка гарантированы
              </div>
            </div>
          </div>

          <div class="section__benefits-item image image-1">
            <img src="@/assets/img/benefits_1.jpg" alt="" />
          </div>

          <div class="section__benefits-item payment">
            <div class="item-header text-nav text-sub">{ Оплата }</div>
            <div class="item-body">
              <div class="item-title text-h3">Оплата при получении</div>
              <div class="item-text">
                Производится только после получения оборудования, что позволит убедиться в качестве товара. Доступны
                любые способы: расчётный счёт, наличные, банковский перевод — по удобству клиента
              </div>
            </div>
          </div>

          <div class="section__benefits-item warranty">
            <div class="item-header text-nav text-sub">{ Гарантии }</div>
            <div class="item-body">
              <div class="item-title text-h3">Пожизненная гарантия</div>
              <div class="item-text">
                Обслуживание 24/7. Опытные мастера Legacy обеспечивают круглосуточное сопровождение: консультации,
                ремонт, гарантийное и постгарантийное обслуживание
              </div>
            </div>
          </div>

          <div class="section__benefits-item wide support">
            <div class="item-header text-nav text-sub">{ Сопровождение }</div>
            <div class="item-body">
              <div class="item-title text-h3">Помощь в получении соцконтракта под ключ</div>
              <div class="item-text">
                <div class="q-pb-sm">
                  Персональный менеджер Legacy сопровождает весь процесс оформления соцконтракта. Legacy берёт на себя
                  всю бюрократию и доводит дело до результата. Консультация по условиям получения
                </div>

                <ul class="list">
                  <li>Подбор аппарата под параметры программы</li>
                  <li>Подготовка документов и написание бизнес-плана</li>
                  <li>Подача заявки</li>
                  <li>Сопровождение до получения выплаты</li>
                  <li>Контроль покупки и отчётность</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="section__benefits-item training">
            <div class="item-header text-nav text-sub">{ Обучение }</div>
            <div class="item-body">
              <div class="item-title text-h3">Бесплатное обучение</div>
              <div class="item-text">
                При покупке аппарата Legacy предоставляется бесплатное обучение в нашем обучающем центре, онлайн и
                офлайн. Выдаётся диплом гос. образца или именной сертификат
              </div>
            </div>
          </div>

          <div class="section__benefits-item image image-2">
            <img src="@/assets/img/benefits_2.jpg" alt="" />
          </div>

          <div class="section__benefits-item production">
            <div class="item-header text-nav text-sub">{ Производство }</div>
            <div class="item-body">
              <div class="item-title text-h3">Собственное производство</div>
              <div class="item-text">
                Аппараты Legacy проходят строгий контроль качества на каждом этапе производства. Оборудование имеет
                официальные сертификаты качества и соответствует международным стандартам
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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

.lead {
  width: 100%;

  // @media (max-width: $breakpoint-sm) {
  //   padding-top: 64px;
  //   padding-bottom: 64px;
  // }
}

.lead__text {
  padding: 48px 0;
  font-family: var(--font-secondary);
  width: 50%;
  margin-left: auto;

  @media (max-width: $breakpoint-sm) {
    width: 100%;
    margin-left: 0;
  }
}

.lead__header {
  display: flex;
  width: 100%;
  padding: 16px 0;
  font-family: var(--font-secondary);
  font-style: italic;
  border-top: 1px solid $border;
}

.lead__header-index,
.lead__header-text {
  flex-basis: 50%;

  @media (max-width: $breakpoint-sm) {
    flex-basis: unset;
  }
}

.lead__header-index {
  margin-right: 16px;
}

.lead__header-text {
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
}

.lead__header-title {
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
  .lead {
    padding-top: 128px;
    padding-bottom: 128px;
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
    }

    .section-item__text {
      color: $base;
    }
  }
}

.section.catalog {
  padding-top: 128px;
  padding-bottom: 128px;

  .section__catalog {
    padding-top: 64px;
    padding-bottom: 64px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    @media (max-width: $breakpoint-sm) {
      grid-template-columns: 1fr;
    }
  }

  .catalog__card {
    height: 600px;

    @media (max-width: $breakpoint-md) {
      height: 540px;
    }
  }

  .section__contact-card {
    position: relative;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/img/form_bg.png");
    background-size: cover;
    background-position: center;
  }
}

.section.benefits {
  background-color: #f8f8f8;
  padding-top: 128px;
  padding-bottom: 128px;

  .section__benefits-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    gap: 16px;
    padding-top: 64px;

    @media (max-width: 1024px) {
      display: flex;
      flex-wrap: wrap;
      padding-top: 0;
    }
  }

  .section__benefits-item {
    flex-basis: calc(100% / 3 - 16px);
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: space-between;
    min-height: 380px;
    width: 100%;
    padding: 32px;
    background-color: $base;
    border-radius: 12px;
    backdrop-filter: blur(12px);
    overflow: hidden;

    @media (max-width: 1024px) {
      flex-basis: calc(100% / 2 - 16px / 2);

      &.delivery {
        order: 1;
      }

      &.image-1 {
        order: 2;
      }

      &.warranty {
        order: 3;
      }

      &.payment {
        order: 4;
      }

      &.image-2 {
        order: 5;
      }

      &.support {
        order: 6;
      }

      &.training {
        order: 7;
      }

      &.production {
        order: 8;
      }
    }

    @media (max-width: $breakpoint-sm) {
      flex-basis: 100%;
      min-height: 290px;
    }

    &.wide {
      grid-column: span 2;
    }

    &.image {
      padding: 8px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 8px;
    }
  }

  .item-header {
    color: #7a7a7a;
  }

  .item-title {
    font-family: var(--font-secondary);
    margin-bottom: 16px;
  }

  .item-text {
    .list {
      list-style-type: disc;
    }
  }
}
</style>
