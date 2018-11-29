<template>
  <div id="app">
    <AppNavigation/>
    <router-view id="app-content-container" />
  </div>
</template>

<script>
  import AppNavigation from '@/components/AppNavigation';

  export default {
    name: 'app',

    components: {
      AppNavigation,
    },
  };
</script>