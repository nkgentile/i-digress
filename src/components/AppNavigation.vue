<template>
  <b-navbar
    toggleable="md"
    fixed="top"
    class="tk-kremlin-pro-semi-exp"
    :variant="isNavTransparent ? 'primary' : 'light'"
    v-b-scrollspy="{offset: 100}"
  >
    <b-navbar-brand class="font-weight-bold mr-5" @click="scrollToElement('hero', $event)">
      <img :src="logo" height="52">
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse">
      <fa-icon icon="bars"/>
    </b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item
          v-for="({
            text,
            target
          },i) in links"
          :key="i"
          :href="`#${ target }`"
          @click="scrollToElement(target, $event)"
          class="mr-3"
        >{{ text }}</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item href="https://www.instagram.com/idigress/">
          <fa-icon :icon="['fab', 'instagram']"/>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import bNavbar from "bootstrap-vue/es/components/navbar/navbar";
import bNavbarNav from "bootstrap-vue/es/components/navbar/navbar-nav";
import bNavbarToggle from "bootstrap-vue/es/components/navbar/navbar-toggle";
import bNavbarBrand from "bootstrap-vue/es/components/navbar/navbar-brand";

import bNavItem from "bootstrap-vue/es/components/nav/nav-item";
import bCollapse from "bootstrap-vue/es/components/collapse/collapse";

import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faInstagram, faBars);

import { FontAwesomeIcon as FaIcon } from "@fortawesome/vue-fontawesome";

import logo from "@/assets/images/svg/logo.svg";

export default {
  components: {
    bNavbar,
    bNavbarNav,
    bNavItem,
    bNavbarToggle,
    bNavbarBrand,
    bCollapse,
    FaIcon
  },
  data: () => ({
    logo,
    links: [
      {
        text: "squad",
        target: "squad"
      },
      {
        text: "BTS",
        target: "bts"
      },
      {
        text: "cast & crew",
        target: "credits"
      }
    ]
  }),
  computed: {
    isNavTransparent() {
      return this.$store.state.isNavTransparent;
    }
  },
  methods: {
    scrollToElement(id, event) {
      event.preventDefault();
      const element = document.getElementById(id);
      this.$scrollTo(element, 150, {
        easing: "ease-in-out",
        offset: -80
      });
    }
  }
};
</script>