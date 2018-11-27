<template>
    <b-media v-bind="$attrs">
        <slot name="aside">
            <profile-avatar/>
        </slot>
        <slot name="title"/>
        <slot name="subtitle"/>
        <slot/>
    </b-media>
</template>

<script>
    import bMedia from "bootstrap-vue/es/components/media/media";
    import ProfileAvatar from "@/components/ProfileAvatar";

    export default {
      components: {
        bMedia,
        ProfileAvatar,
      },
    };
</script>

<style scoped>
</style>