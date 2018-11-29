<template>
  <section>
    <main class="container">
      <section class="pb-3">
        <h1 class="text-center tk-kremlin-pro-semi-exp mb-5">
          Cast
        </h1>
        <ul class="list-unstyled row">
          <li
            v-for="({
            name,
            role,
            url,
          }, i) in cast"
            :key="i"
            class="col-6 col-lg-4 mb-5 text-center mx-auto"
          >
            <h4>
              <a :href="url" target="_blank">{{ name }}</a>
            </h4>
            <h5 class="text-muted">{{ role }}</h5>
          </li>
        </ul>
      </section>
      <section>
        <h1 class="text-center tk-kremlin-pro-semi-exp mb-5">
          Crew
        </h1>
        <ul class="list-unstyled row">
          <li
            v-for="({
            name,
            role,
            url,
          }, i) in crew"
            :key="i"
            class="col-4 col-lg-3 mb-5 mx-auto text-center"
          >
            <p class="mb-1">
              <a :href="url" target="_blank">{{ name }}</a>
            </p>
            <small class="text-muted">{{ role }}</small>
          </li>
        </ul>
      </section>
    </main>
  </section>
</template>

<script>
import cast from "@/assets/json/cast.json";
import crew from "@/assets/json/crew.json";

export default {
  components: {},
  computed: {
    cast: () => cast,
    crew: () => crew
  }
};
</script>