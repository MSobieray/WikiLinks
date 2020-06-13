<template>
  <div>
    {{diff}}
    <div v-if="prettyHtml" v-html="prettyHtml"></div>
  </div>
</template>

<script>
  // import showdown from 'showdown';
  import * as Diff2Html from 'diff2html';
  import 'diff2html/bundles/css/diff2html.min.css';
  import * as Diff from 'diff';
  export default {
    name: "Diff",
    computed: {
      changelog() {
        return this.$store.getters.selectChangelog(this.$route.params.id);
      },
      currentContent() {
        const diff = Diff.createPatch(this.changelog.page_name, this.changelog.page_content, this.changelog.content_changes)
        return diff;
      },
      prettyHtml() {
        return Diff2Html.html(this.currentContent, {
          drawFileList: false,
          matching: 'lines',
          outputFormat: 'side-by-side',
        });
      },
    }
  }
</script>

