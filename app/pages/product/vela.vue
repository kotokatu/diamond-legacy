<template>
  <div class="page page--product">
    <h1 class="sr-only">Legacy Vela — описание аппарата</h1>

    <section class="flex-center section hero">
      <div class="section__background section__background--overlay">
        <NuxtImg
          format="webp, avif"
          src="/img/vela/vela_hero.png"
          alt="Legacy Vela"
          class="section__background-image"
          width="1920"
        />
      </div>

      <div class="section__content contained">
        <p class="category text-nav text-sub">
          { Многофункциональный аппарат }
        </p>
        <h1 class="title text-h1">Legacy Vela</h1>
        <p class="description">
          для лифтинга кожи, коррекции контуров тела,
          <br />
          лимфодренажа и борьбы с целлюлитом.
        </p>
        <p class="price text-h2">435 000 ₽</p>
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
              <span class="lead__subtitle">Legacy Vela</span>
            </div>
          </div>

          <div class="lead__body text-h2">
            Legacy Vela — многофункциональное оборудование предназначено для
            лифтинга кожи, коррекции контуров тела, лимфодренажа и борьбы с
            целлюлитом. Инновационный 2-в-1 аппарат нового поколения, сочетающий
            технологии ENDO и VLASHAPE.
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

              <h3 class="feature__title text-h3">Технологии ENDO и VLASHAPE</h3>
              <div class="feature__text">
                Аппарат сочетает в себе глубокий микробаллонный массаж сжатия
                (ENDO) и тепловое воздействие инфракрасных волн и радиочастоты
                (VLASHAPE), обеспечивая выраженный эффект подтяжки, упругости и
                омоложения кожи уже после первых процедур.
              </div>
              <h3 class="feature__title text-h3">Технология ENDO</h3>
              <div class="feature__text">
                Компрессионная микровибрация воздействует на поверхностные и
                глубокие ткани:
                <br />
                – усиливает кровообращение
                <br />
                – активизирует лимфоотток
                <br />
                – способствует выведению лишней жидкости
                <br />
                – улучшает тонус кожи и уменьшает проявления целлюлита
                <br />
                – запускает процессы регенерации и омоложения
              </div>
              <!--
              <h3 class="feature__title text-h3">
                Аппарат оснащён тремя манипулами ENDO
              </h3>
              <div class="feature__text">
                В комплект входят:
                <ul class="list--disc">
                  <li>малая манипула — для лица</li>
                  <li>средняя манипула — для мелких участков тела</li>
                  <li>большая манипула — для больших зон тела</li>
                </ul>
                Три манипулы позволяют проводить комплексную работу на всех
                зонах тела и лица, обеспечивая индивидуальный подход к каждой
                области и максимальную эффективность процедур.
              </div>
            -->
              <h3 class="feature__title text-h3">Технология VLASHAPE</h3>
              <div class="feature__text">
                <ul class="list--disc">
                  <li>
                    Сочетает инфракрасный свет (IR), радиочастотные волны (RF) и
                    вакуумное всасывание, что позволяет эффективно подтягивать
                    кожу, уменьшать жировые отложения и формировать контуры
                    тела.
                  </li>
                  <li>
                    Инфракрасный свет (IR) создаёт тепловой эффект, ускоряя
                    кровообращение, стимулирует обменные процессы и расщепление
                    жиров.
                  </li>
                  <li>
                    Радиочастотные волны (RF) прогревают глубокие слои кожи,
                    стимулируют ремоделирование коллагена и повышают упругость,
                    уменьшая дряблость кожи.
                  </li>
                  <li>
                    Вакуумное всасывание усиливает доставку тепловой энергии и
                    лимфодренаж, способствуя коррекции контуров тела и
                    уменьшению отечности.
                  </li>
                </ul>
              </div>
              <h3 class="feature__title text-h3">
                Интеллектуальный пользовательский интерфейс
              </h3>
              <div class="feature__text">
                Благодаря эргономичной конструкции, большому сенсорному экрану и
                трем видам силиконовых роликов, LEGACY VELA обеспечивает
                безопасное, комфортное и результативное проведение процедур как
                по телу, так и по лицу.
              </div>
            </div>

            <div class="grid-item grid-item--vid">
              <div class="video-container">
                <video
                  muted
                  autoplay
                  loop
                  class="grid-item__video"
                  preload="metadata"
                  aria-label="360° обзор аппарата Legacy Vela"
                  src="/video/vela/vela_360.webm"
                  type="video/webm"
                >
                  <!-- <NuxtImg
                    src="/img/Vela/Vela_vid_fallback.png"
                    alt="Legacy Vela — 360° обзор (изображение вместо видео)"
                    loading="lazy"
                  />
                  Ваш браузер не поддерживает встроенное видео. Пожалуйста,
                  обновите браузер или скачайте видео. -->
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
              <span class="lead__subtitle">Legacy Vela</span>
            </div>
          </div>
        </div>

        <div class="section__content">
          <div class="section__grid grid">
            <div class="grid-item grid-item--text order-1">
              <div class="grid-item__header text-nav text-sub">{ 01 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">
                  Манипула Legacy 360 InnerSphere Roller
                </div>
                <div class="grid-item__text">
                  обеспечивает глубокое и точное воздействие на кожу и ткани.
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-2">
              <NuxtImg
                format="webp, avif"
                src="/img/vela/vela_1.png"
                alt="Аппарат Vela Vela"
                class="grid-item__img"
                loading="lazy"
                style="object-fit: cover; object-position: center top"
              />
            </div>

            <div class="grid-item grid-item--text order-3">
              <div class="grid-item__header text-nav text-sub">{ 02 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Технология VLASHAPE</div>
                <div class="grid-item__text">
                  сочетает инфракрасный свет, радиочастотные волны и вакуумное
                  всасывание для подтяжки кожи и коррекции контуров тела.
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-4">
              <NuxtImg
                format="webp, avif"
                src="/img/vela/vela_2.png"
                alt="Аппарат Vela Vela"
                class="grid-item__img"
                loading="lazy"
                style="object-fit: cover"
              />
            </div>

            <div class="grid-item grid-item--text order-5">
              <div class="grid-item__header text-nav text-sub">{ 03 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">
                  Комбинированное действие ENDO + VLASHAPE
                </div>
                <div class="grid-item__text">
                  позволяет уменьшать локальные жировые отложения и повышать
                  тонус кожи.
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-6">
              <NuxtImg
                format="webp, avif"
                src="/img/vela/vela_4.png"
                alt="Аппарат Vela Legacy"
                class="grid-item__img"
                loading="lazy"
                style="object-fit: cover; object-position: center 75%"
              />
            </div>

            <div class="grid-item grid-item--text order-7">
              <div class="grid-item__header text-nav text-sub">{ 04 }</div>
              <div class="grid-item__body">
                <!--div class="grid-item__title text-h3">
                  Регулируемая скорость вращения роликов до 2300 об/мин
                </div-->
                <div class="grid-item__text">
                  Подходит для всех типов кожи и любых зон тела, включая лицо,
                  шею, руки и крупные зоны тела. Процедура комфортная,
                  безболезненная и не требует реабилитации.
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-8">
              <NuxtImg
                format="webp, avif"
                src="/img/vela/vela_3.png"
                alt="Аппарат Vela Legacy"
                class="grid-item__img"
                loading="lazy"
                style="object-fit: cover"
              />
            </div>

            <div class="grid-item grid-item--text order-9">
              <div class="grid-item__header text-nav text-sub">{ 05 }</div>
              <div class="grid-item__body">
                <!--div class="grid-item__title text-h3">
                  Компрессионная микровибрация с равномерным пульсирующим
                  давлением, безопасная для кожи и тканей
                </div-->
                <div class="grid-item__text">
                  Сенсорный экран 15,6" с удобным управлением режимами,
                  скоростью и интенсивностью процедур. Надёжная система
                  охлаждения и защиты обеспечивает стабильную работу аппарата.
                </div>
              </div>
            </div>
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
              <span class="lead__subtitle">Legacy Vela</span>
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
                    <span>Манипула ENDO</span>
                    <span class="quantity"> 1 шт</span>
                  </td>
                  <td>12 месяцев</td>
                </tr>
                <tr>
                  <td>
                    <span>Манипула VLA</span>
                    <span class="quantity"> 1 шт</span>
                  </td>
                  <td>12 месяцев</td>
                </tr>
                <tr>
                  <td>
                    <span>Замена шариков для обеих манипул</span>
                    <span class="quantity"> 1 компллект</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Набор инструментов для подключения</span>
                    <span class="quantity"> 1 компллект</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Силовой кабель</span>
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
                  <td>Входная мощность</td>
                  <td>110–220 В / 50–60 Гц</td>
                </tr>

                <tr>
                  <td>Выходная мощность</td>
                  <td>1000 Вт</td>
                </tr>

                <tr>
                  <td>Скорость вращения</td>
                  <td>до 2300 об/мин (RPM)</td>
                </tr>

                <tr>
                  <td>Диапазон вакуумного давления</td>
                  <td>10–80 KPa</td>
                </tr>

                <tr>
                  <td>Мощность RF</td>
                  <td>20–300 W</td>
                </tr>

                <tr>
                  <td>Размер экрана</td>
                  <td>15,6 дюйма (сенсорный LCD)</td>
                </tr>

                <tr>
                  <td>Размер аппарата</td>
                  <td>41 × 50 × 108 см</td>
                </tr>

                <tr>
                  <td>Вес (нетто)</td>
                  <td>45 кг</td>
                </tr>

                <tr>
                  <td>Размер упаковки</td>
                  <td>55 × 65 × 116 см</td>
                </tr>

                <tr>
                  <td>Вес (брутто)</td>
                  <td>72 кг</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.section.hero {
  .section__background {
    .section__background-image {
      object-fit: cover;
      object-position: center 25%;

      @media (width < $breakpoint-sm) {
        object-position: center 10px;
      }
    }
  }
}
</style>
