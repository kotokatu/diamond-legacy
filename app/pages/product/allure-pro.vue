<template>
  <div class="page page--product">
    <h1 class="sr-only">Legacy Allure Pro — описание аппарата</h1>

    <section class="flex-center section hero">
      <div class="section__background section__background--overlay">
        <NuxtImg
          format="webp, avif"
          src="/img/allure-pro/allure-pro_hero.png"
          alt="Аппарат Legacy Allure Pro"
          class="section__background-image"
          sizes="640px sm:1280px"
          fetchpriority="high"
        />
      </div>

      <div class="section__content contained">
        <p class="category text-nav text-sub">
          { Многофункциональный аппарат }
        </p>
        <h1 class="title text-h1">Legacy Allure Pro</h1>
        <p class="description">
          Для омоложения кожи,включает микронидлинг, крио- и
          <br />термотерапию, вакуумную терапию.
        </p>
        <p class="price text-h2">465 000 ₽</p>
      </div>
    </section>

    <section
      class="flex-center section description"
      role="region"
      aria-labelledby="lead-title"
    >
      <div class="contained">
        <div class="lead">
          <div class="lead__header text-nav text-sub">
            <span class="lead__index">1.0</span>
            <div class="lead__text">
              <span id="lead-title" class="lead__title">{ Описание }</span>
              <span class="lead__subtitle">Legacy Allure Pro</span>
            </div>
          </div>

          <div class="lead__body text-h2">
            Legacy Allure Pro — Фракционный RF микроигольчатый аппарат Аппарат
            Legacy Allure сочетает преимущества микроигольчатой терапии с
            радиочастотной энергией (RF).
          </div>
        </div>

        <div class="section__content">
          <div class="section__grid grid">
            <div
              class="grid-item grid-item--text features"
              role="region"
              aria-labelledby="features-title"
            >
              <h2 class="features__title text-h2">Особенности</h2>
              <!--
              <h3 class="feature__title text-h3">
                Технология компрессионной микровибрации
              </h3>
              -->
              <div class="feature__text">
                Он предлагает регулируемую глубину игл от 0,2 мм до 7 мм для
                точного воздействия на эпидермис и дерму. Стимулируя выработку
                коллагена и эластина, аппарат эффективно улучшает состояние
                рубцов, подтягивает кожу и уменьшает морщины безопасным и
                эффективным способом. Это неинвазивное решение для различных
                кожных проблем, делая его идеальным выбором для улучшения
                текстуры, упругости и эластичности кожи.
              </div>

              <div class="feature__text">
                <ul class="list--disc">
                  <li>Тип игл: биполярный</li>
                  <li>Область применения: лечение всего тела</li>
                </ul>
              </div>
              <!--
              <h3 class="feature__title text-h3">
                Интеллектуальная цилиндрическая роликовая ручка
              </h3>
              -->
              <div class="feature__text">
                Аппарат оснащён сенсорным дисплеем, различными насадками и
                рукоятками, системой активации через QR-коды и возможностью
                работы в ручном и автоматическом режимах.
              </div>
              <!--
              <h3 class="feature__title text-h3">Насадки для разных зон</h3>
              <div class="feature__text">
                В комплект входят:
                <ul class="list--disc">
                  <li>большая манипула (50 шариков) — для работы по телу</li>
                  <li>малая манипула (60 шариков) — для лица и шеи</li>
                </ul>
                Это делает аппарат универсальным решением для комплексного ухода
                за всем телом.
              </div>
              <h3 class="feature__title text-h3">
                Безопасность и неинвазивность
              </h3>
              <div class="feature__text">
                Процедура не требует периода восстановления и подходит для
                клиентов с различной чувствительностью кожи. Метод полностью
                неинвазивен, исключает повреждение тканей и может использоваться
                как в терапевтических, так и в профилактических целях.
              </div>
              <h3 class="feature__title text-h3">Применение</h3>
              <div class="feature__text">
                Аппарат рекомендуется для:
                <ul class="list--disc">
                  <li>моделирования контуров тела</li>
                  <li>коррекции целлюлита</li>
                  <li>лифтинга кожи лица и тела</li>
                  <li>улучшения лимфо- и кровообращения</li>
                  <li>общего оздоровления тканей</li>
                </ul>
              </div>
              -->
            </div>

            <div class="grid-item grid-item--vid">
              <div class="video-container">
                <video
                  muted
                  autoplay
                  playsinline
                  loop
                  class="grid-item__video grid-item__video--default"
                  preload="metadata"
                  aria-label="Заставка Legacy"
                  src="/video/product_default.mp4"
                  type="video/mp4"
                  :poster="defaultVidFallback"
                >
                  <img
                    :src="defaultVidFallback"
                    alt="Заставка Legacy Allure Pro"
                    loading="lazy"
                  />
                  Ваш браузер не поддерживает встроенное видео. Пожалуйста,
                  обновите браузер или скачайте видео.
                </video>
              </div>
            </div>
          </div>

          <div
            class="section__contact"
            role="region"
            aria-label="Форма обратной связи"
          >
            <AppContactCard
              class="contact-card--bg"
              aria-label="Форма обратной связи для запроса"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section flex-center benefits">
      <div class="contained">
        <div class="lead">
          <div class="lead__header text-nav text-sub">
            <span class="lead__index">2.0</span>
            <div class="lead__text">
              <span class="lead__title">{ Преимущества }</span>
              <span class="lead__subtitle">Legacy Allure Pro</span>
            </div>
          </div>
        </div>

        <div class="section__content">
          <div class="section__grid grid">
            <div class="grid-item grid-item--text order-1">
              <div class="grid-item__header text-nav text-sub">{ 01 }</div>
              <div class="grid-item__body">
                <!--
                <div class="grid-item__title text-h3">
                  Формирует контуры тела
                </div>
                -->
                <div class="grid-item__text">
                  Многофункциональность: включает микронидлинг, крио- и
                  термотерапию, вакуумную терапию. Универсальность насадок: WZ,
                  NV, IC, IS и HR насадки для разных зон и типов процедур.
                  Регулируемые параметры: глубина вылета игл, мощность (1–47
                  Вт), время воздействия (50–600 мс), уровень вакуума.
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-2">
              <NuxtImg
                format="webp, avif"
                src="/img/allure-pro/allure-pro_1.png"
                alt="Аппарат Legacy Allure Pro"
                class="grid-item__img"
                loading="lazy"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
              />
            </div>

            <div class="grid-item grid-item--text order-3">
              <div class="grid-item__header text-nav text-sub">{ 02 }</div>
              <div class="grid-item__body">
                <!--
                <div class="grid-item__title text-h3">
                  Сглаживает проявления целлюлита
                </div>
                -->
                <div class="grid-item__text">
                  Режимы работы: ручной и автоматический, позволяющие
                  контролировать интенсивность и последовательность процедуры.
                  Высокая безопасность: каждая насадка предназначена для одного
                  клиента, минимизация риска перекрёстного заражения.
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-4">
              <NuxtImg
                format="webp, avif"
                src="/img/allure-pro/allure-pro_2.png"
                alt="Аппарат Legacy Allure Pro"
                class="grid-item__img"
                loading="lazy"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
              />
            </div>

            <div class="grid-item grid-item--text order-5">
              <div class="grid-item__header text-nav text-sub">{ 03 }</div>
              <div class="grid-item__body">
                <!--
                <div class="grid-item__title text-h3">
                  Снимает ощущение тяжести в ногах
                </div>
                -->
                <div class="grid-item__text">
                  <b>Простота эксплуатации:</b> сенсорный дисплей и QR-коды для
                  активации насадок.
                  <br />
                  <b>Эффективность:</b> процедуры дают видимый эффект уже через
                  несколько дней; для максимального результата рекомендуется
                  курс 2–3 сеанса с интервалом около месяца.
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-6">
              <NuxtImg
                format="webp, avif"
                src="/img/allure-pro/allure-pro_3.png"
                alt="Аппарат Legacy Allure Pro"
                class="grid-item__img"
                loading="lazy"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
              />
            </div>
            <!--
            <div class="grid-item grid-item--text order-7">
              <div class="grid-item__header text-nav text-sub">{ 04 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Тонизирует кожу</div>
                <div class="grid-item__text">
                  Стимулирует клеточный метаболизм и укрепляет кожные покровы.
                  Особенно эффективна при потере упругости кожи после похудения
                  или возрастных изменений.
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-8">
              <NuxtImg
                format="webp, avif"
                src="/img/allure-pro/allure-pro_4.png"
                alt="Аппарат Allure Pro Legacy"
                class="grid-item__img"
                loading="lazy"
                style="object-fit: cover"
              />
            </div>

            <div class="grid-item grid-item--text order-9">
              <div class="grid-item__header text-nav text-sub">{ 05 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">
                  Манипула для лица и шеи
                </div>
                <div class="grid-item__text">
                  Манипула для лица и шеи позволяет мягко прорабатывать
                  деликатные зоны, повышая упругость и устраняя признаки
                  возрастных изменений.
                </div>
              </div>
            </div>
            -->
          </div>
        </div>
      </div>
    </section>

    <section class="section flex-center specification">
      <div class="contained">
        <div class="lead">
          <div class="lead__header text-nav text-sub">
            <span class="lead__index">3.0</span>
            <div class="lead__text">
              <span class="lead__title">{ Комплектация и характеристики }</span>
              <span class="lead__subtitle">Legacy Allure Pro</span>
            </div>
          </div>
        </div>

        <div class="section__content">
          <div class="section-block">
            <h3 class="section-block__title text-h3">Комплектация</h3>
            <table class="section__table table table--specification">
              <thead>
                <tr>
                  <th class="text-min">Наименование</th>
                  <th class="text-min">Гарантия</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>Основной блок</span>
                    <span class="quantity"> 1 шт</span>
                  </td>
                  <td>Бессрочная</td>
                </tr>
                <tr>
                  <td>
                    <span>Ручка WZ</span>
                    <span class="quantity"> 1 шт</span>
                  </td>
                  <td>12 месяцев</td>
                </tr>
                <tr>
                  <td>
                    <span>Насадки NV36, NV49, NV64, NV9</span>
                    <span class="quantity"> по 1 шт</span>
                  </td>
                  <td>12 месяцев</td>
                </tr>
                <tr>
                  <td>
                    <span>Насадки IC12, IC24, IC40</span>
                    <span class="quantity"> по 1 шт</span>
                  </td>
                  <td>12 месяцев</td>
                </tr>
                <tr>
                  <td>
                    <span>Насадки IS5, IS25, IS49</span>
                    <span class="quantity"> по 1 шт</span>
                  </td>
                  <td>12 месяцев</td>
                </tr>
                <tr>
                  <td>
                    <span>Насадки HR1, HR2, HR3 </span>
                    <span class="quantity"> по 1 шт</span>
                  </td>
                  <td>12 месяцев</td>
                </tr>
                <tr>
                  <td>
                    <span>Педаль включения/выключения</span>
                    <span class="quantity"> 1 шт</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Кабель питания</span>
                    <span class="quantity"> 1 шт</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="section-block">
            <h3 class="section-block__title font-secondary text-h3">
              Технические характеристики
            </h3>
            <table class="section__table table table--characteristics">
              <thead>
                <tr>
                  <th class="text-min">Характеристика</th>
                  <th class="text-min">Значение</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Напряжение питания</td>
                  <td>AC 100–240 В, 50/60 Гц</td>
                </tr>

                <tr>
                  <td>Потребляемая мощность</td>
                  <td>≤115 ВА</td>
                </tr>

                <tr>
                  <td>Плавкий предохранитель</td>
                  <td>FL5X20\3.15A</td>
                </tr>

                <tr>
                  <td>
                    Срок службы насадок (холодные, тепловые, микропроцессорные
                    термонасадки)
                  </td>
                  <td>500 часов</td>
                </tr>

                <tr>
                  <td>Управление</td>
                  <td>сенсорный дисплей, QR-коды для активации насадок</td>
                </tr>

                <tr>
                  <td>Параметры процедур</td>
                  <td>
                    глубина игл 0,5–4,5 мм, мощность 1–47 Вт, время импульса
                    50–600 мс, температура крио -5°C–20°C, термо 37°C–55°C
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const img = useImage();
const defaultVidFallback = img("/img/default_vid_fallback.png", {
  format: "webp, avif",
  quality: 80,
});

useHead({
  title:
    "Аппарат для омоложения кожи Legacy Allure Pro с функцией RF микроигольчатого воздействия",
  meta: [
    {
      name: "description",
      content:
        "Фракционный RF-аппарат для омоложения кожи, включающий функции микронидлинга, крио- и термотерапии, а также вакуумной терапии. Работает в ручном и автоматическом режимах, обеспечивая точное и контролируемое воздействие на разные уровни кожи, улучшая её тонус, плотность и текстуру.",
    },
  ],
});
</script>

<style lang="scss" scoped>
.section.hero {
  .section__background {
    .section__background-image {
      object-fit: none;
      object-position: center 40px;

      @media (width < $breakpoint-sm) {
        object-fit: cover;
      }
    }
  }
}
</style>
