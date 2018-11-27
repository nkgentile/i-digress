<template>
    <section class="container py-5">
        <header>
            <h1 class="text-center">Meet the Squad</h1>
        </header>
        <main class="py-5">
            <ul class="row list-unstyled">
                <li
                    v-for="({
                        name,
                        handle,
                        url,
                        tagline,
                    }, i) in squad"
                    :key="i"
                    class="col-lg-3 text-center mx-auto"
                >
                    <profile-avatar class="mb-5" />
                    <h3 class="h4 text-dark">{{ name }}</h3>
                    <p class="lead text-secondary mb-4">{{ tagline }}</p>
                    <ul class="list-inline mt-4">
                        <li class="list-inline-item">
                            <a class="btn-link h5 text-secondary" href="#">
                                <i class="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn-link h5 text-secondary mx-1" href="#">
                                <i class="fa fa-facebook-official"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn-link h5 text-secondary" href="#">
                                <i class="fa fa-dribbble"></i>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </main>
    </section>
</template>

<script>
    import bMedia from 'bootstrap-vue/es/components/media/media';
    import bImg from 'bootstrap-vue/es/components/image/img';
    import bCard from 'bootstrap-vue/es/components/card/card';
    import ProfileAvatar from '@/components/ProfileAvatar';

    import squad from '@/assets/json/squad.json';

    export default {
      components: {
        bMedia,
        bCard,
        ProfileAvatar,
      },
      computed: {
        squad: () => squad,
      },
    };
</script>