<template>
    <section>
        <header>
            <h1>Squad</h1>
        </header>
        <main>
            <ul class="list-unstyled">
                <b-media
                    v-for="({
                        name,
                        handle,
                        url,
                        tagline,
                    }, i) in squad"
                    :key="i"
                    tag="li"
                >
                <b-img
                    slot="aside"
                    class="rounded-circle"
                    blank
                    blank-color="#ccc"
                    width="80"
                    alt="placeholder"
                />
                <h5>{{ name }}</h5>
                <p>@{{ handle }}</p>
                <p>{{ tagline }}</p>
                </b-media>
            </ul>
        </main>
    </section>
</template>

<script>
    import bMedia from 'bootstrap-vue/es/components/media/media';
    import bImg from 'bootstrap-vue/es/components/image/img';
    import bCard from 'bootstrap-vue/es/components/card/card';

    import squad from '@/assets/json/squad.json';

    export default {
        components: {
            bMedia,
            bImg,
            bCard,
        },
        computed: {
            squad: () => squad,
        },
    };
</script>