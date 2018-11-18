<template>
  <transition
    name="popup"
    appear
  >
    <router-link v-bind="$attrs">
      <article class="social-popup">
        <main class="social-popup-content">
          <slot/>
        </main>
        <figure class="social-popup-icon">
          <slot name="icon" />
        </figure>
      </article>
    </router-link>
  </transition>
</template>

<script>
  export default {
    inheritAttrs: false,
  };
</script>

<style lang="less" scoped>
  .social-popup {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 1rem;
  }
</style>

