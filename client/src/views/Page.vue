<template>
  <div v-if="wiki">
    <h1>{{ wiki.page_name }}</h1>
    {{ wiki.page_content }}
  </div>
  <div v-else>
    <h1>{{ this.$route.params.id}}</h1>
    <p class="border bg-blue-200 p-4">This page does&lsquo;t exist yet</p>
  </div>
</template>

<script>
  export default {
    name: 'Page',
    computed: {
      wiki() {
        return this.$store.getters.selectWiki(this.$route.params.id);
      }
    }
  }
</script>