<template>
  <div>
    <h1>Search Results</h1>
    <ul v-if="search_results.length">
      <li v-for="wiki in search_results" :key="wiki.rowid">
        <router-link class="text-blue-600" :to="`/page/${wiki.page_name.replace(/\s/g, '-').toLowerCase()}`">{{ wiki.page_name }}</router-link>
      </li>
    </ul>
    <h2 v-else>No Results Found</h2>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'Search',
    computed: mapState(['search_results'])
  }
</script>
