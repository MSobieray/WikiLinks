<template>
  <div>
    <nav>
      <div class="flex justify-end capitalize p-2 bg-teal-500 fixed top-0 right-0 left-0 text-white" v-if="this.$route.name !== 'History'">
        <router-link v-if="editLink" class="p-2" :to="`/edit/${this.$route.params.id}`">edit page</router-link>
        <router-link v-if="this.$route.name !== 'Home'" class="p-2" to="/history">view history</router-link>
        <input class="border p-2 ml-16 text-gray-900" type="text" placeholder="search">
      </div>
    </nav>
    <div class="mt-24 px-4 max-w-2xl mx-auto min-h-screen">
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
  computed: {
    editLink() {
      if (this.$route.name === "Page" && this.$route.params.id && this.$route.name !== 'Edit') {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>
