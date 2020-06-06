<template>
  <div>
    <h1>{{ wiki.page_name }}</h1>
    {{ wiki.page_content }}
  </div>
</template>

<script>
  export default {
    name: 'Content',
    computed: {
      wiki() {
        return this.$store.getters.selectWiki(this.$route.params.id);
      }
    }
  }
</script>