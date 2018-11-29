<template>
  <section class="overlay-background overlay-gradient">
    <figure class="embed-responsive embed-responsive-16by9" style="min-height: 90vh">
      <video class="embed-responsive-item" autoplay loop muted playsinline="true" preload="auto">
        <source :src="clip" type="video/mp4">
      </video>
      <figcaption class="embed-responsive-item d-flex align-items-center" style="z-index: 1">
        <div class="container">
          <div class="row text-center">
            <img class="mx-auto mb-3" :src="logo">
            <h3
              class="text-white"
            >I Digress follows 27 year-old Sofia and her sassy squad as they text, swipe and post their way through an “adulthood” that feels as blurred and inundated as their screens.</h3>
          </div>
        </div>
      </figcaption>
    </figure>
  </section>
</template>

<script>
import logo from "@/assets/images/svg/logo.svg";

export default {
  computed: {
    clip: () => process.env.VUE_APP_REEL_URL,
    logo: () => logo,
    observer() {
      return new IntersectionObserver(
        entries => {
          console.log(entries);
        },
        {
          threshold: 0.5
        }
      );
    }
  },
  mounted() {
    this.observer.observe(this.$el);
  }
};
</script>