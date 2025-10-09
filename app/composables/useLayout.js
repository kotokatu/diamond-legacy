import { computed } from 'vue';
import { useQuasar } from 'quasar';
import { useAutoClose } from './useAutoClose';

export function useLayout() {
  const $q = useQuasar();

  const currentLayout = computed(() => {
    return $q.screen.gt.md ? 'default' : 'mobile';
  });

  const { open: modalOpen } = useAutoClose();
  const { open: catalogMenuOpen } = useAutoClose();
  const { open: navMenuOpen } = useAutoClose();

  const openModal = () => {
    modalOpen.value = true;
  };

  const openNavMenu = () => {
    navMenuOpen.value = true;
  };

  const closeNavMenu = () => {
    navMenuOpen.value = false;
  }

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

  const isDefault = computed(() => currentLayout.value === 'default');
  const isMobile = computed(() => currentLayout.value === 'mobile');

  return {
    currentLayout,
    isDefault,
    isMobile,
    
    modalOpen,
    catalogMenuOpen,
    navMenuOpen,
    
    openModal,
    openNavMenu,
    closeNavMenu,
    openCatalogMenu,
    closeCatalogMenu,
    closeAllMenus
  };
}
