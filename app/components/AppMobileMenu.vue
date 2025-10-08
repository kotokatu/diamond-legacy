<template>
  <q-drawer v-model="modalOpen" :width="$q.screen.width" no-swipe-open>
    <div class="mobile-menu">
      <div class="mobile-menu__toolbar">
        <div>
          <ArrowIcon v-if="arrowIcon" class="mobile-menu__arrow icon" @click="back" />
        </div>
        <div>
          <span v-if="title" class="mobile-menu__title">{{ title }}</span>
        </div>
        <div>
          <CloseIcon v-if="closeIcon" class="mobile-menu__close icon" @click="close" />
        </div>
      </div>

      <div class="mobile-menu__inner">
        <slot />
      </div>
    </div>
  </q-drawer>
</template>

<script setup>
import { useQuasar } from "quasar";
import CloseIcon from "@/assets/icons/bx-x.svg";
import ArrowIcon from "@/assets/icons/bx-arrow.svg";

defineProps({
  title: {
    type: String,
    default: "",
  },
  closeIcon: {
    type: Boolean,
    default: true,
  },
  arrowIcon: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close", "back"]);
const $q = useQuasar();

const modalOpen = defineModel({
  type: Boolean,
  default: false,
});

const close = () => {
  modalOpen.value = false;
  emit("close");
};

const back = () => {
  modalOpen.value = false;
  emit("back");
};

watch(
  () => $q.screen.gt.lg,
  () => {
    close();
  }
);
</script>

<style lang="scss" scoped>
.mobile-menu {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: $dark;
}

.mobile-menu__toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  z-index: 1002;
}

.mobile-menu__inner {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
}

.mobile-menu__title {
  font-size: 24px;
  color: $base;
}

.mobile-menu__arrow,
.mobile-menu__close {
  width: 22px;
  height: 22px;

  :deep(path) {
    fill: $base;
  }
}

.mobile-menu__arrow {
  transform: rotate(180deg);
}
</style>
