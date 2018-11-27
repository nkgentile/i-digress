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
  import { filter, pathOr } from 'ramda';

  import { library } from '@fortawesome/fontawesome-svg-core';

  import {
    faInstagram,
    faLinkedin,
    faSpotify,
    faTwitter,
  } from '@fortawesome/free-brands-svg-icons';

  library.add(faInstagram, faLinkedin, faSpotify, faTwitter);

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
      routes() {
        return filter(
          pathOr(false, ['meta', 'showInNav']),
          this.$router.options.routes
        );
      },
      socialLinks() {
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