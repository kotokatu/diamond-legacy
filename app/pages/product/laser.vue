<template>
  <div class="page page--product">
    <h1 class="sr-only">Legacy Laser — описание аппарата</h1>

    <section class="flex-center section hero">
      <div class="section__background section__background--overlay">
        <NuxtImg
          format="webp, avif"
          src="/img/laser/laser_hero.png"
          alt="Аппарат Legacy Laser"
          class="section__background-image"
          sizes="640px sm:1280px"
          fetchpriority="high"
        />
      </div>

      <div class="section__content contained">
        <p class="category text-nav text-sub">
          { Многофункциональный аппарат }
        </p>
        <h2 class="title text-h1">Legacy Laser</h2>
        <h1 class="description">
          Аппарат для лазерной эпиляции
          <br />
        </h1>
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
                    alt="Заставка Legacy"
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
              <span class="lead__subtitle">Legacy Laser</span>
            </div>
          </div>
        </div>

        <div class="section__content">
          <div class="section__grid grid">
            <div class="grid-item grid-item--text order-1">
              <div class="grid-item__header text-nav text-sub">{ 01 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">
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
                alt="Аппарат Legacy Laser"
                class="grid-item__img"
                loading="lazy"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
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
                alt="Аппарат Legacy Laser"
                class="grid-item__img"
                loading="lazy"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
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
                alt="Аппарат Legacy Laser"
                class="grid-item__img"
                loading="lazy"
                style="object-fit: contain"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
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
                src="/img/laser/laser_4.png"
                alt="Аппарат Legacy Laser"
                class="grid-item__img"
                loading="lazy"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
              />
            </div>

            <div class="grid-item grid-item--text order-9">
              <div class="grid-item__header text-nav text-sub">{ 05 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Экономичность</div>
                <div class="grid-item__text">
                  долговечный ресурс ручки – до 100 000 000 импульсов.
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
                  <td>Тип лазера</td>
                  <td>диодный</td>
                </tr>

                <tr>
                  <td>Длина волны</td>
                  <td>808 нм</td>
                </tr>

                <tr>
                  <td>Мощность устройства</td>
                  <td>до 3000 Вт</td>
                </tr>

                <tr>
                  <td>Мощность манипулы</td>
                  <td>1200 Вт</td>
                </tr>

                <tr>
                  <td>Энергия импульса</td>
                  <td>до 120 Дж/см²</td>
                </tr>

                <tr>
                  <td>Длительность импульса</td>
                  <td>до 200 мс</td>
                </tr>

                <tr>
                  <td>Частота импульсов</td>
                  <td>1–10 Гц</td>
                </tr>

                <tr>
                  <td>Размер пятна</td>
                  <td>12×12 мм, 13×13 мм, 13×24 мм, 13×28 мм, Ø6 мм</td>
                </tr>

                <tr>
                  <td>Температура сапфирового наконечника</td>
                  <td>регулируемая, до –25 °C</td>
                </tr>

                <tr>
                  <td>Система охлаждения</td>
                  <td>
                    до –25°C (водяное + фреоновое охлаждение, компрессор
                    постоянного тока)
                  </td>
                </tr>

                <tr>
                  <td>Ресурс лампы</td>
                  <td>100 000 000 импульсов</td>
                </tr>
                <tr>
                  <td>Операционная система</td>
                  <td>Android</td>
                </tr>

                <tr>
                  <td>Дисплей</td>
                  <td>сенсорный, цветной, 15,6"</td>
                </tr>

                <tr>
                  <td>Уровень шума</td>
                  <td>≤ 50 дБ</td>
                </tr>

                <tr>
                  <td>Питание</td>
                  <td>AC 220 V ±10%, 50 Hz</td>
                </tr>

                <tr>
                  <td>Габариты</td>
                  <td>45×58×115 см</td>
                </tr>

                <tr>
                  <td>Вес</td>
                  <td>55 кг</td>
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
    "Аппарат для лазерной эпиляции волос — профессиональное оборудование, цена",
  meta: [
    {
      name: "description",
      content:
        "Аппараты для лазерной эпиляции и удаления волос: профессиональное оборудование для салонов. Модели, цены, сколько стоит купить аппарат для эпиляции волос лазером.",
    },
  ],
});
</script>

<style lang="scss" scoped>
.section.hero {
  .section__background {
    .section__background-image {
      object-fit: none;
      object-position: center -30px;

      @media (width < $breakpoint-sm) {
        object-fit: cover;
        object-position: center 40px;
      }
    }
  }
}
</style>
