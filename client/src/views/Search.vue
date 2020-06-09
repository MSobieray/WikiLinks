<template>
  <div>
    <h1>Search Results</h1>
    <wikis v-if="search_results && search_results.length" :wikis="search_results" />
    <h2 v-else>No Results Found</h2>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import wikis from '../components/AllWikis';
  export default {
    name: 'Search',
    components: {
      wikis
    },
    computed: mapState(['search_results'])
  }
</script>
