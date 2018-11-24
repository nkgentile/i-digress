<template>
    <b-navbar toggleable="md" type="dark" variant="info" fixed="top" :sticky="true">

        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
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
        }
    };
</script>