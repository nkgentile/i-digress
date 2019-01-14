<template>
  <section id="hero" class="overlay-background overlay-semi-opaque">
    <figure class="embed-responsive embed-responsive-16by9 bg-dark" style="min-height: 90vh">
      <video
        class="embed-responsive-item"
        autoplay
        loop
        muted
        playsinline="true"
        preload="auto"
        :poster="video.poster"
      >
        <source :src="video.src" :type="video.type">
      </video>
      <figcaption class="embed-responsive-item d-flex align-items-center" style="z-index: 1">
        <div class="container">
          <div class="row justify-content-center">
            <b-button to="/watch" variant="gradient" class="p-3">
              <span class="display-4">
                <fa-icon icon="play-circle"/>
                <span class="ml-2 tk-kremlin-pro-semi-exp">Watch Trailer</span>
              </span>
            </b-button>
          </div>
        </div>
      </figcaption>
    </figure>
  </section>
</template>

<script>
import { FontAwesomeIcon as FaIcon } from "@fortawesome/vue-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faPlayCircle);

import bButton from "bootstrap-vue/es/components/button/button";

import throttle from "lodash/throttle";
import logo from "@/assets/images/svg/logo.svg";
import { reel as video } from "@/assets/json/videos.json";

import { mapMutations } from "vuex";

export default {
  components: {
    FaIcon,
    bButton
  },
  data: () => ({
    video,
    logo
  }),
  methods: {
    ...mapMutations(["setNavTransparent"]),
    onScroll() {
      this.setNavTransparent(window.pageYOffset < 200);
    }
  },
  created() {
    this.onScroll();
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>