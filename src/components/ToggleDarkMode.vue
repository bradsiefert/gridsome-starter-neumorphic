<template>
  <button @click="handleClick" aria-label="Toggle Darkmode" class="btn btn-sm" title="Toggle Darkmode">
    <slot :dark="isDarkMode" />
  </button>
</template>

<script>
export const LIGHTS_OUT = 'dark-mode';

export default {
  data() {
    return {
      isDarkMode: false
    }
  },

  methods: {
    handleClick() {
      const hasDarkMode = document.body.hasAttribute(LIGHTS_OUT);

      // Toggle dark mode on click.
      return this.toggleDarkMode(! hasDarkMode);
    },

    toggleDarkMode(shouldBeDark) {
      document.body.toggleAttribute(LIGHTS_OUT, shouldBeDark);

      this.isDarkMode = shouldBeDark;

      this.writeToStorage(shouldBeDark);

      return shouldBeDark;
    },

    detectPrefered() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.toggleAttribute(LIGHTS_OUT);
      }
    },

    hasInStorage() {
      const check = localStorage.getItem(LIGHTS_OUT);

      return check !== null;
    },

    writeToStorage(prefersDark) {
      localStorage.setItem(LIGHTS_OUT, prefersDark ? 'true' : 'false');
    },

    getFromStorage() {
      return localStorage.getItem(LIGHTS_OUT) === 'true' ? true : false;
    }
  },

  mounted() {
    if (this.hasInStorage()) {
      this.toggleDarkMode(
        this.getFromStorage()
      );
    } else if (process.isClient && window.matchMedia) {
      this.toggleDarkMode(
        this.detectPrefered()
      );
    }
  }
};
</script>

<style>
</style>