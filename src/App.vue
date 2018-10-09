<template>
  <div id="app">

    <nav class="app-navigation-container">
      <router-link
        v-for="route in routes"
        :to="route.path"
      >
        {{ route.name }}
      </router-link>
    </nav>

    <router-view
      class="app-content-container"
    />
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    routes(){
      return this.$router.options.routes;
    },
  },
};
</script>

<style lang="less">
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  #app {
    display: grid;
    grid-template-rows: auto 1fr;

    height: 100vh;
    padding: 0.33rem;
  }
</style>
