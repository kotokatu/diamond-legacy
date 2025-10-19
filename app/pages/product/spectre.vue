<template>
  <div class="page page--product">
    <h1 class="sr-only">Legacy Spectre — описание аппарата</h1>

    <section class="flex-center section hero">
      <div class="section__background section__background--overlay">
        <NuxtImg
          format="webp, avif"
          src="/img/spectre/spectre_hero.png"
          alt="Аппарат Legacy Spectre"
          class="section__background-image"
          sizes="640px sm:1280px"
        />
      </div>

      <div class="section__content contained">
        <p class="category text-nav text-sub">{ Многофункциональный аппарат }</p>
        <h1 class="title text-h1">Legacy Spectre</h1>
        <p class="description">
          Для моделирования тела, укрепления мышц
          <br />и омоложения кожи тела и лица.
        </p>
        <p class="price text-h2">480 000 ₽</p>
      </div>
    </section>

    <section class="flex-center section description" role="region" aria-labelledby="lead-title">
      <div class="contained">
        <div class="lead">
          <div class="lead__header text-nav text-sub">
            <span class="lead__index">1.0</span>
            <div class="lead__text">
              <span id="lead-title" class="lead__title">{ Описание }</span>
              <span class="lead__subtitle">Legacy Spectre</span>
            </div>
          </div>

          <div class="lead__body text-h2">
            Legacy Spectre — Многофункциональный аппарат для моделирования тела, укрепления мышц и омоложения кожи тела
            и лица.
          </div>
        </div>

        <div class="section__content">
          <div class="section__grid grid">
            <div class="grid-item grid-item--text features" role="region" aria-labelledby="features-title">
              <h2 class="features__title text-h2">Особенности</h2>
              <h3 class="feature__title text-h3">Технология HIEMT</h3>
              <div class="feature__text">
                Высокоинтенсивные электромагнитные импульсы вызывают глубокие мышечные сокращения, которые невозможно
                достичь обычной тренировкой. Результат:
                <br />
                – активация мышечного роста
                <br />
                – сжигание подкожного жира
                <br />
                – улучшение тонуса и рельефа тела
              </div>
              <h3 class="feature__title text-h3">Технология ENDO</h3>
              <div class="feature__text">
                Компрессионная микровибрация воздействует на поверхностные и глубокие ткани:
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
              <h3 class="feature__title text-h3">Аппарат оснащён тремя манипулами ENDO</h3>
              <div class="feature__text">
                В комплект входят:
                <ul class="list--disc">
                  <li>малая манипула — для лица</li>
                  <li>средняя манипула — для мелких участков тела</li>
                  <li>большая манипула — для больших зон тела</li>
                </ul>
                Три манипулы позволяют проводить комплексную работу на всех зонах тела и лица, обеспечивая
                индивидуальный подход к каждой области и максимальную эффективность процедур.
              </div>
              <h3 class="feature__title text-h3">Интеллектуальный пользовательский интерфейс</h3>
              <div class="feature__text">
                Аппарат оснащён интуитивно понятной сенсорной панелью и предлагает гибкую настройку под индивидуальные
                потребности каждого клиента.
              </div>
              <h3 class="feature__title text-h3">Применение</h3>
              <div class="feature__text">
                Аппарат рекомендуется для:
                <ul class="list--disc">
                  <li>укрепления мышц и формирования рельефа тела</li>
                  <li>устранения локальных жировых отложений</li>
                  <li>снижения выраженности целлюлита</li>
                  <li>повышения упругости и тонуса кожи</li>
                  <li>коррекции контуров лица, шеи и тела</li>
                  <li>восстановления после родов</li>
                  <li>устранения дряблости и снижения тургора тканей</li>
                </ul>
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
                  aria-label="360° обзор аппарата Legacy Spectre"
                  src="/video/spectre/spectre.webm"
                  type="video/webm"
                  poster="/img/spectre/spectre_vid_fallback.png"
                >
                  <NuxtImg
                    src="/img/spectre/spectre_vid_fallback.png"
                    alt="Legacy Spectre — 360° обзор (изображение вместо видео)"
                    loading="lazy"
                  />
                  Ваш браузер не поддерживает встроенное видео. Пожалуйста, обновите браузер или скачайте видео.
                </video>
              </div>
            </div>
          </div>

          <div class="section__contact" role="region" aria-label="Форма обратной связи">
            <AppContactCard class="contact-card--bg" aria-label="Форма обратной связи для запроса" />
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
              <span class="lead__subtitle">Legacy Spectre</span>
            </div>
          </div>
        </div>

        <div class="section__content">
          <div class="section__grid grid">
            <div class="grid-item grid-item--text order-1">
              <div class="grid-item__header text-nav text-sub">{ 01 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Автономная работа манипул HIEMT</div>
                <div class="grid-item__text">
                  Каждая манипула может работать отдельно или синхронно для прицельного воздействия на разные зоны тела
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-2">
              <NuxtImg
                format="webp, avif"
                src="/img/spectre/spectre_1.png"
                alt="Аппарат Legacy Spectre"
                class="grid-item__img"
                style="object-position: center"
                loading="lazy"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
              />
            </div>

            <div class="grid-item grid-item--text order-3">
              <div class="grid-item__header text-nav text-sub">{ 02 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Система охлаждения</div>
                <div class="grid-item__text">
                  Активное охлаждение манипул HIEMT обеспечивает комфорт и безопасность даже при высокой мощности
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-4">
              <NuxtImg
                format="webp, avif"
                src="/img/spectre/spectre_2.png"
                alt="Аппарат Legacy Spectre"
                class="grid-item__img"
                style="object-position: center"
                loading="lazy"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
              />
            </div>

            <div class="grid-item grid-item--text order-5">
              <div class="grid-item__header text-nav text-sub">{ 03 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Три манипулы эндосфера Legacy 360 Inner Sphere Roller</div>
                <div class="grid-item__text">
                  Малая для лица и шеи (60 силиконовых шариков); средняя для мелких участков тела (55 силиконовых
                  шариков); большая для больших зон тела (50 силиконовых шариков)
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-6">
              <NuxtImg
                format="webp, avif"
                src="/img/spectre/spectre_3.png"
                alt="Аппарат Legacy Spectre"
                class="grid-item__img"
                loading="lazy"
                style="object-position: center"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
              />
            </div>

            <div class="grid-item grid-item--text order-7">
              <div class="grid-item__header text-nav text-sub">{ 04 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Регулируемая скорость вращения роликов до 2300 об/мин</div>
                <div class="grid-item__text">Для комфортного и эффективного воздействия</div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-8">
              <NuxtImg
                format="webp, avif"
                src="/img/spectre/spectre_4.png"
                alt="Аппарат Legacy Spectre"
                class="grid-item__img"
                loading="lazy"
                style="object-position: center"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
              />
            </div>

            <div class="grid-item grid-item--text order-9">
              <div class="grid-item__header text-nav text-sub">{ 05 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">
                  Компрессионная микровибрация с равномерным пульсирующим давлением, безопасная для кожи и тканей
                </div>
                <div class="grid-item__text">Подходит для всего тела и лица, включая чувствительные зоны.</div>
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
              <span class="lead__subtitle">Legacy Spectre</span>
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
                    <span>Манипула EMS</span>
                    <span class="quantity"> 1 шт</span>
                  </td>
                  <td>12 месяцев</td>
                </tr>
                <tr>
                  <td>
                    <span>Роликовая ручка-манипула ENDO (малая)</span>
                    <span class="quantity"> 1 шт</span>
                  </td>
                  <td>12 месяцев</td>
                </tr>
                <tr>
                  <td>
                    <span>Манипула ENDO</span>
                    <span class="quantity"> 1 шт</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Манипула ENDO</span>
                    <span class="quantity"> 1 шт</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Набор поясов</span>
                    <span class="quantity"> 8*80 CM 8*90 CM 8*100 CM</span>
                  </td>
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
            <h3 class="section-block__title font-secondary text-h3">Технические характеристики</h3>
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
                  <td>2000 Вт</td>
                </tr>

                <tr>
                  <td>Рабочая частота</td>
                  <td>от 5 до 100 Гц</td>
                </tr>

                <tr>
                  <td>Скорость вращения</td>
                  <td>до 2300 об/мин (RPM)</td>
                </tr>

                <tr>
                  <td>Размер экрана</td>
                  <td>15,6 дюйма (сенсорный LCD)</td>
                </tr>

                <tr>
                  <td>Размер аппарата</td>
                  <td>50 × 60 × 130 см</td>
                </tr>

                <tr>
                  <td>Вес (нетто)</td>
                  <td>59 кг</td>
                </tr>

                <tr>
                  <td>Размер упаковки</td>
                  <td>65 × 46,7 × 120 см</td>
                </tr>

                <tr>
                  <td>Вес (брутто)</td>
                  <td>86.5 кг</td>
                </tr>
                <tr>
                  <td>Габариты упаковки</td>
                  <td>61,5 × 53,5 × 103 см.</td>
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
      object-fit: none;
      object-position: center 10px;

      @media (width < $breakpoint-sm) {
        object-fit: cover;
        object-position: center 40px;
      }
    }
  }
}
</style>
