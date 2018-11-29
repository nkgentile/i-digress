<template>
    <div class="border-gradient">
        <b-img
            class="fit-cover"
            width="150"
            height="150"
            alt="placeholder"
            v-bind="$attrs"
            rounded="circle"
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