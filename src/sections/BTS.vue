<template>
  <section id="bts" class="background-gradient mb-5">
    <div class="container" style="transform: translateY(2rem)">
      <header class="row">
        <h1 class="display-1 mx-auto p-3 text-white tk-kremlin-pro-semi-exp">BTS</h1>
      </header>
      <figure class="embed-responsive embed-responsive-16by9">
        <video class="embed-responsive-item" :poster="poster" controls preload="none">
          <source :src="video.src" :type="video.type">
        </video>
      </figure>
    </div>
  </section>
</template>

<script>
import { bts as video } from "@/assets/json/videos.json";
import poster from "@/assets/images/jpg/bts.jpg";

export default {
  data: () => ({
    video,
    poster
  })
};
</script>