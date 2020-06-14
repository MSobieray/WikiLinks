<template>
  <div>
    <h1 class="mb-4">history of changes for {{wiki.page_name}}</h1>
    <ul>
      <li v-for="diff in diffs" :key="diff.changelog_id">
        <router-link class="text-blue-600" :to="`/diff/${diff.changelog_id}`">Changes from: <span class="ml-4 text-sm text-gray-600">{{ diff.created_at | formatDate }}</span></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'History',
    computed: { 
      ...mapState(['diffs']),
      wiki() {
        return this.$store.getters.selectWiki(this.$route.params.id);
      }

    },
    created() {
      if (!this.diffs || this.diffs[0].wiki_id !== this.wiki.wiki_id) {
        this.$store.dispatch('getChangelog', this.wiki.wiki_id);
      }
    }
  }
</script>