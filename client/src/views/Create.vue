<template>
  <div>
    <div>
      <input v-model="title" class="border p-2 mb-4 min-w-full" placeholder="Page Title" type="text" name="Title">
    </div>
    <div class="flex">
      <textarea v-model="rawContent" @keyup="converter" placeholder="Enter Page Content" class="border h-75 flex-1 p-2 mr-2 max-w-50 overflow-scroll"></textarea>
      <div class="ml-2 p-2 border h-75 flex-1 max-w-50 overflow-scroll markdown-body" v-html="convertedContent">
      </div>
    </div>
    <button class="border py-2 px-8 mt-5 bg-green-500 text-white" @click="save">Save</button>
  </div>
</template>

<script>
  import showdown from 'showdown'
  export default {
    name: 'Create',
    data() {
      return {
        rawContent: null,
        convertedContent: null,
        title: null
      }
    },
    methods: {
      converter() {
        const converter = new showdown.Converter();
        this.convertedContent = converter.makeHtml(this.rawContent);
      },
      save() {
        this.$store.dispatch('createWiki', {
          page_content: this.rawContent,
          page_slug: this.title.replace(/\s/g, '-').toLowerCase(),
          page_name: this.title.trim()
        })
        this.$router.push({ name: 'Page', params: {id: this.title.replace(/\s/g, '-').toLowerCase()} })
      }
    }
  }
</script>