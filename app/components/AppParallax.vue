<template>
  <q-parallax :height="height">
    <template #media>
      <video ref="videoRef" :width="videoWidth" :height="videoHeight" autoplay loop muted>
        <source v-for="source in sources" :key="source.src" :type="source.type" :src="source.src" />
      </video>

      <div v-if="overlay" class="overlay" />
    </template>

    <slot />
  </q-parallax>
</template>

<script setup>
const props = defineProps({
  height: {
    type: Number,
    default: 760,
  },
  src: {
    type: Object,
    Array,
    required: true,
  },
  videoWidth: {
    type: Number,
    default: 0,
  },
  videoHeight: {
    type: Number,
    default: 0,
  },
  overlay: {
    type: Boolean,
    default: true,
  },
});

const sources = computed(() => {
  return [].concat(props.src);
});
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(35, 36, 32, 0.5);
}
</style>
