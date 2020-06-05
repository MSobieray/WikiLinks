<template>
  <div class="">
    <div v-for="wiki in wikis" :key="wiki.page_slug">
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
export default {
  name: 'HelloWorld',
  data() {
    return {
      wikis: null
    }
  },
  props: {
    msg: String
  },
  created() {
    fetch('/api/wikis').then(blob => blob.json()).then(data => {
      this.wikis = data;
    });
  }
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
