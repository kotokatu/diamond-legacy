<template>
  <div class="page page--product">
    <!--h1 class="sr-only">Legacy Royal — описание аппарата</h1-->

    <section class="flex-center section hero">
      <div class="section__background section__background--overlay">
        <NuxtImg
          format="webp, avif"
          src="/img/royal/royal_hero.png"
          alt="Аппарат эндосфера Legacy Royal"
          class="section__background-image"
          sizes="640px sm:1280px"
          fetchpriority="high"
        />
      </div>

      <div class="section__content contained" itemscope itemtype="http://schema.org/Product">
        <p class="category text-nav text-sub">
          { Многофункциональный аппарат }
        </p>
        <h2 class="title text-h1" itemprop="name">Legacy Royal</h2>
        <h1 class="description text-body" itemprop="description">
          Аппарат эндосфера для коррекции фигуры
        </h1>
        <span itemprop="offers" itemscope itemtype="https://schema.org/Offer">
          <p class="price text-h2" itemprop="price">380 000 ₽</p>
          <meta itemprop="priceCurrency" content="RUB" />
        </span>
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
              <span class="lead__subtitle">Legacy Royal</span>
            </div>
          </div>

          <div class="lead__body text-h2">
            Legacy Royal — многофункциональный аппарат для улучшения качества
            кожи, коррекции целлюлита и моделирования контуров тела и лица
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
            <div
              class="grid-item grid-item--text features"
              role="region"
              aria-labelledby="features-title"
            >
              <h2 class="features__title text-h2">Особенности</h2>
              <h3 class="feature__title text-h3">
                Технология компрессионной микровибрации
              </h3>
              <div class="feature__text">
                Работа аппарата основана на создании пульсирующего давления с
                помощью силиконовых шариков, вращающихся по оси ролика на
                360°.Такая технология обеспечивает равномерное и глубокое
                механическое воздействие без травмирования тканей.Она активно
                стимулирует кровообращение, лимфоток и обменные процессы,
                способствуя оздоровлению и омоложению кожи.
              </div>
              <h3 class="feature__title text-h3">
                Интеллектуальная цилиндрическая роликовая ручка
              </h3>
              <div class="feature__text">
                Манипула позволяет точно адаптировать интенсивность и
                направление воздействия, обеспечивая полный контроль специалиста
                и максимальный комфорт клиента. Подходит как для интенсивной
                проработки крупных зон тела, так и для чувствительных участков
                лица и шеи.
              </div>
              <h3 class="feature__title text-h3">
                Три манипулы( лицо, средние участки, большие участки)
              </h3>
              <div class="feature__text">
                Аппарат оснащён тремя манипулами разного размера:
                <ul class="list--disc">
                  <li>
                    Малая — для лица, шеи и декольте, содержит 60 силиконовых
                    шариков.
                  </li>
                  <li>
                    Средняя — для мелких участков тела, содержит 55 шариков.
                  </li>
                  <li>
                    Большая — для обработки крупных зон тела, оснащена 50
                    силиконовыми шариками.
                  </li>
                </ul>
                Каждая манипула может использоваться по отдельности, не требуя
                одновременного подключения всех насадок. Система оснащена
                функцией охлаждения, что обеспечивает комфорт пациента и защиту
                кожи при интенсивных процедурах. Аппарат управляется через
                сенсорный экран, обладает современным интерфейсом, а его
                эргономичная конструкция обеспечивает удобство специалиста и
                клиента.
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
            </div>

            <div class="grid-item grid-item--vid">
              <div class="video-container">
                <video
                  muted
                  autoplay
                  playsinline
                  loop
                  class="grid-item__video"
                  preload="metadata"
                  aria-label="360° обзор аппарата Legacy Royal"
                  :poster="royalVidFallback"
                >
                  <source src="/video/royal/royal_360.webm" type="video/webm" />
                  <source src="/video/royal/royal_360.mp4" type="video/mp4" />
                  <img
                    :src="royalVidFallback"
                    alt="Legacy Royal — 360° обзор (изображение вместо видео)"
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
              <span class="lead__subtitle">Legacy Royal</span>
            </div>
          </div>
        </div>

        <div class="section__content">
          <div class="section__grid grid">
            <div class="grid-item grid-item--text order-1">
              <div class="grid-item__header text-nav text-sub">{ 01 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">
                  Формирует контуры тела
                </div>
                <div class="grid-item__text">
                  Эффективно корректирует фигуру, воздействуя на локальные
                  жировые отложения в проблемных зонах: руки, спина, живот,
                  бедра, ягодицы. Помогает достичь более стройного и подтянутого
                  силуэта.
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
                <div class="grid-item__title text-h3">
                  Сглаживает проявления целлюлита
                </div>
                <div class="grid-item__text">
                  Улучшает микроциркуляцию, снижает отёчность и стимулирует
                  выведение лишней жидкости, что способствует уменьшению
                  выраженности целлюлита и выравниванию текстуры кожи.
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
                <div class="grid-item__title text-h3">
                  Снимает ощущение тяжести в ногах
                </div>
                <div class="grid-item__text">
                  Активизирует лимфо- и венозный отток, устраняет застойные
                  явления, помогает снять отёки и чувство усталости в нижних
                  конечностях.
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
                  Стимулирует клеточный метаболизм и укрепляет кожные покровы.
                  Особенно эффективна при потере упругости кожи после похудения
                  или возрастных изменений.
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
const img = useImage();
const royalVidFallback = img("/img/royal/royal_vid_fallback.png", {
  format: "webp, avif",
  quality: 80,
});
const route = useRoute()
useHead({
/*
  link: [
    {
      rel: 'canonical',
      href: 'https://legacy-russia.ru' + route.path,
    },
  ],      
*/
  title: "Аппарат эндосфера для коррекции фигуры — купить",
  meta: [
    {
      name: "description",
      content:
        "Аппарат эндосфера для коррекции фигуры и тела: как работает, цена, где купить оригинальный массажный аппарат. Эндосфера — стоимость, отзывы, доставка по России.",
    },
    /* ozon Open Graph
    <meta data-hid="property::og:image" property="og:image" content="https://ir.ozone.ru/s3/multimedia-1-1/c600/8053020865.jpg">    
    <meta data-hid="property::og:type" property="og:type" content="website">    
    <meta data-hid="property::og:site_name" property="og:site_name" content="OZON">    
    <meta data-hid="name::msapplication-config" name="msapplication-config" content="https://ir.ozone.ru/multimedia/xml/browserconfig.xml">    
    <meta data-hid="name::application-name" name="application-name" content="OZON">
    <meta data-hid="name::msapplication-starturl" name="msapplication-starturl" content="https://www.ozon.ru/">    
    <meta data-hid="name::msapplication-tooltip" name="msapplication-tooltip" content="Интернет-магазин OZON">
    <meta data-hid="property::og:url" property="og:url" content="https://www.ozon.ru/product/alerkon-domashnyaya-endosfera-espher-massazher-dlya-litsa-nagrev-i-mikrotoki-adm995-2900200575/">
    <meta data-hid="property::og:title" property="og:title" content="ALERKON, домашняя эндосфера espher массажер для лица, нагрев и микротоки,ADM995 купить на OZON по низкой цене (2900200575)">
    <meta data-hid="name::description" name="description" content="ALERKON, домашняя эндосфера espher массажер для лица, нагрев и микротоки,ADM995 – покупайте на OZON по выгодным ценам! Быстрая и бесплатная доставка, большой ассортимент, бонусы, рассрочка и кэшбэк. Распродажи, скидки и акции. Реальные отзывы покупателей. (2900200575)">    
    <meta data-hid="property::fb:app_id" property="fb:app_id" content="1211635852237386">
    */
    // Open Graph
    { hid: 'og:type', property: 'og:type', content: 'website'},
    { hid: 'og:site_name', property: 'og:site_name', content: 'Legacy Russia'},
    { hid: 'og:url', property: 'og:url', content: 'https://legacy-russia.ru' + route.path },
    { hid: 'og:title', property: 'og:title', content: 'Аппарат эндосфера для коррекции фигуры — Legacy Royal' },
    { hid: 'og:description', property: 'og:description', content: 'Аппарат эндосфера для коррекции фигуры и тела: как работает, цена, где купить оригинальный массажный аппарат. Эндосфера — стоимость, отзывы, доставка по России.' },
    { hid: 'og:image', property: 'og:image', content: 'https://legacy-russia.ru/img/royal/royal_hero.png' },
    //<meta property="og:image:type" content="image/png">    
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
