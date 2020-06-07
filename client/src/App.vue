<template>
  <div class="max-w-6xl mx-auto mt-6 px-4">
    <div class="flex justify-end capitalize" v-if="this.$route.name !== 'History'">
      <router-link v-if="editLink" class="p-2" :to="`/edit/${this.$route.params.id}`">edit page</router-link>
      <router-link class="p-2" to="/history">view history</router-link>
    </div>
    <router-view/>
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
