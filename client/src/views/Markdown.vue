<template>
  <div class="markdown-body">
    {{content}}
  </div>
</template>

<script>
  import showdown from 'showdown';
  import markdown from '../data/markdown.md'
  export default {
    name: "Markdown",
  
    computed: {
      content() {
        const converter = new showdown.Converter();
        return converter.makeHtml(markdown);
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>