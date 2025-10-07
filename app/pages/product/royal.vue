<template>
  <div class="page page--product">
    <section class="wrapper section hero">
      <div class="section__background overlayed">
        <NuxtImg
          fit="outside"
          format="webp, avif"
          src="/img/royal/royal_hero.png"
          alt="Legacy Royal"
          class="section__image"
          width="1920"
          height="760"
          quality="80"
        />
      </div>

      <div class="section__body contained">
        <p class="category text-nav text-sub">{ Многофункциональный аппарат }</p>
        <h1 class="title text-h1">Legacy Royal</h1>
        <p class="subtitle">
          Для коррекции фигуры, омоложения
          <br />кожи лица и тела
        </p>
        <p class="price text-h2">345 000 ₽</p>
      </div>
    </section>

    <section class="wrapper section description">
      <div class="contained">
        <div class="lead">
          <div class="lead__header text-nav text-sub">
            <span class="lead__header-index">1.0</span>
            <div class="lead__header-text">
              <span class="lead__header-title">{ Описание }</span>
              <span class="lead__header-subtitle">Legacy Royal</span>
            </div>
          </div>

          <div class="lead__text text-h2">
            Legacy Royal — многофункциональный аппарат для улучшения качества кожи, коррекции целлюлита и моделирования
            контуров тела и лица
          </div>
        </div>

        <div class="section__body">
          <div class="section-item section-item--img">
            <NuxtImg quality="100" src="/img/royal/royal_1.png" alt="Legacy Royal" class="section-item__image" />
          </div>
          <div class="section-item section-item--img">
            <NuxtImg quality="100" src="/img/royal/royal_2.png" alt="Legacy Royal" class="section-item__image" />
          </div>
          <div class="section-item section-item--img section-item--wide">
            <NuxtImg quality="100" src="/img/royal/royal_3.png" alt="Legacy Royal" class="section-item__image" />
          </div>
          <div class="section-item section-item--text features">
            <h2 class="features__title text-h2">Особенности</h2>
            <h3 class="feature__title text-h3">Технология компрессионной микровибрации</h3>
            <div class="feature__text">
              Работа аппарата основана на создании пульсирующего давления с помощью силиконовых шариков, вращающихся по
              оси ролика на 360°.Такая технология обеспечивает равномерное и глубокое механическое воздействие без
              травмирования тканей.Она активно стимулирует кровообращение, лимфоток и обменные процессы, способствуя
              оздоровлению и омоложению кожи.
            </div>
            <h3 class="feature__title text-h3">Интеллектуальная цилиндрическая роликовая ручка</h3>
            <div class="feature__text">
              Манипула позволяет точно адаптировать интенсивность и направление воздействия, обеспечивая полный контроль
              специалиста и максимальный комфорт клиента. Подходит как для интенсивной проработки крупных зон тела, так
              и для чувствительных участков лица и шеи.
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

          <div class="section-item section-item--video">
            <video muted autoplay loop class="section-item__video">
              <source src="/video/royal/royal_360.webm" type="video/webm" />
              <source src="/video/royal/royal_360.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.section__background {
  display: flex;
  justify-content: center;
}

.section__image {
  object-fit: none;
  object-position: center 20px;

  @media (max-width: $breakpoint-sm) {
    object-fit: cover;
    object-position: center 120px;
  }
}
</style>
