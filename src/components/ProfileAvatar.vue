<template>
    <div class="border-gradient">
        <b-img
            class="rounded-circle"
            blank
            blank-color="#ccc"
            width="80"
            alt="placeholder"
            v-bind="$attrs"
        />
    </div>
</template>

<script>
    import bImg from "bootstrap-vue/es/components/image/img";

    export default {
      inheritAttrs: false,
      components: {
        bImg,
      },
    };
</script>