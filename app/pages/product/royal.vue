<template>
  <div class="page page--product">
    <h1 class="sr-only">Legacy Royal — описание аппарата</h1>

    <section class="flex-center section hero">
      <div class="section__background section__background--overlay">
        <NuxtImg
          format="webp, avif"
          src="/img/royal/royal_hero.png"
          alt="Аппарат Legacy Royal"
          class="section__background-image"
          sizes="640px sm:1280px"
        />
      </div>

      <div class="section__content contained">
        <p class="category text-nav text-sub">{ Многофункциональный аппарат }</p>
        <h1 class="title text-h1">Legacy Royal</h1>
        <p class="description">
          Для коррекции фигуры, омоложения
          <br />кожи лица и тела
        </p>
        <p class="price text-h2">380 000 ₽</p>
      </div>
    </section>

    <section class="flex-center section description" role="region" aria-labelledby="lead-title">
      <div class="contained">
        <div class="lead">
          <div class="lead__header text-nav text-sub">
            <span class="lead__index">1.0</span>
            <div class="lead__text">
              <span id="lead-title" class="lead__title">{ Описание }</span>
              <span class="lead__subtitle">Legacy Royal</span>
            </div>
          </div>

          <div class="lead__body text-h2">
            Legacy Royal — многофункциональный аппарат для улучшения качества кожи, коррекции целлюлита и моделирования
            контуров тела и лица
          </div>
        </div>

        <div class="section__content">
          <div class="section__grid grid">
            <div class="grid-item grid-item--img">
              <NuxtImg
                format="webp, avif"
                src="/img/royal/royal_1.png"
                alt="Аппарат Legacy Royal"
                class="grid-item__image"
                loading="lazy"
              />
            </div>
            <div class="grid-item grid-item--img">
              <NuxtImg
                format="webp, avif"
                src="/img/royal/royal_2.png"
                alt="Аппарат Legacy Royal"
                class="grid-item__image"
                loading="lazy"
              />
            </div>
            <div class="grid-item grid-item--img grid-item--wide">
              <NuxtImg
                format="webp, avif"
                src="/img/royal/royal_3.png"
                alt="Аппарат Legacy Royal"
                class="grid-item__image"
                loading="lazy"
              />
            </div>
            <div class="grid-item grid-item--text features" role="region" aria-labelledby="features-title">
              <h2 class="features__title text-h2">Особенности</h2>
              <h3 class="feature__title text-h3">Технология компрессионной микровибрации</h3>
              <div class="feature__text">
                Работа аппарата основана на создании пульсирующего давления с помощью силиконовых шариков, вращающихся
                по оси ролика на 360°.Такая технология обеспечивает равномерное и глубокое механическое воздействие без
                травмирования тканей.Она активно стимулирует кровообращение, лимфоток и обменные процессы, способствуя
                оздоровлению и омоложению кожи.
              </div>
              <h3 class="feature__title text-h3">Интеллектуальная цилиндрическая роликовая ручка</h3>
              <div class="feature__text">
                Манипула позволяет точно адаптировать интенсивность и направление воздействия, обеспечивая полный
                контроль специалиста и максимальный комфорт клиента. Подходит как для интенсивной проработки крупных зон
                тела, так и для чувствительных участков лица и шеи.
              </div>
              <h3 class="feature__title text-h3">Насадки для разных зон</h3>
              <div class="feature__text">
                В комплект входят:
                <ul class="list--disc">
                  <li>большая манипула (50 шариков) — для работы по телу</li>
                  <li>малая манипула (60 шариков) — для лица и шеи</li>
                </ul>
                Это делает аппарат универсальным решением для комплексного ухода за всем телом.
              </div>
              <h3 class="feature__title text-h3">Безопасность и неинвазивность</h3>
              <div class="feature__text">
                Процедура не требует периода восстановления и подходит для клиентов с различной чувствительностью кожи.
                Метод полностью неинвазивен, исключает повреждение тканей и может использоваться как в терапевтических,
                так и в профилактических целях.
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
            </div>

            <div class="grid-item grid-item--vid">
              <div class="video-container">
                <video
                  muted
                  autoplay
                  loop
                  class="grid-item__video"
                  preload="metadata"
                  aria-label="360° обзор аппарата Legacy Royal"
                  poster="/img/royal/royal_vid_fallback.png"
                >
                  <source src="/video/royal/royal_360.webm" type="video/webm" />
                  <source src="/video/royal/royal_360.mp4" type="video/mp4" />
                  <NuxtImg
                    src="/img/royal/royal_vid_fallback.png"
                    alt="Legacy Royal — 360° обзор (изображение вместо видео)"
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
              <span class="lead__subtitle">Legacy Royal</span>
            </div>
          </div>
        </div>

        <div class="section__content">
          <div class="section__grid grid">
            <div class="grid-item grid-item--text order-1">
              <div class="grid-item__header text-nav text-sub">{ 01 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Формирует контуры тела</div>
                <div class="grid-item__text">
                  Эффективно корректирует фигуру, воздействуя на локальные жировые отложения в проблемных зонах: руки,
                  спина, живот, бедра, ягодицы. Помогает достичь более стройного и подтянутого силуэта.
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-2">
              <NuxtImg
                format="webp, avif"
                src="/img/royal/royal_4.png"
                alt="Аппарат Legacy Royal "
                class="grid-item__img"
                loading="lazy"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
              />
            </div>

            <div class="grid-item grid-item--text order-3">
              <div class="grid-item__header text-nav text-sub">{ 02 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Сглаживает проявления целлюлита</div>
                <div class="grid-item__text">
                  Улучшает микроциркуляцию, снижает отёчность и стимулирует выведение лишней жидкости, что способствует
                  уменьшению выраженности целлюлита и выравниванию текстуры кожи.
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-4">
              <NuxtImg
                format="webp, avif"
                src="/img/royal/royal_5.png"
                alt="Аппарат Legacy Royal"
                class="grid-item__img"
                loading="lazy"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
              />
            </div>

            <div class="grid-item grid-item--text order-5">
              <div class="grid-item__header text-nav text-sub">{ 03 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Снимает ощущение тяжести в ногах</div>
                <div class="grid-item__text">
                  Активизирует лимфо- и венозный отток, устраняет застойные явления, помогает снять отёки и чувство
                  усталости в нижних конечностях.
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-6">
              <NuxtImg
                format="webp, avif"
                src="/img/royal/royal_6.png"
                alt="Аппарат Legacy Royal"
                class="grid-item__img"
                loading="lazy"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
              />
            </div>

            <div class="grid-item grid-item--text order-7">
              <div class="grid-item__header text-nav text-sub">{ 04 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Тонизирует кожу</div>
                <div class="grid-item__text">
                  Стимулирует клеточный метаболизм и укрепляет кожные покровы. Особенно эффективна при потере упругости
                  кожи после похудения или возрастных изменений.
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-8">
              <NuxtImg
                format="webp, avif"
                src="/img/royal/royal_7.png"
                alt="Аппарат Legacy Royal"
                class="grid-item__img"
                loading="lazy"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
              />
            </div>

            <div class="grid-item grid-item--text order-9">
              <div class="grid-item__header text-nav text-sub">{ 05 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Манипула для лица и шеи</div>
                <div class="grid-item__text">
                  Манипула для лица и шеи позволяет мягко прорабатывать деликатные зоны, повышая упругость и устраняя
                  признаки возрастных изменений.
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
              <span class="lead__subtitle">Legacy Royal</span>
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
                    <span>Роликовая ручка-манипула ENDO (большая)</span>
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
                  <td>3000 Вт</td>
                </tr>

                <tr>
                  <td>Скорость вращения</td>
                  <td>до 1400 об/мин (RPM)</td>
                </tr>

                <tr>
                  <td>Размер экрана</td>
                  <td>15,6 дюйма (сенсорный LCD)</td>
                </tr>

                <tr>
                  <td>Размер аппарата</td>
                  <td>29 × 29 × 107 см</td>
                </tr>

                <tr>
                  <td>Вес (нетто)</td>
                  <td>27 кг</td>
                </tr>

                <tr>
                  <td>Размер упаковки</td>
                  <td>65 × 46,7 × 120 см</td>
                </tr>

                <tr>
                  <td>Вес (брутто)</td>
                  <td>40 кг</td>
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
useHead({
  title: 'Аппарат для коррекции фигуры Legacy Royal с функцией микровибрационного роликового массажа',
  meta: [
    { name: 'description', content: 'Инновационный косметологический аппарат, оснащённый тремя манипулами ENDO разного размера. Обеспечивает глубокое воздействие на мягкие ткани, улучшает микроциркуляцию, способствует выведению токсинов и повышению упругости кожи. Подходит для профессионального применения в эстетической косметологии и аппаратных SPA-программах.' }
  ],
})
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
