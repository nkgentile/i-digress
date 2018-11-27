<template>
    <b-navbar toggleable="md" fixed="top">

        <b-navbar-brand href="#">I Digress</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <b-nav-item
                    v-for="({
                        text,
                    },i) in links"
                    :key="i"
                    href="#"
                >
                    {{ text }}
                </b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
    import bNavbar from 'bootstrap-vue/es/components/navbar/navbar';
    import bNavbarNav from 'bootstrap-vue/es/components/navbar/navbar-nav';
    import bNavbarToggle from 'bootstrap-vue/es/components/navbar/navbar-toggle';
    import bNavbarBrand from 'bootstrap-vue/es/components/navbar/navbar-brand';

    import bNavItem from 'bootstrap-vue/es/components/nav/nav-item';

    import bCollapse from 'bootstrap-vue/es/components/collapse/collapse';

    export default {
      components: {
        bNavbar,
        bNavbarNav,
        bNavItem,
        bNavbarToggle,
        bNavbarBrand,
        bCollapse,
      },
      computed: {
        links() {
          return [
            {
              text: 'Squad',
            },
            {
              text: 'Credits',
            },
          ];
        },
      },
    };
</script>