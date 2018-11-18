<template>
  <main class="container">
    <figure
      class="background embed-responsive embed-responsive-fullscreen"
      @click="$router.push('watch')"
    >
      <img
        class="embed-responsive-item"
        :src="poster"
      />
    </figure>
    <section class="content">
      <FaLayers
        class="fa-4x"
        fixed-width
      >
        <FaIcon
          icon="circle"
          transform="grow-12"
          :style="{
            color: 'orange',
          }"
        />
        <FaIcon
          icon="play"
          transform="down-1 right-2"
          :style="{
            opacity: 0.5,
          }"
        />
        <FaIcon
          icon="play"
          class="fa-inverse"
          transform="right-2"
        />
      </FaLayers>
    </section>
  </main>
</template>

<script>
  import {
    library,
  } from '@fortawesome/fontawesome-svg-core';

  import {
    faPlay,
    faPause,
    faCircle,
  } from '@fortawesome/free-solid-svg-icons';

  import {
    faInstagram,
    faLinkedinIn,
    faSpotify,
    faTwitter,
  } from '@fortawesome/free-brands-svg-icons';

  library.add(
    faPlay,
    faPause,
    faCircle,
    faInstagram,
    faLinkedinIn,
    faSpotify,
    faTwitter,
  );

  import {
    FontAwesomeIcon as FaIcon,
    FontAwesomeLayers as FaLayers,
    FontAwesomeLayersText as FaText,
  } from '@fortawesome/vue-fontawesome';

  import poster from '@/assets/images/poster.jpg';

  export default {
    name: 'home',

    components: {
      FaIcon,
      FaLayers,
      FaText,
    },

    computed: {
      poster(){
        return poster;
      },
    },
  }
</script>

<style lang="less" scoped>
  .container {
    min-width: 100%;
    min-height: 100%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(12, 1fr);
  }

  .content {
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: auto;
    justify-content: center;
    align-items: center;
  }

  .content, .background {
    grid-column: 1 / span 3;
    grid-row: 1 / span 12;
  }
</style>
