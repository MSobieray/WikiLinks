<template>
  <div id="app">
    <h1 class="text-3xl">Matt's Wiki Links</h1>
    <all-wikis />
  </div>
</template>

<script>
import AllWikis from './components/AllWikis.vue'

export default {
  name: 'App',
  components: {
    AllWikis
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
