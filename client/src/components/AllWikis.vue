<template>
  <div>
    <ul>
      <li v-for="wiki in wikis" :key="wiki.wiki_id" class="flex justify-between">
        <router-link class="text-lg text-blue-600 flex-1" :to="{ name: 'Page', params: { id: wiki.page_slug }}">
          {{ wiki.page_name }}
        </router-link>
        <span class="text-sm flex-1">created: {{ wiki.created_at | formatDate }}</span>
        <span class="text-sm flex-1">updated: {{ wiki.updated_at | formatDate }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AllWikis',
  props: {
    wikis: {
      type: Array,
      required: true
    }
  }
}
</script>