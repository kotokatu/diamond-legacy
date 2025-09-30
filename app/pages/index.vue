<template>
  <section class="wrapper section hero">
    <div class="section__background">
      <ClientOnly>
        <video class="section__video" type="video/mp4" src="../assets/video/slide_1.mp4" autoplay loop muted />
        <div class="overlay" />
      </ClientOnly>
    </div>

    <div class="section__content contained">
      <p class="section__title">{ Diamond Legacy }</p>
      <h1 class="section__text">Инновационное оборудование для быстрого роста вашего бизнеса в Beauty-сфере</h1>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.section {
  position: relative;
  font-family: var(--font-secondary);
  background-color: #efefef;
}

.section__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.section__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.section__content {
  position: relative;
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
</style>
