<template>
  <ModalWrapper>
    <article>
        <main
          class="slideout-frame"
        >
          <section
            class="embed-responsive embed-responsive-fullscreen"
          >
            <iframe
              class="embed-responsive-item"
              src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
              width="300"
              height="380"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </section>
        </main>
    </article>
  </ModalWrapper>
</template>

<script>
  import ModalWrapper from '@/components/Modal';

  export default {
    name: 'overlay',
    components: {
      ModalWrapper,
    },
  };
</script>
