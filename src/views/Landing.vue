<template>
  <article class="background-repeat" :style="{
      backgroundImage: `url(${emoji})`,
    }">
    <SectionHero/>
    <SectionAbout/>
    <SectionSquad/>
    <SectionBts/>
    <section-principals/>
    <section-credits/>
    <footer class="text-center bg-dark px-3 py-5">
      <a href="mailto:idigressllc@gmail.com" class="btn btn-primary btn-rounded">Contact Us</a>
    </footer>
  </article>
</template>

<script>
import SectionHero from "@/sections/Hero";
import SectionAbout from "@/sections/About";
import SectionSquad from "@/sections/Squad";
import SectionBts from "@/sections/BTS";
import SectionPrincipals from "@/sections/Principals";
import SectionCredits from "@/sections/Credits";

import emoji from "@/assets/images/svg/emoji.svg";

export default {
  name: "home",
  components: {
    SectionHero,
    SectionAbout,
    SectionSquad,
    SectionBts,
    SectionPrincipals,
    SectionCredits
  },
  data: () => ({
    emoji
  })
};
</script>
