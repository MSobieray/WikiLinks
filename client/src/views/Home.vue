<template>
  <div class="home">
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
