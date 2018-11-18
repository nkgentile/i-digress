<template>
  <main>
    <article v-for="member in members">
      <h5>{{ member.name }}</h5>
    </article>
  </main>
</template>

<script>
  export default {
    name: 'squad',
    computed: {
      members(){
        return [
          {
            name: 'Sofia',
          },
          {
            name: 'Ethan',
          },
          {
            name: 'Shane',
          },
          {
            name: 'Ava',
          },
          {
            name: 'Jackson',
          },
          {
            name: 'Ashley',
          },
        ];
      },
    },
  };
</script>

<style lang="less">
</style>
