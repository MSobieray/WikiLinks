<template>
  <div id="app" class="max-w-6xl mx-auto mt-8">
    <div class="flex justify-end" >
      <ul class="flex justify-around">
        <li class="px-2"><a href="">edit page</a></li>
        <li class="px-2"><a href="">view history</a></li>
      </ul>
    </div>
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
