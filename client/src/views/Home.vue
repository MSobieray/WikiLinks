<template>
  <div class="home">
    <h1>Matts Wikis</h1>
    <router-link class="text-blue-600 text-sm" :to="{name: 'Create'}">Create New Wiki</router-link>
    <p class="mb-6 text-sm">Wikis are created with markdown <router-link class="text-blue-600" :to="{name: 'Markdown'}">Demo</router-link></p>
    <wikis :wikis="wikis" />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import wikis from '@/components/AllWikis'

export default {
  name: 'Home',
  components: {
    wikis
  },
  computed: mapState(['wikis'])
}
</script>
