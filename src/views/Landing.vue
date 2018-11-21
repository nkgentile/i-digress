<template>
  <article class="container">
    <div class="row h-100">
      <figure class="embed-responsive embed-responsive-16by9">
        <video
          class="embed-responsive-item"
          autoplay
          loop
          muted
          preload="auto"
        >
          <source
            :src="clipUrl"
            type="video/mp4"
          />
        </video>
        <figcaption class="embed-responsive-item d-flex justify-content-center align-items-center">
          <h1>Test</h1>
        </figcaption>
      </figure>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'home',
    computed: {
      clipUrl(){
        return process.env.VUE_APP_CLIP_URL;
      },
    },
  };
</script>
