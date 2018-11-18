<template>
  <transition
    name="slide-up"
    @enter="onEnter"
    appear
    v-bind="$attrs"
  >
    <article>
      <slot/>
      <transition name="fade">
        <button
          v-if="didEnter"
          class="close text-white"
          aria-label="Close"
          @click="$router.go(-1)"
        >
          <FaIcon
            aria-hidden="true"
            icon="times"
          />
        </button>
      </transition>
    </article>
  </transition>
</template>

<script>
  import {
    library,
  } from '@fortawesome/fontawesome-svg-core';

  import {
    faTimes,
  } from '@fortawesome/free-solid-svg-icons';

  library.add(
    faTimes,
  );

  import {
    FontAwesomeIcon as FaIcon,
  } from '@fortawesome/vue-fontawesome';

  export default {
    components: {
      FaIcon,
    },
    data(){
      return {
        didEnter: false,
      };
    },
    methods: {
      onEnter(){
        setTimeout(() => this.didEnter = true, 1000);
      },
    },
  };
</script>

<style lang="less" scoped>
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      #ff9a9e,
      #fecfef
    );
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9999;
    margin: 0.66rem;
  }
</style>
