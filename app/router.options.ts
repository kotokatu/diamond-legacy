import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // If a saved position exists (e.g., from a back button navigation), restore it
    if (savedPosition) {
      return savedPosition;
    }

    const behavior = to.name === from.name ? "smooth" : "auto";
    // If navigating to a hash link, scroll smoothly to the element
    if (to.hash) {
      return {
        el: to.hash,
        behavior,
        top: 90,
      };
    }

    // Otherwise, scroll to the top of the page
    return { top: 0, behavior };
  },
};
