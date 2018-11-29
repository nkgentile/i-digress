<template>
  <section class="container py-5">
    <main class="py-5">
      <ul class="card-deck list-unstyled">
        <li
          v-for="({
            name,
            role,
            blurb,
            url,
          }, i) in principals"
          :key="i"
          class="card pt-5 mb-3 border-white mx-5 shadow-sm"
        >
          <div class="card-body text-center">
              <b-img class="mb-4 fit-cover" :src="portraits[i]" :width="100" :height="100" rounded="circle"/>
              <h4 class="mb-3"><a :href="url" target="_blank">{{ name }}</a></h4>
              <h5 class="text-muted">{{ role }}</h5>
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
  import portraits from '@/assets/images/jpg/principals';

  export default {
    components: {
      bImg,
    },
    computed: {
      principals: () => principals,
      portraits: () => portraits,
    },
  };
</script>