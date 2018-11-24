<template>
  <article class="container">
    <SectionHero/>
    <SectionAbout/>
    <SectionSquad/>
    <SectionBts/>
  </article>
</template>

<script>
  import SectionHero from '@/sections/Hero';
  import SectionAbout from '@/sections/About';
  import SectionSquad from '@/sections/Squad';
  import SectionBts from '@/sections/BTS';


  export default {
    name: 'home',
    components: {
      SectionHero,
      SectionAbout,
      SectionSquad,
      SectionBts,
    },
  };
</script>
