import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wikis: null,
    search_results: null,
    diffs: null
  },
  mutations: {
    SET_WIKIS(state, payload) {
      Vue.set(state, 'wikis', payload);
    },
    UPDATE_WIKI(state, payload) {
      const wikiIndex = state.wikis.indexOf(payload);
      state.wikis[wikiIndex] = payload;
    },
    SEARCH_RESULTS(state, payload) {
      state.search_results = payload;
    },
    SET_DIFFS(state, payload) {
      state.diffs = payload;
    }
  },
  actions: {
    getWikis({commit}) {
      fetch('/api/wikis')
      .then(blob => blob.json())
      .then(data => {
        commit("SET_WIKIS", data);
      });
    },
    getChangelog({commit}, payload) {
      fetch(`/api/changelog/${payload}`)
      .then(blob => blob.json())
      .then((data) => {
        commit('SET_DIFFS', data); 
      });
    },
    changelog({getters}, payload) {
      const wiki = getters.selectWiki(payload.page_slug);
      wiki.updates = payload.page_content;
      console.log(wiki)
      fetch(`/api/changelog/${payload.wiki_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(wiki)
      });
    },
    updateWiki({commit, dispatch}, payload) {  
      fetch(`/api/update/${payload.wiki_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(() => {
        dispatch('changelog', payload)
        commit('UPDATE_WIKI', payload)
      })
      .catch(err => {
        console.log(err);
      }); 
    },
    createWiki({dispatch}, payload) {
      fetch(`/api/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).then(() => {
        dispatch("getWikis");
      });
    },
    searchWikis({commit}, payload) {
      fetch(`/api/search?search=${payload}`).then(res => res.json()).then(json => {
        commit('SEARCH_RESULTS', json)
      })
    }
  },
  getters: {
    selectWiki: state => (slug) => {
      return state.wikis.find(wiki => wiki.page_slug === slug);
    },
    selectChangelog: state => (id) => {
      console.log(state.diffs);
      return state.diffs.find(diff => diff.changelog_id === Number(id));
    }
  }
})
