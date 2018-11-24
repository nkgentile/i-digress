<template>
    <section>
      <header>
          <h1>About</h1>
          <p>I Digress follows 27 year-old Sofia and her sassy squad as they text, swipe and post their way through an “adulthood” that feels as blurred and inundated as their screens.</p>
      </header>
      <main>
          <ul class="list-unstyled">
            <b-media
              v-for="({
                name,
                role,
                blurb,
              }, i) in principals"
              :key="i"
              tag="li"
              class="mb-3"
            >
              <b-img
                slot="aside"
                class="rounded-circle"
                blank
                blank-color="#ccc"
                width="80"
                alt="placeholder"
              />
              <h5>{{ name }}</h5>
              <p>{{ role }}</p>
              <p v-if="blurb.length > 0">{{ blurb }}</p>
            </b-media>
          </ul>
      </main>
    </section>
</template>

<script>
    import bMedia from 'bootstrap-vue/es/components/media/media';
    import bImg from 'bootstrap-vue/es/components/image/img';

    import principals from '@/assets/json/principals';

    export default {
        components: {
            bMedia,
            bImg,
        },
        computed: {
            principals(){
                return principals;
            },
        },
    };
</script>