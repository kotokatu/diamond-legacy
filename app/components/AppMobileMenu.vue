<template>
  <q-drawer
    v-model="isOpen"
    side="right"
    :width="$q.screen.width + 1"
    no-swipe-open
    :breakpoint="1024"
    :aria-hidden="!isOpen"
    :aria-modal="isOpen"
    role="dialog"
  >
    <div class="mobile-menu">
      <div class="mobile-menu__toolbar">
        <div>
          <button
            v-if="arrowIcon"
            class="mobile-menu__btn mobile-menu__arrow-btn"
            type="button"
            aria-label="Назад"
            @click="back"
          >
            <ArrowIcon class="icon icon--arrow" aria-hidden="true" />
          </button>
        </div>
        <div>
          <span
            v-if="title"
            class="mobile-menu__title"
            role="heading"
            aria-level="2"
            >{{ title }}</span
          >
        </div>
        <div>
          <button
            v-if="closeIcon"
            class="mobile-menu__btn mobile-menu__close-btn"
            type="button"
            aria-label="Закрыть меню"
            @click="close"
          >
            <CloseIcon class="icon icon--close" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div class="mobile-menu__inner" aria-label="Мобильная навигация">
        <slot />
      </div>
    </div>
  </q-drawer>
</template>

<script setup>
import { useLayout } from "@/composables/useLayout";
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

const { isDefault } = useLayout();
const isOpen = defineModel({
  type: Boolean,
  default: false,
});

const close = () => {
  isOpen.value = false;
  emit("close");
};

const back = () => {
  isOpen.value = false;
  emit("back");
};

watch(isDefault, (val) => {
  if (val) {
    close();
  }
});
</script>

<style lang="scss" scoped>
.mobile-menu {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: $dark;
  outline: none;
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

.mobile-menu__btn {
  background: transparent;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
}

.icon--arrow,
.icon--close {
  width: 22px;
  height: 22px;

  :deep(path) {
    fill: $base;
  }
}

.icon--arrow {
  transform: rotate(180deg);
}
</style>
