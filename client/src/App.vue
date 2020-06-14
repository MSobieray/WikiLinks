<template>
  <div>
    <nav>
      <div class="flex justify-end items-center p-2 bg-teal-500 fixed top-0 right-0 left-0 text-white">
        <router-link class="p-2" to="/">Home</router-link>
        <div v-if="showNav" >
          <router-link class="p-2" :to="`/edit/${this.$route.params.id}`">Edit Page</router-link>
          <router-link class="p-2" :to="`/history/${this.$route.params.id}`">View History</router-link>
        </div>
        <div v-else-if="this.$route.name !== 'Home'">
          <a @click.prevent="back" href="#" class="p-2">Back</a>
        </div>
        <input @keyup.enter="searchWikis" v-model="search" class="border p-2 ml-4 text-gray-900" type="text" placeholder="search">
      </div>
    </nav>
    <div class="mt-24 px-4 max-w-6xl mx-auto min-h-screen">
      <router-view/>
    </div>
    <footer class="bg-gray-100 p-6">
      <div class="px-4 max-w-2xl mx-auto">
        <p class="text-gray-600">Matt's Wikis | Roon Labs</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      search: null
    }
  },
  computed: {
    showNav() {
      if (this.$route.name === "Page" && this.$route.params.id) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    searchWikis() {
      this.$store.dispatch('searchWikis', this.search);
      this.$router.push({name: 'Search', query: {search: this.search}})
    },
    back() {
      this.$router.go(-1);
    }
  }
}
</script>
