<template>
  <div class="page page--home">
    <section class="flex-center section hero" aria-labelledby="hero-title" role="banner">
      <div class="section__background section__background--overlay">
        <video
          class="section__video"
          autoplay
          loop
          muted
          playsinline
          preload="metadata"
          aria-hidden="true"
          tabindex="-1"
        >
          <source src="/video/hero_video.webm" type="video/webm" />
          <source src="/video/hero_video.mp4" type="video/mp4" />
          <p>Видео демонстрирует работу косметологических аппаратов Legacy</p>
        </video>
      </div>

      <div class="section__content contained">
        <h1 id="hero-title" class="font-secondary text-h1">Legacy — косметологические аппараты премиум качества</h1>
        <p class="font-secondary text-h3">
          Уникальный симбиоз многолетнего опыта <br />
          и передовых корейских технологий
        </p>
      </div>
    </section>

    <section id="about" class="flex-center section about" aria-labelledby="about-title">
      <div class="lead contained">
        <div class="lead__header text-nav text-sub">
          <span class="lead__index">1.0</span>
          <div class="lead__text">
            <span class="lead__title">{ О компании }</span>
            <span class="lead__subtitle">Legacy</span>
          </div>
        </div>
        <h2 id="about-title" class="lead__body text-h2">
          Legacy — бренд нового поколения профессионального оборудования, созданный компанией Diamond Technology
          совместно с ведущими инженерами из Кореи. В основе философии бренда — сочетание международного уровня
          технологий, передовых разработок и высоких стандартов качества, открывающее новые возможности в косметологии
        </h2>
      </div>

      <div class="section__content">
        <div class="section__background section__background--overlay">
          <video
            class="section__video"
            autoplay
            loop
            muted
            playsinline
            preload="metadata"
            aria-hidden="true"
            tabindex="-1"
          >
            <source src="/video/about_video.webm" type="video/webm" />
            <source src="/video/about_video.mp4" type="video/mp4" />
            <p>Видео демонстрирует аппарат Legacy</p>
          </video>
        </div>

        <div class="section__grid grid contained">
          <div class="grid-item">
            <div class="grid-item__title">
              <AppDots :count="1" />
              <span class="text-nav text-sub">{ Надёжность и экспертиза }</span>
            </div>
            <div class="grid-item__text">
              За более чем 8 лет работы Diamond Technology оснастила более 5000 клиник и салонов в России и за её
              пределами. Legacy создан на базе лучших практик индустрии, с исправлением недостатков, выявленных на рынке
              других производителей. Используются только современные, проверенные компоненты премиального уровня, а
              дизайн и функционал продуман до мельчайших деталей для безопасной и эффективной работы. Именно поэтому мы
              предоставляем пожизненную гарантию на все аппараты
            </div>
          </div>
          <div class="grid-item grid-item--last">
            <div class="grid-item__title">
              <AppDots :count="3" />
              <span class="text-nav text-sub">{ Символ премиального качества }</span>
            </div>
            <div class="grid-item__text">
              Legacy — знак уверенности и качества для профессионалов. Аппараты бренда вдохновляют специалистов,
              повышают ценность их работы и формируют новые стандарты красоты
            </div>
          </div>
          <div class="grid-item">
            <div class="grid-item__title">
              <AppDots :count="2" />
              <span class="text-nav text-sub">{ Новый стандарт в косметологии }</span>
            </div>
            <div class="grid-item__text">
              Legacy задаёт новые ориентиры в индустрии красоты, предлагая решения, не имеющие аналогов на рынке.
              Линейка аппаратов охватывает ключевые направления: моделирование фигуры, лазерные технологии, омоложение
              кожи и комплексный уход за телом. Эти решения помогают расширить спектр услуг, повысить качество
              обслуживания и вывести бизнес на новый уровень
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="catalog" class="flex-center section catalog" aria-labelledby="catalog-title">
      <div class="contained">
        <div class="lead">
          <div class="lead__header text-nav text-sub">
            <span class="lead__index">2.0</span>
            <div class="lead__text">
              <span class="lead__title">{ Каталог }</span>
              <span class="lead__subtitle">Legacy</span>
            </div>
          </div>

          <h2 id="catalog-title" class="lead__body text-h2">
            Производим устройства мирового уровня с фокусом на надежность, удобство и технологичность
          </h2>
        </div>

        <div class="section__content grid" role="grid" aria-label="Каталог косметологических аппаратов">
          <AppProductCard
            v-for="item in data.items"
            :key="item.id"
            class="catalog__card"
            :data="item"
            size="lg"
            role="gridcell"
            :aria-label="item.name"
          />
        </div>

        <div class="section__contact">
          <AppContactCard aria-label="Форма обратной связи" />
        </div>
      </div>
    </section>

    <section id="benefits" class="flex-center section benefits" aria-labelledby="benefits-title">
      <div class="contained">
        <div class="lead">
          <div class="lead__header text-nav text-sub">
            <span class="lead__index">3.0</span>
            <div class="lead__text">
              <span class="lead__title">{ Преимущества }</span>
              <span class="lead__subtitle">Legacy</span>
            </div>
          </div>
          <h2 id="benefits-title" class="lead__body text-h2">
            Берем на себя все этапы — от логистики до настройки оборудования, а также обеспечиваем последующее
            техническое сопровождение по всей России
          </h2>
        </div>

        <div class="section__content">
          <div class="section__grid grid" role="list" aria-label="Преимущества работы с Legacy">
            <div class="grid-item order1" role="listitem">
              <div class="grid-item__header text-nav text-sub">{ Доставка }</div>
              <div class="grid-item__body">
                <h3 class="grid-item__title text-h3">Бесплатная доставка</h3>
                <div class="grid-item__text">
                  Доставка оборудования надёжными транспортными компаниями по России, СНГ и Европе. Аппараты упакованы в
                  алюминиевые кейсы. Сохранность и своевременная доставка гарантированы
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-2">
              <NuxtImg
                format="webp, avif"
                src="/img/benefits_1.jpg"
                alt="Деталь аппарата Legacy"
                loading="lazy"
                class="grid-item__img"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
              />
            </div>

            <div class="grid-item order-3">
              <div class="grid-item__header text-nav text-sub">{ Оплата }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Оплата при получении</div>
                <div class="grid-item__text">
                  Производится только после получения оборудования, что позволит убедиться в качестве товара. Доступны
                  любые способы: расчётный счёт, наличные, банковский перевод — по удобству клиента
                </div>
              </div>
            </div>

            <div class="grid-item order-4">
              <div class="grid-item__header text-nav text-sub">{ Гарантии }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Пожизненная гарантия</div>
                <div class="grid-item__text">
                  Обслуживание 24/7. Опытные мастера Legacy обеспечивают круглосуточное сопровождение: консультации,
                  ремонт, гарантийное и постгарантийное обслуживание
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--wide order-5">
              <div class="grid-item__header text-nav text-sub">{ Сопровождение }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Помощь в получении соцконтракта под ключ</div>
                <div class="grid-item__text">
                  <div class="q-pb-sm">
                    Персональный менеджер Legacy сопровождает весь процесс оформления соцконтракта. Legacy берёт на себя
                    всю бюрократию и доводит дело до результата. Консультация по условиям получения
                  </div>

                  <ul class="list--disc">
                    <li>Подбор аппарата под параметры программы</li>
                    <li>Подготовка документов и написание бизнес-плана</li>
                    <li>Подача заявки</li>
                    <li>Сопровождение до получения выплаты</li>
                    <li>Контроль покупки и отчётность</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="grid-item order-6">
              <div class="grid-item__header text-nav text-sub">{ Обучение }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Бесплатное обучение</div>
                <div class="grid-item__text">
                  При покупке аппарата Legacy предоставляется бесплатное обучение в нашем обучающем центре, онлайн и
                  офлайн. Выдаётся диплом гос. образца или именной сертификат
                </div>
              </div>
            </div>

            <div class="grid-item grid-item--img order-7">
              <NuxtImg
                format="webp, avif"
                src="/img/benefits_2.jpg"
                alt="Деталь аппарата Legacy"
                class="grid-item__img"
                loading="lazy"
                sizes="500px xs:800px sm:700px md:800px lg:700px"
              />
            </div>

            <div class="grid-item order-8">
              <div class="grid-item__header text-nav text-sub">{ Производство }</div>
              <div class="grid-item__body">
                <div class="grid-item__title text-h3">Собственное производство</div>
                <div class="grid-item__text">
                  Аппараты Legacy проходят строгий контроль качества на каждом этапе производства. Оборудование имеет
                  официальные сертификаты качества и соответствует международным стандартам
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="distributors" class="flex-center section distributors">
      <div class="contained">
        <div class="lead">
          <div class="lead__header text-nav text-sub">
            <span class="lead__index">4.0</span>
            <div class="lead__text">
              <span class="lead__title">{ Для дистрибьюторов }</span>
              <span class="lead__subtitle">Legacy</span>
            </div>
          </div>

          <h2 class="lead__body text-h2">Сотрудничество, которое работает</h2>
        </div>

        <div class="section__content">
          <h3 class="section__title text-h3 font-secondary">Условия сотрудничества</h3>

          <div class="section__text" role="list" aria-label="Условия сотрудничества">
            <p>Эксклюзивные цены и специальные условия закупки для официальных дистрибьюторов.</p>
            <p>Пожизненная гарантия на все аппараты для клиентов через партнёров.</p>
            <p>Индивидуальная поддержка и консультации на каждом этапе сотрудничества.</p>
            <p>
              Обучение работе с оборудованием и маркетинговой стратегией продаж, чтобы вы могли эффективно развивать
              свой бизнес.
            </p>
            <p>Приоритетный доступ к новинкам линейки Legacy и новым технологиям.</p>
            <p>
              Полный набор маркетинговых инструментов: готовые инструкции, фото, видео и пошаговые планы продвижения для
              быстрого старта и успешных продаж.
            </p>
            <p>
              Совместные акции и промо-материалы, которые повышают узнаваемость бренда и привлекают новых покупателей.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { inject } from "vue";

const data = inject("data");
</script>

<style lang="scss" scoped></style>
