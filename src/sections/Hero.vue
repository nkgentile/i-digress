<template>
    <section class="row h-100">
      <figure class="embed-responsive embed-responsive-16by9">
        <video
          class="embed-responsive-item"
          autoplay
          loop
          muted
          preload="auto"
        >
          <source
            :src="clip"
            type="video/mp4"
          />
        </video>
        <figcaption class="embed-responsive-item d-flex justify-content-center align-items-center">
            <img :src="logo" />
        </figcaption>
      </figure>
    </section>
</template>

<script>
    import logo from '@/assets/images/svg/logo.svg';

    export default {

        computed: {
            clip: () => process.env.VUE_APP_CLIP_URL,
            logo: () => logo,
        },
    }
</script>