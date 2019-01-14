<template>
  <div id="app">
    <AppNavigation v-if="!hideNavigation"/>
    <router-view id="app-content-container"/>
  </div>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";

export default {
  name: "app",

  components: {
    AppNavigation
  },

  computed: {
    hideNavigation() {
      const { meta } = this.$route;
      return meta.hideNavigation;
    }
  }
};
</script>