<template>
  <article
    class="container-fluid position-fixed fixed-top w-100 h-100"
    style="background-color: black;"
  >
    <div class="row align-items-center h-100">
      <div class="embed-responsive embed-responsive-16by9">
        <video class="video-js embed-responsive-item" ref="player" playsinline webkit-playsinline>
          <track kind="metadata" src="cues.vtt" srclang="en" label="social" default mode="hidden">
        </video>
      </div>
      <a
        v-if="activeCue"
        :href="activeCue.text"
        class="fixed-top w-100 h-100 video-overlay"
        target="_blank"
        @click="onOverlayClick"
      ></a>
      <router-link to="/" class="fixed-top text-white p-1 text-right">
        <fa-icon icon="times-circle" size="2x"/>
      </router-link>
    </div>
  </article>
</template>

<script>
import { FontAwesomeIcon as FaIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faTimesCircle);

import { trailer as video } from "@/assets/json/videos.json";

import Player from "video.js";

export default {
  name: "watch",
  components: {
    FaIcon
  },
  data() {
    return {
      video,
      player: null,
      activeCue: null
    };
  },
  methods: {
    initializePlayer() {
      const { player } = this.$refs;
      const { src, type, poster } = this.video;

      const options = {
        preload: "auto",
        controls: true,
        autoplay: true,
        poster,
        sources: [
          {
            src,
            type
          }
        ]
      };

      this.player = Player(player, options, this.onReady);
    },

    async onReady() {
      const cueTrack = (await this.player.textTracks())[0];
      cueTrack.addEventListener("cuechange", () => {
        const { activeCues } = cueTrack;
        this.activeCue = activeCues.length ? activeCues[0] : null;
      });
    },

    onOverlayClick() {
      this.player.pause();
      this.activeCue = null;
    }
  },
  mounted() {
    this.initializePlayer();
  }
};
</script>

<style>
.video-overlay {
  z-index: 99999;
}
.vjs-fullscreen-control {
  display: none !important;
}
</style>
