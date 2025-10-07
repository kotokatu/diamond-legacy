import { useQuasar } from "quasar";

export const useLayout = () => {
  const $q = useQuasar();
  const layout = computed(() => {
    return $q.screen.gt.lg ? "default" : "mobile";
  });

  return layout;
};
