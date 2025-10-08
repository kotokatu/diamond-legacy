<template>
  <div class="page page--home">
    <section class="wrapper section hero">
      <div class="section__background overlayed">
        <video class="section__video" autoplay loop muted>
          <source src="@/assets/video/hero_video.webm" type="video/mp4" />
          <source src="@/assets/video/hero_video.mp4" type="video/mp4" />
        </video>
      </div>

      <div class="section__body contained">
        <h1 class="font-secondary text-h1">
          Legacy — косметологические аппараты премиум качества
        </h1>
        <h3 class="font-secondary text-h3">
          Уникальный симбиоз многолетнего опыта <br />
          и передовых корейских технологий
        </h3>
      </div>
    </section>

    <section id="about" class="wrapper section about">
      <div class="section__lead section-lead contained">
        <div class="section-lead__header text-nav text-sub">
          <span class="section-lead__index">1.0</span>
          <div class="section-lead__text">
            <span class="section-lead__title">{ О компании }</span>
            <span class="section-lead__subtitle">Legacy</span>
          </div>
        </div>
        <h2 class="section-lead__body text-h2">
          Legacy — это результат реальной практики, экспертизы, стремления дать
          специалистам лучшее оборудование, которое станет эталоном надёжности и
          качества
        </h2>
      </div>

      <div class="section__bottom">
        <div class="section__background">
          <video class="section__video" type="video/mp4" autoplay loop muted>
            <source src="@/assets/video/about_video.webm" type="video/mp4" />
            <source src="@/assets/video/about_video.mp4" type="video/mp4" />
          </video>
        </div>

        <div class="section__body contained">
          <div class="section-item">
            <div class="section-item__title">
              <AppDots :count="1" />
              <span class="text-nav text-sub">{ Бренд }</span>
            </div>
            <div class="section-item__text">
              Legacy создан Diamond Technology — лидером на рынке
              косметологического оборудования с 5000 клиник и салонов в России и
              за её пределами
            </div>
          </div>
          <div class="section-item section-item--last">
            <div class="section-item__title">
              <AppDots :count="3" />
              <span class="text-nav text-sub">{ Подход }</span>
            </div>
            <div class="section-item__text">
              В аппаратах Legacy нет случайных решений: используются только
              проверенные комплектующие, удобный интерфейс и передовые
              технологии
            </div>
          </div>
          <div class="section-item">
            <div class="section-item__title">
              <AppDots :count="2" />
              <span class="text-nav text-sub">{ Опыт }</span>
            </div>
            <div class="section-item__text">
              Мы объединили многолетний опыт работы с ведущими заводами Китая,
              знания собственного сервисного центра и обратную связь клиентов
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="catalog" class="wrapper section catalog">
      <div class="contained">
        <div class="section__lead section-lead">
          <div class="section-lead__header text-nav text-sub">
            <span class="section-lead__index">2.0</span>
            <div class="section-lead__text">
              <span class="section-lead__title">{ Каталог }</span>
              <span class="section-lead__subtitle">Legacy</span>
            </div>
          </div>

          <h2 class="section-lead__body text-h2">
            Производим устройства мирового уровня с фокусом на надежность,
            удобство и технологичность
          </h2>
        </div>

        <div class="section__body">
          <AppProductCard
            v-for="item in data.catalog"
            :key="item.id"
            class="catalog__card"
            :data="item"
            size="lg"
          />
        </div>

        <div class="section__contact">
          <AppContactCard class="section__contact-card" />
        </div>
      </div>
    </section>

    <section id="benefits" class="wrapper section benefits">
      <div class="contained">
        <div class="section__lead section-lead">
          <div class="section-lead__header text-nav text-sub">
            <span class="section-lead__index">3.0</span>
            <div class="section-lead__text">
              <span class="section-lead__title">{ Преимущества }</span>
              <span class="section-lead__subtitle">Legacy</span>
            </div>
          </div>
          <div class="section-lead__body text-h2">
            Берем на себя все этапы — от логистики до настройки оборудования, а
            также обеспечиваем последующее техническое сопровождение по всей
            России
          </div>
        </div>

        <div class="section__body">
          <div class="section-item delivery">
            <div class="item-header text-nav text-sub">{ Доставка }</div>
            <div class="item-body">
              <div class="item-title text-h3">Бесплатная доставка</div>
              <div class="item-text">
                Доставка оборудования надёжными транспортными компаниями по
                России, СНГ и Европе. Аппараты упакованы в алюминиевые кейсы.
                Сохранность и своевременная доставка гарантированы
              </div>
            </div>
          </div>

          <div class="section-item section-item--img image-1">
            <img src="@/assets/img/benefits_1.jpg" alt="" />
          </div>

          <div class="section-item payment">
            <div class="item-header text-nav text-sub">{ Оплата }</div>
            <div class="item-body">
              <div class="item-title text-h3">Оплата при получении</div>
              <div class="item-text">
                Производится только после получения оборудования, что позволит
                убедиться в качестве товара. Доступны любые способы: расчётный
                счёт, наличные, банковский перевод — по удобству клиента
              </div>
            </div>
          </div>

          <div class="section-item warranty">
            <div class="item-header text-nav text-sub">{ Гарантии }</div>
            <div class="item-body">
              <div class="item-title text-h3">Пожизненная гарантия</div>
              <div class="item-text">
                Обслуживание 24/7. Опытные мастера Legacy обеспечивают
                круглосуточное сопровождение: консультации, ремонт, гарантийное
                и постгарантийное обслуживание
              </div>
            </div>
          </div>

          <div class="section-item section-item--wide support">
            <div class="item-header text-nav text-sub">{ Сопровождение }</div>
            <div class="item-body">
              <div class="item-title text-h3">
                Помощь в получении соцконтракта под ключ
              </div>
              <div class="item-text">
                <div class="q-pb-sm">
                  Персональный менеджер Legacy сопровождает весь процесс
                  оформления соцконтракта. Legacy берёт на себя всю бюрократию и
                  доводит дело до результата. Консультация по условиям получения
                </div>

                <ul class="list--disc">
                  <li>Подбор аппарата под параметры программы</li>
                  <li>Подготовка документов и написание бизнес-плана</li>
                  <li>Подача заявки</li>
                  <li>Сопровождение до получения выплаты</li>
                  <li>Контроль покупки и отчётность</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="section-item training">
            <div class="item-header text-nav text-sub">{ Обучение }</div>
            <div class="item-body">
              <div class="item-title text-h3">Бесплатное обучение</div>
              <div class="item-text">
                При покупке аппарата Legacy предоставляется бесплатное обучение
                в нашем обучающем центре, онлайн и офлайн. Выдаётся диплом гос.
                образца или именной сертификат
              </div>
            </div>
          </div>

          <div class="section-item section-item--img image-2">
            <img src="@/assets/img/benefits_2.jpg" alt="" />
          </div>

          <div class="section-item production">
            <div class="item-header text-nav text-sub">{ Производство }</div>
            <div class="item-body">
              <div class="item-title text-h3">Собственное производство</div>
              <div class="item-text">
                Аппараты Legacy проходят строгий контроль качества на каждом
                этапе производства. Оборудование имеет официальные сертификаты
                качества и соответствует международным стандартам
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="distributors" class="wrapper section distributors">
      <div class="contained">
        <div class="section__lead section-lead">
          <div class="section-lead__header text-nav text-sub">
            <span class="section-lead__index">4.0</span>
            <div class="section-lead__text">
              <span class="section-lead__title">{ Для дистрибьюторов }</span>
              <span class="section-lead__subtitle">Legacy</span>
            </div>
          </div>

          <h2 class="section-lead__body text-h2">
            Сотрудничество, которое <br />работает
          </h2>
        </div>

        <div class="section__body">
          <q-expansion-item
            expand-icon="add"
            expanded-icon="remove"
            expand-icon-class="text-white"
            class="accordeon"
          >
            <template #header>
              <div class="accordeon-label text-h3">Оптовые скидки</div>
            </template>

            <p class="accordeon-body text-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam temporibus minus commodi atque fugit modi dolores
              delectus possimus eveniet nam, sunt incidunt et facere accusamus
              odio illo. Recusandae, atque nostrum.
            </p>
          </q-expansion-item>

          <q-expansion-item
            expand-icon="add"
            expanded-icon="remove"
            expand-icon-class="text-white"
            label="Условия сотрудничества"
            class="accordeon"
          >
            <template #header>
              <div class="accordeon-label text-h3">Условия сотрудничества</div>
            </template>

            <div class="accordeon-body text-body">
              <div class="right">
                <p class="q-mb-md">
                  Эксклюзивные цены и специальные условия закупки для
                  официальных дистрибьюторов.
                </p>
                <p>
                  Пожизненная гарантия на все аппараты для клиентов через
                  партнёров.
                </p>
                <p>
                  Индивидуальная поддержка и консультации на каждом этапе
                  сотрудничества.
                </p>
                <p>
                  Обучение работе с оборудованием и маркетинговой стратегией
                  продаж, чтобы вы могли эффективно развивать свой бизнес.
                </p>
                <p>
                  Приоритетный доступ к новинкам линейки Legacy и новым
                  технологиям.
                </p>
              </div>

              <div class="left">
                <p>
                  Полный набор маркетинговых инструментов: готовые инструкции,
                  фото, видео и пошаговые планы продвижения для быстрого старта
                  и успешных продаж.
                </p>
                <p>
                  Совместные акции и промо-материалы, которые повышают
                  узнаваемость бренда и привлекают новых покупателей.
                </p>
              </div>
            </div>
          </q-expansion-item>

          <q-expansion-item
            expand-icon="add"
            expanded-icon="remove"
            expand-icon-class="text-white"
            label="Бонусные программы"
            class="accordeon"
          >
            <template #header>
              <div class="accordeon-label text-h3">Бонусные программы</div>
            </template>
            <p class="accordeon-body text-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam temporibus minus commodi atque fugit modi dolores
              delectus possimus eveniet nam, sunt incidunt et facere accusamus
              odio illo. Recusandae, atque nostrum.
            </p>
          </q-expansion-item>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { inject } from "vue";

import AppDots from "@/components/AppDots.vue";
import AppProductCard from "@/components/AppProductCard.vue";

const data = inject("data");
</script>

<style lang="scss" scoped>
.section.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 0px;

  .section__bottom {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 760px;

    @media (max-width: $breakpoint-sm) {
      align-items: center;
    }

    .section__body {
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
  .section__body {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 64px;

    @media (max-width: $breakpoint-sm) {
      grid-template-columns: 1fr;
    }
  }

  .catalog__card {
    height: 600px;

    @media (max-width: $breakpoint-lg) {
      height: 540px;
    }
  }
}

.section.benefits .section-item {
  @media (max-width: $breakpoint-md) {
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
}

.section.distributors {
  background-color: $dark;
  color: $base;

  .section__lead section-lead {
    margin-bottom: 40px;
  }

  .section-lead__header {
    border-color: $base-semi;
  }

  .section-lead__body {
    width: 100%;
  }

  .accordeon {
    border-bottom: 1px solid $base-semi;

    :deep(.q-focus-helper) {
      display: none;
    }

    :deep(.q-item) {
      padding: 0;
    }
  }

  .accordeon-label {
    width: 100%;
    font-family: var(--font-secondary);
    font-weight: 400;
    letter-spacing: 0px;
    color: $base;
    padding: 24px 32px;
  }

  .accordeon-body {
    display: flex;
    padding: 24px 32px;
    gap: 32px;

    @media (max-width: $breakpoint-sm) {
      flex-direction: column;
    }

    > div {
      flex: 1 0 0;
    }
  }
}
</style>
