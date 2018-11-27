<template>
  <article>
    <SectionHero/>
    <SectionAbout/>
    <SectionSquad/>
    <SectionBts/>
    <section-principals/>
    <section-credits/>
  </article>
</template>

<script>
  import SectionHero from '@/sections/Hero';
  import SectionAbout from '@/sections/About';
  import SectionSquad from '@/sections/Squad';
  import SectionBts from '@/sections/BTS';
  import SectionPrincipals from '@/sections/Principals';
  import SectionCredits from '@/sections/Credits';

  export default {
    name: 'home',
    components: {
      SectionHero,
      SectionAbout,
      SectionSquad,
      SectionBts,
      SectionPrincipals,
      SectionCredits,
    },
  };
</script>
