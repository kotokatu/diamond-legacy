import { ref, watch } from "vue";

export const useAutoClose = () => {
  const route = useRoute();
  const open = ref(false);

  watch(route, () => {
    open.value = false;
  });

  return {
    open,
  };
};
