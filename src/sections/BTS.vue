<template>
    <section class="overlay-background overlay-gradient p-3 mb-5">
        <div class="container">
            <header class="row">
                <h1 class="display-1 mx-auto p-3">BTS</h1>
            </header>
            <figure class="embed-responsive embed-responsive-16by9" style="transform: translateY(10%)">
                <video class="embed-responsive-item" :poster="poster" controls preload="none">
                    <source :src="video" type="video/mp4">
                </video>
            </figure>
        </div>
    </section>
</template>

<script>
    import bMedia from 'bootstrap-vue/es/components/media/media';
    import bImg from 'bootstrap-vue/es/components/image/img';
    import ProfileAvatar from '@/components/ProfileAvatar';

    import poster from '@/assets/images/jpg/poster.jpg';

    export default {
      components: {
        bMedia,
        bImg,
        ProfileAvatar,
      },
      computed: {
        video: () => process.env.VUE_APP_CLIP_URL,
        poster: () => poster,
      },
    };
</script>