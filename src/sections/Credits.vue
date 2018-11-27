<template>
  <section>
    <main class="container">
    </main>
  </section>
</template>

<script>
  import bCardGroup from 'bootstrap-vue/es/components/card/card-group';
  import bCard from 'bootstrap-vue/es/components/card/card';

  import cast from '@/assets/json/cast.json';
  import crew from '@/assets/json/crew.json';

  export default {
    components: {
      bCardGroup,
      bCard,
    },
    computed: {
      cast: () => cast,
      crew: () => crew,
    },
  };
</script>