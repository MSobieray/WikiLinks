<template>
  <div class="home">
    <h1>Main Page</h1>
    <h4 >Matts Wikis</h4>
    <p class="mb-6 text-sm">Wikis are created with markdown <router-link class="text-blue-600" :to="{name: 'Markdown'}">Demo</router-link></p>
    <all-wikis />
  </div>
</template>

<script>
// @ is an alias to /src
import AllWikis from '@/components/AllWikis'

export default {
  name: 'Home',
  components: {
    AllWikis
  }
}
</script>
