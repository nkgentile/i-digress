<template>
  <div id="app">
    <router-view
      class="app-content-container"
    />
  </div>
</template>

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
