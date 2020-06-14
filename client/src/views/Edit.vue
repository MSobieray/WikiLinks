<template>
  <div>
    <h1>{{ pageName | slugIt}}</h1>
    <div class="flex">
      <textarea v-model="rawContent" @keyup="converter" class="border h-75 flex-1 p-2 mr-2 max-w-50 overflow-scroll"></textarea>
      <div class="ml-2 p-2 border h-75 flex-1 max-w-50 overflow-scroll markdown-body" v-html="convertedContent">
      </div>
    </div>
    <button class="border py-2 px-8 mt-5 bg-green-500 text-white" @click="save">Save</button>
  </div>
</template>

<script>
  import showdown from 'showdown'
  export default {
    name: 'Edit',
    data() {
      return {
        rawContent: null,
        convertedContent: null
      }
    },
    computed: {
      wiki() {
        return this.$store.getters.selectWiki(this.$route.params.id);
      },
      pageName() {
        return this.$route.params.id
      }
    },
    methods: {
      converter() {
        const converter = new showdown.Converter();
        this.convertedContent = converter.makeHtml(this.rawContent);
      },
      save() {
        if (this.wiki) {
          this.$store.dispatch('updateWiki', {
            page_content: this.rawContent,
            wiki_id: this.wiki.wiki_id,
            page_slug: this.wiki.page_slug
          })
        } else {
          this.$store.dispatch('createWiki', {
            page_content: this.rawContent,
            page_slug: this.$route.params.id,
            page_name: this.pageName.toLowerCase().replace(/-/g, ' ')
          })
        }
      }
    },
    created() {
      if (this.wiki) {
        this.rawContent = this.wiki.page_content;
        this.converter();
      }
    }
  }
</script>