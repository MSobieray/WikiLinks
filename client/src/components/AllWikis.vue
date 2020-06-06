<template>
  <div>
    <div v-for="wiki in wikis" :key="wiki.rowid">
      <h3 class="text-xl">
        {{ wiki.page_name }}
      </h3>
      <p>
        {{ wiki.page_content }}
      </p>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'AllWikis',
  computed: mapState(['wikis'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
