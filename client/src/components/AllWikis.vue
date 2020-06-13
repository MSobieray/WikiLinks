<template>
  <div>
    <ul>
      <li v-for="wiki in wikis" :key="wiki.wiki_id" class="flex justify-between">
        <router-link class="text-lg text-blue-600 flex-1" :to="{ name: 'Page', params: { id: wiki.page_slug }}">
          {{ wiki.page_name }}
        </router-link>
        <span class="text-sm flex-1">created: {{ new Date(wiki.created_at).toDateString() }}</span>
        <span class="text-sm flex-1">updated: {{ new Date(wiki.updated_at).toDateString() }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AllWikis',
  props: {
    wikis: {
      type: [Array, null]
    }
  }
}
</script>