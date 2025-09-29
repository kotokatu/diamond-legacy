<template>
  <section ref="heroRef" class="wrapper section hero">
    <q-parallax :height="760">
      <template #media>
        <video autoplay loop muted>
          <!-- TODO: добавить поддержку webm -->
          <source type="video/mp4" src="/video/hero.mp4" />
        </video>
        <div class="overlay" />
      </template>

      <div class="section__content contained">
        <p class="section__title">{ Diamond Legacy }</p>
        <h1 class="section__text">
          Инновационное оборудование для быстрого роста вашего бизнеса в
          Beauty-сфере
        </h1>
      </div>
    </q-parallax>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.section {
  position: relative;
  font-family: var(--font-secondary);
  background-color: #efefef;
}

.section__content {
  padding: 128px 40px;
}

.section__title {
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  font-style: italic;
  color: var(--q-base);
  opacity: 0.5;
}

.section__text {
  font-size: 64px;
  font-weight: 400;
  line-height: 72px;
  letter-spacing: 0px;
  color: var(--q-base);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(35, 36, 32, 0.5);
}
</style>
