<template>
  <div class="page page--product">
    <!--h1 class="sr-only">Legacy Form — описание аппарата</h1-->

    <section class="flex-center section hero">
      <div class="section__background section__background--overlay">
        <NuxtImg
          format="webp, avif"
          src="/img/form/form_hero.png"
          alt="Аппарат Legacy Form"
          class="section__background-image"
          sizes="640px sm:1280px"
          fetchpriority="high"
        />
      </div>

      <div class="section__content contained">
        <p class="category text-nav text-sub">
          { Многофункциональный аппарат }
        </p>
        <h2 class="title text-h1">Legacy Form</h2>
        <h1 class="description text-body">
          Для профессионального массажа,
          <br />моделирования тела и лифтинга кожи.
        </h1>
        <p class="price text-h2">275 000 ₽</p>
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
              <span class="lead__subtitle">Legacy Form</span>
            </div>
          </div>

          <div class="lead__body text-h2">
            Legacy Form — Инновационный аппарат нового поколения для
            профессионального массажа, моделирования тела и лифтинга кожи.
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
              <h3 class="feature__title text-h3">5 в 1</h3>
              <div class="feature__text">
                <ul class="list--disc">
                  <li>механического массажа</li>
                  <li>LED-терапии, лимфодренажа</li>
                  <li>энергомассажа</li>
                  <li>глубокого 3D-воздействия</li>
                </ul>
              </div>
              <div class="feature__text">
                Оснащён пятью рабочими манипулами, которые могут работать
                одновременно, позволяя обрабатывать несколько зон тела.
                <br />
                Сенсорный интерфейс с выбором языка, регулировкой времени,
                мощности, силы воздействия и длины световой волны.
                <br />
                Возможность работы одной или двумя манипулами одновременно.
                <br />
                Каждая манипула оснащена 12 массажными звёздами, каждая из
                которых состоит из 16 элементов — в сумме 192 активных "пальца",
                создающих эффект профессионального массажа.
                <br />
                Угол наклона массажных элементов обеспечивает 3D-волну и
                глубокое воздействие на каждый миллиметр тела. Один сеанс (40
                минут) эквивалентен 3,5 часам ручного массажа.
                <br />
                Комплексное LED-воздействие с красным спектром (625–740 нм)
                активизирует синтез коллагена, улучшает плотность и эластичность
                кожи.
                <br />
                Современная система энергомассажа воздействует на меридианы,
                улучшая циркуляцию энергии «Ци» и обмен веществ.
              </div>

              <h3 class="feature__title text-h3">
                Интеллектуальный пользовательский интерфейс
              </h3>
              <div class="feature__text">
                Аппарат оснащён интуитивно понятной сенсорной панелью и
                предлагает гибкую настройку под индивидуальные потребности
                каждого клиента.
              </div>
              <h3 class="feature__title text-h3">Применение</h3>
              <div class="feature__text">
                Устройство предназначено для коррекции фигуры, устранения
                целлюлита, повышения тонуса кожи и мышц, а также для общего
                оздоровления организма.
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
                  aria-label="Заставка Legacy"
                  src="/video/form/form_360.webm"
                  type="video/webm"
                  :poster="formVidFallback"
                >
                  <img
                    :src="formVidFallback"
                    alt="Legacy Form — 360° обзор (изображение вместо видео)"
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
              <span class="lead__subtitle">Legacy Form</span>
            </div>
          </div>
        </div>

        <div class="section__content">
          <div class="section__grid grid">
            <div class="grid-item grid-item--text order-1">
              <div class="grid-item__header text-nav text-sub">{ 01 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">
                  5 технологий в одном устройстве
                </div>
                <div class="grid-item__text">
                  механический массаж, LEDтерапия, энергомассаж, лимфодренаж и
                  глубокое вибрационное воздействие.
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-2">
              <NuxtImg
                format="webp, avif"
                src="/img/form/form_1.png"
                alt="Аппарат Legacy Form"
                class="grid-item__img"
                loading="lazy"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
              />
            </div>

            <div class="grid-item grid-item--text order-3">
              <div class="grid-item__header text-nav text-sub">{ 02 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Потеря веса</div>
                <div class="grid-item__text">до 950 г за один сеанс.</div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-4">
              <NuxtImg
                format="webp, avif"
                src="/img/form/form_2.png"
                alt="Аппарат Legacy Form"
                class="grid-item__img"
                loading="lazy"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
              />
            </div>

            <div class="grid-item grid-item--text order-5">
              <div class="grid-item__header text-nav text-sub">{ 03 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">
                  Безопасность и щадящее воздействие
                </div>
                <div class="grid-item__text">
                  подходит для чувствительных зон.
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-6">
              <NuxtImg
                format="webp, avif"
                src="/img/form/form_3.png"
                alt="Аппарат Legacy Form"
                class="grid-item__img"
                loading="lazy"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
              />
            </div>

            <div class="grid-item grid-item--text order-7">
              <div class="grid-item__header text-nav text-sub">{ 04 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">
                  Эффект после первой процедуры
                </div>
                <div class="grid-item__text">
                  кожа становится более плотной и гладкой, улучшается рельеф и
                  тонус.
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-8">
              <NuxtImg
                format="webp, avif"
                src="/img/form/form_4.png"
                alt="Аппарат Legacy Form"
                class="grid-item__img"
                loading="lazy"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
              />
            </div>

            <div class="grid-item grid-item--text order-9">
              <div class="grid-item__header text-nav text-sub">{ 05 }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">
                  Омолаживающее действие
                </div>
                <div class="grid-item__text">
                  визуально уменьшает возраст кожи, делает её упругой и
                  эластичной.
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
              <span class="lead__subtitle">Legacy Form</span>
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
                  <!--td>Бессрочная</td-->
                </tr>
                <tr>
                  <td>
                    <span
                      >5 манипул различного диаметра для работы с большими и
                      малыми зонами</span
                    >
                    <span class="quantity"> 1 шт</span>
                  </td>
                  <!--td>12 месяцев</td-->
                </tr>
                <tr>
                  <td>
                    <span>Инструкция по эксплуатации</span>
                    <span class="quantity"> 1 шт</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Защитный аксессуар для головы</span>
                    <span class="quantity"> 1 шт</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Защитный аксессуар для головы</span>
                    <span class="quantity"> 1 шт</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Защитный аксессуар для головы</span>
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
                  <td>Крутящий момент</td>
                  <td>50 кг·см, с функцией автоматического контроля.</td>
                </tr>
                <tr>
                  <td>Напряжение</td>
                  <td>12 В (безопасное)</td>
                </tr>
                <tr>
                  <td>Mощность</td>
                  <td>300 Вт</td>
                </tr>
                <tr>
                  <td>Ток</td>
                  <td>5–12 А.</td>
                </tr>

                <tr>
                  <td>Скорость двигателя</td>
                  <td>50–600 об/мин, с плавной регулировкой и реверсом</td>
                </tr>
                <tr>
                  <td>Количество скоростей</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Глубина воздействия</td>
                  <td>4–8 мм</td>
                </tr>
                <tr>
                  <td>Количество активных зон</td>
                  <td>до 12 одновременно</td>
                </tr>
                <tr>
                  <td>Площадь воздействия</td>
                  <td>20 000 мм² (большая манипула) и 5 000 мм² (малая)</td>
                </tr>
                <tr>
                  <td>Материалы</td>
                  <td>
                    Ось рычага — из нержавеющей стали; Подшипник — из медного
                    сплава с низким коэффициентом трения, не требует смазки
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
const formVidFallback = img("/img/form/form_vid_fallback.png", {
  format: "webp, avif",
  quality: 80,
});

useHead({
  title:
    "Аппарат для коррекции фигуры Legacy Form с функциями вибрационно-роликового массажа и LED-воздействия (5 в 1)",
  meta: [
    {
      name: "description",
      content:
        "Аппарат для моделирования тела и лифтинга кожи 5 в 1. Объединяет технологии вибрационно-роликового массажа, LED-терапию, лимфодренаж, энергомассаж и 3D-воздействие. Оснащён пятью манипулами, которые могут работать одновременно, обеспечивая мощный дренажно-лифтинговый эффект и улучшение структуры кожи.",
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
