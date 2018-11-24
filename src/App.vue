<template>
  <div id="app">
    <AppNavigation/>

    <router-view
      id="app-content-container"
    />

    <!--<nav
      id="app-navigation-container"
      class="background-glass"
    >
      <router-link
        v-for="route in routes"
        :to="route.path"
        :key="route.path"
      >
        {{ route.name }}
      </router-link>
    </nav>-->

    <!--<nav
      id="app-social-container"
      class="background-glass"
    >
      <FaIcon
        v-for="link in socialLinks"
        :icon="['fab', link.icon]"
      />
    </nav>
    -->

  </div>
</template>

<script>
import {
  filter,
  pathOr,
} from 'ramda';

import {
  library,
} from '@fortawesome/fontawesome-svg-core';

import {
  faInstagram,
  faLinkedin,
  faSpotify,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faInstagram,
  faLinkedin,
  faSpotify,
  faTwitter,
);

import {
  FontAwesomeIcon as FaIcon,
  FontAwesomeLayers as FaLayers,
} from '@fortawesome/vue-fontawesome';

import AppNavigation from '@/components/AppNavigation';

export default {
  name: 'app',

  components: {
    AppNavigation,
    FaIcon,
    FaLayers,
  },

  computed: {
    routes(){
      return filter(
        pathOr(
          false,
          [
            'meta',
            'showInNav'
          ]
        ),
        this.$router.options.routes
      );
    },
    socialLinks(){
      return [
        {
          icon: 'spotify',
          url: '',
          color: '',
        },
        {
          icon: 'twitter',
          url: '',
          color: '',
        },
        {
          icon: 'instagram',
          url: '',
          color: '',
        },
        {
          icon: 'linkedin',
          url: '',
          color: '',
        },
      ];
    },
  },
};
</script>

<style lang="less">
/*
  #app {
    display: grid;
    grid-template-rows: auto repeat(11, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row;

    width: 100vw;
    height: 100vh;
    padding: 0rem;
    margin: 0;

    &-navigation-container {
      grid-column: 1 / span 3;
      grid-row: 1 / span 2;

      position: relative;
      z-index: 1;

      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: min-content;
      grid-auto-rows: min-content;
      grid-gap: 1rem;
      justify-content: center;
      align-content: center;
    }

    &-content-container {
      grid-column: 1 / span 3;
      grid-row: 1 / span 12;
    }

    &-social-container {
      grid-column: 1 / span 3;
      grid-row: 11 / span 2;

      position: relative;
      z-index: 1;
    }
  }

  a:link {
    &:hover {
      text-decoration: none;
    }
  }

  .router-link-exact-active {
    font-weight: bold;
  }
  */
</style>
