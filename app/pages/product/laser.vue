<template>
  <div class="page page--product">
    <h1 class="sr-only">Legacy Laser — описание аппарата</h1>

    <section class="flex-center section hero">
      <div class="section__background section__background--overlay">
        <NuxtImg
          format="webp, avif"
          src="/img/laser/laser_hero.png"
          alt="Legacy Laser"
          class="section__background-image"
          width="1920"
        />
      </div>

      <div class="section__content contained">
        <p class="category text-nav text-sub">
          { Многофункциональный аппарат }
        </p>
        <h1 class="title text-h1">Legacy Laser</h1>
        <p class="description">
          для эпиляци
          <br />
        </p>
        <p class="price text-h2">645 000 ₽</p>
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
              <span class="lead__subtitle">Legacy Laser</span>
            </div>
          </div>

          <div class="lead__body text-h2">
            Legacy Laser — это высокотехнологичный аппарат, преобразующий
            электрическую энергию в непрерывный высокоэнергетический лазерный
            луч. В основе работы сочетаются лазерные, электронные и компьютерные
            технологии, что делает аппарат одним из наиболее безопасных и
            быстрых решений для эпиляции на сегодняшний день.
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
              <!--h3 class="feature__title text-h3">Технология HIEMT</h3-->
              <div class="feature__text">
                Эффект достигается за счёт поглощения меланином в волосяных
                фолликулах лазерной энергии, что приводит к их разрушению, при
                этом:
                <ul class="list--disc">
                  <li>окружающие ткани не повреждаются;</li>
                  <li>
                    удаление нежелательных волос проходит практически
                    безболезненно;
                  </li>
                  <li>
                    удаление нежелательных волос проходит практически
                    безболезненно;
                  </li>
                </ul>
              </div>
              <!--h3 class="feature__title text-h3">Технология ENDO</h3-->
              <div class="feature__text">
                Многоуровневая система безопасности с функцией самодиагностики.
                Сенсорный дисплей 15,6" с интуитивным интерфейсом.
                <br />
                Возможность работы с тремя длинами волн: 755 нм, 808 нм, 1064
                нм.
                <br />
                Встроенная система водяного и компрессорного охлаждения (до
                -25°C).
                <br />
                Высокая мощность до 3000 Вт для быстрой обработки больших зон.
                <br />
                Плавная регулировка параметров процедуры под индивидуальные
                особенности клиента.
                <br />
                Аварийная кнопка мгновенной остановки работы.
                <br />
                Конструкция, обеспечивающая долгую непрерывную работу без
                перегрева.
              </div>
              <h3 class="feature__title text-h3">Принцип работы</h3>
              <div class="feature__text">
                Аппарат Legacy Laser работает на основе технологии селективного
                фототермолиза — лазерный луч с длиной волны 755 нм, 808 нм или
                1064 нм направленно воздействует на меланин, содержащийся в
                волосяных фолликулах. Поглощая лазерную энергию, меланин
                превращает её в тепловую, что приводит к разрушению фолликула и
                предотвращает дальнейший рост волос. Благодаря высокой точности
                настройки параметров (мощность, длительность импульса, размер
                пятна и частота) достигается максимальная эффективность при
                минимальном воздействии на окружающие ткани. Встроенная система
                охлаждения защищает кожу от перегрева, что снижает болевые
                ощущения и риск побочных эффектов.
              </div>
            </div>

            <div class="grid-item grid-item--vid">
              <div class="video-container">
                <video
                  muted
                  autoplay
                  loop
                  class="grid-item__video grid-item__video--default"
                  preload="metadata"
                  aria-label="Заставка Legacy"
                  src="/video/product_default.MP4"
                  type="video/mp4"
                >
                  <!-- <NuxtImg
                    src="/img/royal/royal_vid_fallback.png"
                    alt="Legacy Royal — 360° обзор (изображение вместо видео)"
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
              <span class="lead__subtitle">Legacy Laser</span>
            </div>
          </div>
        </div>

        <div class="section__content">
          <div class="section__grid grid">
            <div class="grid-item grid-item--text order-1">
              <div class="grid-item__header text-nav text-sub">{ 01 }</div>
              <div class="grid-item__body">
                <div class="griditem__title text-h3">
                  Максимальная эффективность
                </div>
                <div class="grid-item__text">
                  высокая плотность энергии для быстрого результата.
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-2">
              <NuxtImg
                format="webp, avif"
                src="/img/laser/laser_1.png"
                alt="Аппарат Laser Laser"
                class="grid-item__img"
                loading="lazy"
                style="object-fit: cover; object-position: center top"
              />
            </div>

            <div class="grid-item grid-item--text order-3">
              <div class="grid-item__header text-nav text-sub">{ 02 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Универсальность</div>
                <div class="grid-item__text">
                  подходит для всех фототипов кожи и типов волос.
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-4">
              <NuxtImg
                format="webp, avif"
                src="/img/laser/laser_2.png"
                alt="Аппарат Laser Laser"
                class="grid-item__img"
                loading="lazy"
                style="object-fit: cover"
              />
            </div>

            <div class="grid-item grid-item--text order-5">
              <div class="grid-item__header text-nav text-sub">{ 03 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Комфорт клиента</div>
                <div class="grid-item__text">
                  встроенное охлаждение снижает болевые ощущения.
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-6">
              <NuxtImg
                format="webp, avif"
                src="/img/laser/laser_3.png"
                alt="Аппарат Laser Legacy"
                class="grid-item__img"
                loading="lazy"
                style="object-fit: contain; transform: scale(0.9)"
              />
            </div>

            <div class="grid-item grid-item--text order-7">
              <div class="grid-item__header text-nav text-sub">{ 04 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Долговечность</div>
                <div class="grid-item__text">
                  рассчитан на интенсивную профессиональную эксплуатацию.
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-8">
              <NuxtImg
                format="webp, avif"
                src="/img/laser/laser_5.png"
                alt="Аппарат Laser Legacy"
                class="grid-item__img"
                loading="lazy"
                style="object-fit: cover"
              />
            </div>

            <div class="grid-item grid-item--text order-9">
              <div class="grid-item__header text-nav text-sub">{ 05 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Экономичность</div>
                <div class="grid-item__text">
                  долговечный ресурс ручки – до 50 000 импульсов.
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
              <span class="lead__subtitle">Legacy Laser</span>
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
                    <span>Защитные очки</span>
                    <span class="quantity"> 1 шт</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Маска для глаз</span>
                    <span class="quantity"> 1 шт</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Комплект рукоятки 808 нм</span>
                    <span class="quantity"> 1 набор</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Воронка с водяным шлангом </span>
                    <span class="quantity"> 1 шт</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Педаль управления</span>
                    <span class="quantity"> 1 шт</span>
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
                  <td>Питание</td>
                  <td>200–260 В / 50–60 Гц– 90–130 В / 50–60 Гц</td>
                </tr>

                <tr>
                  <td>Мощность устройства</td>
                  <td>до 3000 Вт</td>
                </tr>

                <tr>
                  <td>Плотность энергии</td>
                  <td>
                    – 600 Вт: 1–62 Дж/см²
                    <br />
                    – 800 Вт: 1–81 Дж/см²
                    <br />
                    – 1000 Вт: 1–75 Дж/см²
                    <br />
                    – 1200 Вт: 1–92 Дж/см²
                    <br />
                    – 1800 Вт: 1–156 Дж/см²
                  </td>
                </tr>

                <tr>
                  <td>Длительность импульса</td>
                  <td>до 2300 об/мин (RPM)</td>
                </tr>

                <tr>
                  <td>Размер пятна</td>
                  <td>13×13 мм, 13×24 мм, 13×28 мм, Ø6 мм.</td>
                </tr>

                <tr>
                  <td>Размер экрана</td>
                  <td>15,6 дюйма (сенсорный LCD)</td>
                </tr>

                <tr>
                  <td>Система охлаждения</td>
                  <td>до –25°C (водяное + компрессор постоянного тока)</td>
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
        object-fit: cover;
        object-position: center 10px;
      }
    }
  }
}
</style>
