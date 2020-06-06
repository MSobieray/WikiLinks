<template>
  <div class="max-w-6xl mx-auto mt-6 px-4">
    <div class="flex justify-end capitalize" v-if="this.$route.name !== 'History'">
      <router-link v-if="this.$route.name !== 'Edit'" class="p-2" to="/edit">edit page</router-link>
      <router-link class="p-2" to="/history">view history</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
