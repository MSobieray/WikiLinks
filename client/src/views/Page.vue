<template>
  <div v-if="wiki">
    <h1>{{ wiki.page_name }}</h1>
    <div v-html="pageContent"></div>
  </div>
  <div v-else>
    <h1>{{ this.$route.params.id}}</h1>
    <p class="border bg-blue-200 p-4">This page does&lsquo;t exist yet</p>
  </div>
</template>

<script>
  import showdown from 'showdown'
  export default {
    name: 'Page',
    computed: {
      wiki() {
        return this.$store.getters.selectWiki(this.$route.params.id);
      },
      pageContent() {
        const converter = new showdown.Converter();
        return converter.makeHtml(this.wiki.page_content);
      }
    }
  }
</script>