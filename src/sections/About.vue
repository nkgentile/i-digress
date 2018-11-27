<template>
    <section class="container py-5">
      <header class="w-md-80 w-lg-60 text-center mx-md-auto mb-9">
          <p class="lead">I Digress follows 27 year-old Sofia and her sassy squad as they text, swipe and post their way through an “adulthood” that feels as blurred and inundated as their screens.</p>
      </header>
    </section>
</template>

<script>
  import bMedia from 'bootstrap-vue/es/components/media/media';
  import bImg from 'bootstrap-vue/es/components/image/img';
  import ProfileAvatar from '@/components/ProfileAvatar';

  import principals from '@/assets/json/principals';

  export default {
    components: {
      bMedia,
      ProfileAvatar,
    },
    computed: {
      principals() {
        return principals;
      },
    },
  };
</script>