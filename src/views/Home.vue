<template>
  <main>
    <figure class="trailer embed-responsive embed-responsive-16by9">
      <VimeoPlayer
        v-if="false"
        class="embed-responsive-item"
        ref="player"
        :video-id="255316299"
        :options="{
          background: true,
          byline: false,
          portrait: false,
          transparent: true,
          title: false,
        }"
        @ready="$refs.player.pause()"
      />
      <img
        class="embed-responsive-item"
        :src="poster"
      />
      <FaLayers
        class="fa-4x"
        fixed-width
      >
        <FaIcon
          :icon="faCircle"
        />
        <FaIcon
          class="fa-inverse"
          :icon="faPlay"
          transform="shrink-6 right-1"
        />
      </FaLayers>
    </figure>
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

  library.add(
    faPlay,
    faPause,
    faCircle,
  );

  import {
    FontAwesomeIcon as FaIcon,
    FontAwesomeLayers as FaLayers,
  } from '@fortawesome/vue-fontawesome';

  import {
    vueVimeoPlayer as VimeoPlayer,
  } from 'vue-vimeo-player';

  import poster from '@/assets/images/poster.png';

  export default {
    name: 'home',

    components: {
      VimeoPlayer,
      FaIcon,
      FaLayers,
    },

    computed: {
      poster(){
        return poster;
      },

      faPlay(){
        return faPlay;
      },

      faPause(){
        return faPause;
      },

      faCircle(){
        return faCircle;
      },
    },
  }
</script>

<style lang="less">
  img.embed-responsive-item {
    object-fit: cover;
    object-position: center;
  }

  .trailer {
    & .fa-layers {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

</style>
