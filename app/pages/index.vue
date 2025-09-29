<template>
  <section ref="sectionRef" class="wrapper section hero">
    <AppParallax
      v-if="videoLoaded"
      :src="VIDEO_SOURCES"
      :height="760"
      :video-width="videoWidth"
      :video-height="videoHeight"
    >
      <div class="section__content contained">
        <p class="section__title">{ Diamond Legacy }</p>
        <h1 class="section__text">Инновационное оборудование для быстрого роста вашего бизнеса в Beauty-сфере</h1>
      </div>
    </AppParallax>

    <q-resize-observer :debounce="0" @resize="handleResize" />
  </section>
</template>

<script setup>
import { ref } from "vue";
const VIDEO_SOURCES = { type: "video/mp4", src: "/video/hero.mp4" };

const videoLoaded = ref(false);
const videoWidth = ref(0);
const videoHeight = ref(0);
const originalVideoWidth = ref(0);
const originalVideoHeight = ref(0);

const handleResize = ({ width }) => {
  if (!(originalVideoWidth.value && !originalVideoHeight.value)) {
    handleVideoLoad(width);
  } else {
    calculateVideoSize(width);
  }
};

const handleVideoLoad = (width) => {
  const video = document.createElement("video");
  video.src = VIDEO_SRC;
  video.onloadedmetadata = () => {
    originalVideoWidth.value = video.videoWidth;
    originalVideoHeight.value = video.videoHeight;
    calculateVideoSize(width);
  };
};

const calculateVideoSize = (width) => {
  const ratio = originalVideoHeight.value / originalVideoWidth.value;
  videoWidth.value = width > originalVideoWidth.value ? width : originalVideoWidth.value;
  videoHeight.value = videoWidth.value * ratio;
  videoLoaded.value = true;
};
</script>

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
</style>
