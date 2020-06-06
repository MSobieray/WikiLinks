<template>
  <div>
    <h1>{{history}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'History',
    computed: {
      history() {
        return `history array of diffs for ${this.$route.params.id}`;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>