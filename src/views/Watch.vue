<template>
  <article>
      <figure class="embed-responsive embed-responsive-16by9">
        <video
          class="embed-responsive-item"
          ref="video"
        />
        <SocialPopup
          v-if="currentPopup"
          class="social-popup"
          :to="`/watch/popup/${currentPopup.id}`"
        >
            <div v-html="currentPopup.content" />
            <FaIcon
              slot="icon"
              :icon="['fab', currentPopup.icon]"
              size="4x"
            />
        </SocialPopup>
        <span class="timecode">
          {{ currentTime }}
        </span>
      </figure>
    <keep-alive>
      <router-view
        name="modal"
        class="app-modal-container"
      />
    </keep-alive>
  </article>
</template>

<script>
  import {
    library,
  } from '@fortawesome/fontawesome-svg-core';

  import {
    faTimes,
  } from '@fortawesome/free-solid-svg-icons';

  import {
    faSpotify,
  } from '@fortawesome/free-brands-svg-icons';

  library.add(
    faTimes,
    faSpotify
  );

  import {
    FontAwesomeIcon as FaIcon,
  } from '@fortawesome/vue-fontawesome';

  import Player from 'video.js';
  import css from 'video.js/dist/video-js.css';

  import SocialPopup from '@/components/SocialPopup';

  import source from '@/assets/video/video.mp4';

  export default {
    name: 'watch',
    components: {
      FaIcon,
      SocialPopup,
    },
    props: {
      id: {
        type: Number,
      },
    },
    data(){
      return {
        activeCueId: null,
        cuesById: {
          1: {
            id: 1,
            type: 'spotify',
            icon: 'spotify',
            content: '<h1>Test</h1>',
          },
          2: {
            id: 2,
            type: 'spotify',
            icon: 'spotify',
          },
          3: {
            id: 3,
            type: 'spotify',
            icon: 'spotify',
          },
          4: {
            id: 4,
            type: 'spotify',
            icon: 'spotify',
          },
          5: {
            id: 5,
            type: 'spotify',
            icon: 'spotify',
          },
          6: {
            id: 6,
            type: 'spotify',
            icon: 'spotify',
          },
          7: {
            id: 7,
            type: 'spotify',
            icon: 'spotify',
          },
        },
        currentPopup: null,
        currentTime: null,
        didEnter: false,
        player: null,
      };
    },
    methods: {
      initializePlayer(){
        const { video } = this.$refs;
        const options = {
          autoplay: true,
          preload: 'auto',
          muted: true,
          constrols: true,
          sources: [
            {
              src: source,
              type: 'video/mp4',
            },
          ],
        };

        const player = Player(
          video,
          options,
          this.onReady
        );
        this.player = player;
      },

      onReady(){
        this.player.addRemoteTextTrack({
          src: `${process.env.BASE_URL}cues.vtt`,
          kind: 'metadata',
          mode: 'hidden',
          default: true,
          label: 'social',
        }, false);

        this.player.on('timeupdate', () => 
          this.currentTime = this.player.currentTime()
        );

        const cueTrack = this.player.textTracks()[0];
        cueTrack.addEventListener(
          'cuechange',
          () => {
            const { activeCues } = cueTrack;
            if(!activeCues.length) return;

            const { id } = activeCues[0];
            this.dispatchAction(id);
            setTimeout(() => this.currentPopup = null, 3000);
          }
        );
      },
      
      dispatchAction(id){
        const { [id]: currentCue } = this.cuesById;
        this.currentPopup = currentCue;
      },
    },
    mounted(){
      this.initializePlayer();
    },
  };
</script>

<styles lang="less" scoped>
  .close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9999;
    margin: 0.66rem;
  }

  .embed-responsive-fullscreen {
    width: 100%;
    height: 100%;
  }

  .social-popup {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 1rem;
    z-index: 99;
  }

  .timecode {
    position: absolute;
    bottom: 0;
    left: 0;
    color: white;
  }

  .slideout-frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding-top: 3rem;
  }

  .no-events {
    pointer-events: none;
  }

</styles>
