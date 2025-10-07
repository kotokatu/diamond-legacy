import { ref, onUnmounted, watch } from "vue";
import { useRoute } from "vue-router";

export const useAutoClose = () => {
  const route = useRoute();
  const open = ref(false);

  onUnmounted(() => {
    open.value = false;
  });

  watch(route, () => {
    open.value = false;
  });

  return {
    open,
  };
};
