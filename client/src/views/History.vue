<template>
  <div>
    <ul>
      <li v-for="diff in diffs" :key="diff.changelog_id">
        <router-link :to="`/diff/${diff.changelog_id}`">{{ diff.created_at }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'History',
    computed: mapState(['diffs']),
    created() {
      this.$store.dispatch('getChangelog', this.$route.params.id);
    }
  }
</script>