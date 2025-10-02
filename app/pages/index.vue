<template>
  <div class="page-wrapper">
    <section class="wrapper section hero">
      <!-- <ClientOnly> -->
      <div class="section__video-container">
        <video
          class="section__video"
          type="video/mp4"
          src="../assets/video/hero_video.mp4"
          autoplay
          loop
          muted
        />
      </div>
      <!-- </ClientOnly> -->

      <div class="section__content contained">
        <p class="section__title">{ Diamond Legacy }</p>
        <h1 class="section__text">
          Legacy — косметологические аппараты премиум качества
        </h1>
        <h3 class="section__subtext">
          Уникальный симбиоз многолетнего опыта <br />
          и передовых корейских технологий
        </h3>
      </div>
    </section>

    <section class="wrapper section about">
      <div class="section__top">
        <div class="section__content contained">
          <p class="section__title">{ Diamond Legacy }</p>
          <h1 class="section__text">
            Инновационное оборудование для быстрого роста вашего бизнеса в
            Beauty-сфере
          </h1>
        </div>
      </div>

      <div class="section__bottom">
        <!-- <ClientOnly> -->
        <div class="section__video-container">
          <video
            class="section__video"
            type="video/mp4"
            src="../assets/video/about_video.mp4"
            autoplay
            loop
            muted
          />
        </div>
        <!-- </ClientOnly> -->
      </div>
    </section>

    <section class="wrapper section catalog">Catalog</section>

    <section class="wrapper section contact">Contact</section>

    <section id="benefits" class="wrapper section benefits">Benefits</section>

    <section id="distributors" class="wrapper section distributors">
      Distributors
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.page-wrapper {
  background-color: var(--q-base);
}

.section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--font-secondary);
  min-height: 760px;
}

.section__video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: var(--q-dark);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
  }
}

.section__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.section__content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}

.section__title {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  font-style: italic;
  color: var(--q-base-semi);
}

.section__text {
  font-size: 64px;
  line-height: 72px;
  font-weight: 400;
  letter-spacing: 0px;
  color: var(--q-base);
}

.section__subtext {
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
  letter-spacing: 0px;
  color: var(--q-base);
}

.section.about {
  .section__top {
    padding: 128px 0px;
    width: 100%;
  }

  .section__bottom {
    position: relative;
    width: 100%;
    height: 760px;
  }
}
</style>
