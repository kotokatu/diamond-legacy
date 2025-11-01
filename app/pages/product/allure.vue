<template>
  <div class="page page--product">
    <h1 class="sr-only">Legacy Allure — описание аппарата</h1>

    <section class="flex-center section hero">
      <div class="section__background section__background--overlay">
        <NuxtImg
          format="webp, avif"
          src="/img/allure/allure_hero.png"
          alt="Аппарат Legacy Allure"
          class="section__background-image"
          sizes="640px sm:1280px"
        />
      </div>

      <div class="section__content contained">
        <p class="category text-nav text-sub">{ Многофункциональный аппарат }</p>
        <h1 class="title text-h1">Legacy Allure</h1>
        <p class="description">
          Для коррекции фигуры, омоложения
          <br />кожи лица и тела
        </p>
        <p class="price text-h2">315 000 ₽</p>
      </div>
    </section>

    <section class="flex-center section description" role="region" aria-labelledby="lead-title">
      <div class="contained">
        <div class="lead">
          <div class="lead__header text-nav text-sub">
            <span class="lead__index">1.0</span>
            <div class="lead__text">
              <span id="lead-title" class="lead__title">{ Описание }</span>
              <span class="lead__subtitle">Legacy Allure</span>
            </div>
          </div>

          <div class="lead__body text-h2">
            Legacy Allure — это высокотехнологичный медицинский малоинвазивный инструмент для красоты кожи, сочетающий
            RF- микроиглы и фракционную технологию.
          </div>
        </div>

        <div class="section__content">
          <div class="section__grid grid">
            <div class="grid-item grid-item--text features" role="region" aria-labelledby="features-title">
              <h2 class="features__title text-h2">Особенности</h2>
              <!--
              <h3 class="feature__title text-h3">
                Технология компрессионной микровибрации
              </h3>
              -->
              <div class="feature__text">
                Аппарат Legacy Allure оснащен сменными насадками с 4 различными конфигурациями (12P, 24P, 40P,
                нанозонд), а система позволяет свободно регулировать установку изолирующей головки. Кристаллитовая
                головка проникает в кожу на глубину 0,5–7 мм, обеспечивая минимально инвазивное лечение и моделирование
                тканей до 8 мм, с направленным термоэффектом для восстановления и ремоделирования кожи. Аппарат включает
                функцию Ледяной молоток для холодного компресса, который снижает температуру кожи, успокаивает
                покраснения, отёки и зуд, а также способствует сужению пор.
              </div>
              <!--
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
            --></div>

            <div class="grid-item grid-item--vid">
              <div class="video-container">
                <video
                  muted
                  autoplay
                  loop
                  class="grid-item__video"
                  preload="metadata"
                  aria-label="360° обзор аппарата Legacy Allure"
                  poster="/img/allure/allure_vid_fallback.png"
                >
                  <source src="/video/allure/allure_360.webm" type="video/webm" />
                  <source src="/video/allure/allure_360.mp4" type="video/mp4" />
                  <NuxtImg
                    src="/img/allure/allure_vid_fallback.png"
                    alt="Legacy Allure — 360° обзор (изображение вместо видео)"
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
              <span class="lead__subtitle">Legacy Allure</span>
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
                  Глубокое проникновение RF-энергии
                </div>
                -->
                <div class="grid-item__text">
                  Глубокое проникновение RF-энергии - до 8 мм в подкожную клетчатку. Регулируемая глубина иглы - от 0,5
                  до 7 мм, подходит для кожи любой толщины. Многоуровневая RF-технология — обработка трёх слоев кожи
                  одновременно, сокращает время процедуры и повышает однородность результата.
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-2">
              <NuxtImg
                format="webp, avif"
                src="/img/allure/allure_1.png"
                alt="Аппарат Legacy Allure"
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
                  Изолированные конусные иглы с золотым покрытием — минимизируют повреждение эпидермиса, предотвращают
                  ожоги, гиперпигментацию, боль и кровотечение. Разнообразие насадок — 12P, 24P, 40P и нанозонд для
                  индивидуального подхода и безопасности. Ледяной молоток — мгновенное охлаждение, снижение
                  воспалительной реакции, сужение пор и ускоренное восстановление кожи.
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-4">
              <NuxtImg
                format="webp, avif"
                src="/img/allure/allure_2.png"
                alt="Аппарат Legacy Allure"
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
                  Интерфейс и дисплей 10,4 дюйма удобны в использовании, параметры процедуры легко регулируются в
                  соответствии с индивидуальными особенностями кожи. Аппарат подходит для обработки различных зон:
                  область вокруг глаз, подбородок, лоб, шея, лицо, тело. Мощный лимфодренажный и антицеллюлитный эффект.
                  Стимуляция выработки коллагена и эластина, улучшение тонуса и упругости кожи.
                </div>
              </div>
            </div>
            <div class="grid-item grid-item--img order-6">
              <NuxtImg
                format="webp, avif"
                src="/img/allure/allure_3.png"
                alt="Аппарат Legacy Allure"
                class="grid-item__img"
                loading="lazy"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
              />
            </div>

            <div class="grid-item grid-item--text order-7">
              <div class="grid-item__header text-nav text-sub">{ 04 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Показания</div>
                <div class="grid-item__text">
                  Дряблость кожи и снижение упругости Морщины и тонкие линии Следы и рубцы от акне Расширенные поры
                  Растяжки Целлюлит и локальные жировые отложения Неравномерная текстура кожи
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-8">
              <NuxtImg
                format="webp, avif"
                src="/img/allure/allure_4.png"
                alt="Аппарат Legacy Allure"
                class="grid-item__img"
                loading="lazy"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
              />
            </div>

            <div class="grid-item grid-item--text order-9">
              <div class="grid-item__header text-nav text-sub">{ 05 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Принцип действия</div>
                <div class="grid-item__text">
                  Многоуровневая система позволяет одновременно воздействовать на несколько слоев кожи с миллисекундными
                  интервалами, обеспечивая эффективное и безопасное лечение всего тела.
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
              <span class="lead__subtitle">Legacy Allure</span>
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
                    <span>Ручка с микроиглами</span>
                    <span class="quantity"> 1 шт</span>
                  </td>
                  <td>12 месяцев</td>
                </tr>
                <tr>
                  <td>
                    <span>Насадки: 12P, 24P, 40P, нанозонд</span>
                    <span class="quantity"> 1 шт</span>
                  </td>
                  <td>12 месяцев</td>
                </tr>
                <tr>
                  <td>
                    <span>Ледяной молоток</span>
                    <span class="quantity"> 1 компллект</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Ножной переключатель</span>
                    <span class="quantity"> 1 компллект</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Кабели питания и соединения</span>
                    <span class="quantity"> 1 шт</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Инструкция по эксплуатации</span>
                    <span class="quantity"> 1 шт</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Карта активации</span>
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
                  <td>Глубина проникновения игл</td>
                  <td>0,5–7 мм</td>
                </tr>

                <tr>
                  <td>Максимальная глубина воздействия</td>
                  <td>8 мм</td>
                </tr>

                <tr>
                  <td>Насадки</td>
                  <td>12P, 24P, 40P, нанозонд</td>
                </tr>

                <tr>
                  <td>Диапазон мощности</td>
                  <td>20–300 Вт в зависимости от насадки</td>
                </tr>

                <tr>
                  <td>Тип игл</td>
                  <td>конусные с золотым покрытием, диаметр иглы 0,22 мм, кончик 0,1 мм</td>
                </tr>

                <tr>
                  <td>Режимы работы</td>
                  <td>одиночный выстрел, двойной выстрел, фиксированная точка, всплеск</td>
                </tr>

                <tr>
                  <td>Охлаждение</td>
                  <td>ледяной молоток для холодного компресса</td>
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
  title: 'Аппарат для омоложения кожи Legacy Allure с функцией RF Lifting',
  meta: [
    { name: 'description', content: 'Минимально-инвазивный фракционный RF-аппарат с функцией RF Lifting для омоложения кожи лица и тела. RF Lifting стимулирует выработку коллагена, подтягивает кожу, уменьшает морщины и сужает поры. Функция «ледяной молоток» снижает температуру кожи, уменьшает покраснение и отёки, оказывает анестезирующее действие. Изолированные микроиглы проникают в кожу, излучают радиочастотную энергию и создают каналы для усвоения активных веществ, обеспечивая комплексный омолаживающий эффект.' }
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
