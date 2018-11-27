<template>
  <section class="container py-5">
    <main class="py-5">
      <ul class="card-deck list-unstyled">
        <li
          v-for="({
            name,
            role,
            blurb,
          }, i) in principals"
          :key="i"
          class="card pt-5 mb-3 border-white mx-1 shadow-sm"
        >
          <div class="card-body text-center">
              <b-img class="rounded-circle mb-4" blank blank-color="#eee" :height="100" />
              <h4 class="mb-3">{{ name }}</h4>
              <p class="mb-2 text-secondary lead mx-3">{{ blurb }}</p>
          </div>
          <div class="card-footer bg-transparent border-0 text-center py-4">
            <!--
              <a class="btn-link h4 text-secondary p-2" href="#">
                  <i class="fa fa-twitter"></i>
              </a>
            -->
          </div>
        </li>
      </ul>
    </main>
  </section>
</template>

<script>
  import bImg from 'bootstrap-vue/es/components/image/img';

  import principals from '@/assets/json/principals.json';

  export default {
    components: {
      bImg,
    },
    computed: {
      principals: () => principals,
    },
  };
</script>