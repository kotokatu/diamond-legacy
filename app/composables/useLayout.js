import { computed } from "vue";
import { useQuasar } from "quasar";

const modalOpen = ref(false);
const catalogMenuOpen = ref(false);
const navMenuOpen = ref(false);

export function useLayout() {
  const $q = useQuasar();
  const route = useRoute();

  const currentLayout = computed(() => {
    return $q.screen.gt.md ? "default" : "mobile";
  });

  const openModal = () => {
    modalOpen.value = true;
  };
  const closeModal = () => {
    modalOpen.value = false;
  };

  const openNavMenu = () => {
    navMenuOpen.value = true;
  };

  const closeNavMenu = () => {
    navMenuOpen.value = false;
  };

  const openCatalogMenu = () => {
    catalogMenuOpen.value = true;
  };

  const closeCatalogMenu = () => {
    catalogMenuOpen.value = false;
  };

  const closeAllMenus = () => {
    catalogMenuOpen.value = false;
    navMenuOpen.value = false;
  };

  const isDefault = computed(() => currentLayout.value === "default");
  const isMobile = computed(() => currentLayout.value === "mobile");


  watch(route, () => {
    modalOpen.value = false;
    catalogMenuOpen.value = false;
    navMenuOpen.value = false;
  });

  return {
    currentLayout,
    isDefault,
    isMobile,

    modalOpen,
    catalogMenuOpen,
    navMenuOpen,

    openModal,
    closeModal,
    openNavMenu,
    closeNavMenu,
    openCatalogMenu,
    closeCatalogMenu,
    closeAllMenus,
  };
}
