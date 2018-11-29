<template>
    <section class="container py-5">
        <header>
            <h1 class="display-1 text-center tk-kremlin-pro-semi-exp">Meet the Squad</h1>
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
                    <profile-avatar class="mb-3" :src="portraits[i]" />
                    <h3 class="h4 text-dark"><a :href="url" target="_blank">{{ name }}</a></h3>
                    <blockquote class="blockquote text-center">
                        <p class="mb-0">{{ tagline }}</p>
                        <footer class="blockquote-footer"><cite :title="`@${handle}`">@{{ handle }}</cite></footer>
                    </blockquote>
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
    import portraits from '@/assets/images/jpg/squad';

    export default {
      components: {
        bMedia,
        bCard,
        ProfileAvatar,
      },
      computed: {
        squad: () => squad,
        portraits: () => portraits,
      },
    };
</script>