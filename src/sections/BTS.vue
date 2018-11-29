<template>
    <section class="background-gradient mb-5">
        <div class="container" style="transform: translateY(2rem)">
            <header class="row">
                <h1 class="display-1 mx-auto p-3 text-white tk-kremlin-pro-semi-exp">BTS</h1>
            </header>
            <figure class="embed-responsive embed-responsive-16by9">
                <video class="embed-responsive-item" :poster="poster" controls preload="none">
                    <source :src="video" type="video/mp4">
                </video>
            </figure>
        </div>
    </section>
</template>

<script>
    import poster from '@/assets/images/jpg/poster.jpg';

    export default {
      computed: {
        video: () => process.env.VUE_APP_BTS_URL,
        poster: () => poster,
      },
    };
</script>